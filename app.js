(() => {
  "use strict";

  const menuToggle = document.querySelector("#menu-toggle");
  const mainNav = document.querySelector("#main-nav");
  const desktopViewport = window.matchMedia("(min-width: 1000px)");

  function closeMenu(restoreFocus = false) {
    if (!menuToggle || !mainNav) return;
    const wasOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Otvori izbornik");
    mainNav.classList.remove("is-open");
    if (restoreFocus && wasOpen) menuToggle.focus();
  }

  menuToggle?.addEventListener("click", () => {
    if (!mainNav) return;
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Otvori izbornik" : "Zatvori izbornik",
    );
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav?.addEventListener("click", (event) => {
    if (event.target.closest("a, [data-booking]")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !document.querySelector("dialog[open]")) {
      closeMenu(true);
    }
  });

  desktopViewport.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });

  const bookingDialog = document.querySelector("#booking-dialog");
  const bookingForm = document.querySelector("#booking-form");
  const bookingResult = document.querySelector("#booking-result");
  const inquiryPreview = document.querySelector("#inquiry-preview");
  const emailDraft = document.querySelector("#email-draft");
  const copyStatus = document.querySelector("#copy-status");
  const privacyDialog = document.querySelector("#privacy-dialog");
  let preparedInquiry = "";

  // Normalize pasted values before running the browser's constraint validation.
  if (bookingForm) bookingForm.noValidate = true;

  const field = (name) => bookingForm?.elements.namedItem(name);

  function showInquiryForm(focusField = false) {
    if (bookingForm) bookingForm.hidden = false;
    if (bookingResult) bookingResult.hidden = true;
    if (copyStatus) copyStatus.textContent = "";
    if (focusField) field("name")?.focus();
  }

  function openDialog(dialog) {
    if (!dialog || dialog.open) return;
    closeMenu();
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }

  document.addEventListener("click", (event) => {
    const bookingTrigger = event.target.closest("[data-booking]");
    if (bookingTrigger) {
      event.preventDefault();
      if (!desktopViewport.matches && mainNav?.contains(bookingTrigger)) {
        // The navigation closes; give the native dialog a visible return target.
        menuToggle?.focus();
      }
      const service = bookingTrigger.dataset.service;
      const serviceField = field("service");
      if (service && serviceField?.options) {
        const matchingOption = Array.from(serviceField.options).some(
          (option) => option.value === service,
        );
        if (matchingOption) {
          serviceField.value = service;
          serviceField.setCustomValidity("");
        }
      }
      showInquiryForm();
      openDialog(bookingDialog);
      return;
    }

    if (event.target.closest("[data-privacy]")) {
      event.preventDefault();
      openDialog(privacyDialog);
      return;
    }

    const closeButton = event.target.closest("[data-close-dialog]");
    if (closeButton) {
      event.preventDefault();
      closeButton.closest("dialog")?.close();
    }
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("close", () => {
      document.body.classList.toggle(
        "dialog-open",
        Boolean(document.querySelector("dialog[open]")),
      );
    });

    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      const outsideDialog =
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom;
      if (outsideDialog) dialog.close();
    });
  });

  const requiredMessages = {
    name: "Unesite svoje ime i prezime.",
    email: "Unesite svoju e-mail adresu.",
    service: "Odaberite uslugu.",
    message: "Ukratko opišite što je potrebno vašem vozilu.",
  };

  Object.entries(requiredMessages).forEach(([name, message]) => {
    const input = field(name);
    if (!input) return;
    input.required = true;
    const validate = () => {
      input.setCustomValidity(input.value.trim() ? "" : message);
    };
    input.addEventListener("input", validate);
    input.addEventListener("change", validate);
  });

  bookingForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    Object.entries(requiredMessages).forEach(([name, message]) => {
      const input = field(name);
      if (input) {
        input.value = input.value.trim();
        input.setCustomValidity(input.value ? "" : message);
      }
    });

    if (!bookingForm.reportValidity()) return;

    const value = (name) => field(name)?.value.trim() || "";
    const name = value("name");
    const service = value("service");
    const vehicle = value("vehicle");
    preparedInquiry = [
      "Poštovani,",
      "",
      `zanima me usluga: ${service}.`,
      ...(vehicle ? [`Vozilo: ${vehicle}`] : []),
      "",
      value("message"),
      "",
      "Molim vas da mi se javite radi dogovora i potvrde termina.",
      "",
      `Ime i prezime: ${name}`,
      `E-mail: ${value("email")}`,
      ...(value("phone") ? [`Telefon: ${value("phone")}`] : []),
      "",
      "Lijep pozdrav,",
      name,
    ].join("\n");

    if (inquiryPreview) {
      if ("value" in inquiryPreview) inquiryPreview.value = preparedInquiry;
      else inquiryPreview.textContent = preparedInquiry;
    }

    if (emailDraft) {
      const subject = `Upit za servis — ${service}${vehicle ? ` — ${vehicle}` : ""}`;
      emailDraft.href =
        `mailto:auto-servis@opel-sare.hr?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(preparedInquiry)}`;
    }

    bookingForm.hidden = true;
    if (bookingResult) {
      bookingResult.hidden = false;
      bookingResult.setAttribute("tabindex", "-1");
      bookingResult.focus();
    }
    if (copyStatus) copyStatus.textContent = "";
  });

  document
    .querySelector("#edit-inquiry")
    ?.addEventListener("click", (event) => {
      event.preventDefault();
      showInquiryForm(true);
    });

  document
    .querySelector("#copy-inquiry")
    ?.addEventListener("click", async (event) => {
      event.preventDefault();
      if (!preparedInquiry) return;

      try {
        if (!navigator.clipboard?.writeText)
          throw new Error("Clipboard unavailable");
        await navigator.clipboard.writeText(preparedInquiry);
        if (copyStatus) copyStatus.textContent = "Tekst upita je kopiran.";
      } catch {
        if (inquiryPreview && "select" in inquiryPreview) {
          inquiryPreview.focus();
          inquiryPreview.select();
          inquiryPreview.setSelectionRange(0, inquiryPreview.value.length);
        }
        if (copyStatus) {
          copyStatus.textContent =
            "Automatsko kopiranje nije dostupno. Označeni tekst kopirajte naredbom Kopiraj.";
        }
      }
    });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
