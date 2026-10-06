(() => {
  "use strict";

  const translations = {
    hr: {
      menuOpen: "Otvori izbornik",
      menuClose: "Zatvori izbornik",
      required: {
        name: "Unesite svoje ime i prezime.",
        email: "Unesite svoju e-mail adresu.",
        service: "Odaberite uslugu.",
        message: "Ukratko opišite što je potrebno vašem vozilu.",
      },
      invalidEmail: "Unesite ispravnu e-mail adresu.",
      copied: "Tekst upita je kopiran.",
      copyUnavailable:
        "Automatsko kopiranje nije dostupno. Označeni tekst kopirajte naredbom Kopiraj.",
      guide: {
        firstStep: "Korak 1 od 2 · Odaberite situaciju",
        secondStep: "Korak 2 od 2 · Još jedan detalj",
        tooLong:
          "Vaš postojeći opis i odabrani detalji zajedno su predugi. Skratite opis u obrascu za upit pa pokušajte ponovno.",
        situations: {
          climate: {
            title: "Klima slabo hladi",
            service: "air-conditioning",
            question: "Kada primjećujete poteškoću?",
            description: "Klima u mom vozilu slabo hladi.",
            answers: [
              ["Stalno", "Poteškoća se pojavljuje stalno."],
              ["Povremeno", "Poteškoća se pojavljuje povremeno."],
              ["Nisam siguran", "Nisam siguran kada se poteškoća pojavljuje."],
            ],
          },
          inspection: {
            title: "Pripremam se za tehnički",
            service: "inspection",
            question: "Što biste željeli provjeriti?",
            description: "Želim pripremiti vozilo za tehnički pregled.",
            answers: [
              ["Opće stanje vozila", "Zanima me kontrolni pregled vozila."],
              [
                "Nešto sam već primijetio",
                "Primijetio sam poteškoću koju ću opisati u upitu.",
              ],
              [
                "Trebam savjet",
                "Trebam savjet o pripremi vozila za tehnički pregled.",
              ],
            ],
          },
          maintenance: {
            title: "Vrijeme je za redovni servis",
            service: "mechanics",
            question: "Što biste željeli dogovoriti?",
            description: "Želim dogovoriti redovni servis vozila.",
            answers: [
              ["Zamjenu ulja i filtara", "Zanima me zamjena ulja i filtara."],
              [
                "Servis prema planu održavanja",
                "Želim servis prema planu održavanja svog vozila.",
              ],
              [
                "Nisam siguran što je potrebno",
                "Trebam savjet o potrebnom održavanju vozila.",
              ],
            ],
          },
          unsure: {
            title: "Nisam siguran",
            service: "other",
            question: "Što vas je potaknulo da nam se javite?",
            description: "Trebam pomoć pri odabiru usluge za svoje vozilo.",
            answers: [
              [
                "Primijetio sam promjenu u radu",
                "Primijetio sam promjenu u radu vozila koju ću opisati u upitu.",
              ],
              ["Želim preventivni pregled", "Želim provjeriti stanje vozila."],
              [
                "Nešto drugo / trebam savjet",
                "Želio bih se posavjetovati sa servisom.",
              ],
            ],
          },
        },
      },
      inquiry: {
        greeting: "Poštovani,",
        service: "zanima me usluga",
        vehicle: "Vozilo",
        followUp: "Molim vas da mi se javite radi dogovora i potvrde termina.",
        name: "Ime i prezime",
        email: "E-mail",
        phone: "Telefon",
        signOff: "Lijep pozdrav,",
        subject: "Upit za servis",
      },
    },
    en: {
      menuOpen: "Open menu",
      menuClose: "Close menu",
      required: {
        name: "Enter your full name.",
        email: "Enter your email address.",
        service: "Select a service.",
        message: "Briefly describe what your vehicle needs.",
      },
      invalidEmail: "Enter a valid email address.",
      copied: "Your enquiry has been copied.",
      copyUnavailable:
        "Automatic copying is unavailable. Use the Copy command to copy the selected text.",
      guide: {
        firstStep: "Step 1 of 2 · Choose your situation",
        secondStep: "Step 2 of 2 · One more detail",
        tooLong:
          "Your existing message and selected details are too long together. Shorten the message in the enquiry form, then try again.",
        situations: {
          climate: {
            title: "My air conditioning isn’t cooling well",
            service: "air-conditioning",
            question: "When do you notice the problem?",
            description: "My car’s air conditioning isn’t cooling well.",
            answers: [
              ["All the time", "The problem occurs all the time."],
              ["Occasionally", "The problem occurs occasionally."],
              ["I’m not sure", "I’m not sure when the problem occurs."],
            ],
          },
          inspection: {
            title: "I’m preparing for a roadworthiness test",
            service: "inspection",
            question: "What would you like us to check?",
            description:
              "I’d like to prepare my car for its roadworthiness test.",
            answers: [
              [
                "The car’s general condition",
                "I’d like a general vehicle check.",
              ],
              [
                "I’ve already noticed an issue",
                "I’ve noticed an issue that I’ll describe in my enquiry.",
              ],
              [
                "I need advice",
                "I’d like advice on preparing my car for the test.",
              ],
            ],
          },
          maintenance: {
            title: "It’s time for a routine service",
            service: "mechanics",
            question: "What would you like to arrange?",
            description: "I’d like to arrange a routine service for my car.",
            answers: [
              [
                "An oil and filter change",
                "I’d like an oil and filter change.",
              ],
              [
                "Scheduled maintenance",
                "I’d like a service according to my car’s maintenance schedule.",
              ],
              [
                "I’m not sure what’s needed",
                "I’d like advice on the maintenance my car needs.",
              ],
            ],
          },
          unsure: {
            title: "I’m not sure",
            service: "other",
            question: "What brings you here?",
            description: "I’d like help choosing a service for my car.",
            answers: [
              [
                "I’ve noticed a change in how it runs",
                "I’ve noticed a change in how my car runs that I’ll describe in my enquiry.",
              ],
              [
                "I’d like a preventive check",
                "I’d like to check my car’s condition.",
              ],
              [
                "Something else / I need advice",
                "I’d like to discuss my car with the garage.",
              ],
            ],
          },
        },
      },
      inquiry: {
        greeting: "Hello,",
        service: "I would like to enquire about",
        vehicle: "Vehicle",
        followUp: "Please contact me to arrange and confirm an appointment.",
        name: "Full name",
        email: "Email",
        phone: "Phone",
        signOff: "Kind regards,",
        subject: "Service enquiry",
      },
    },
  };
  const language = document.documentElement.lang.toLowerCase().split("-")[0];
  const messages = language === "en" ? translations.en : translations.hr;

  // Keep language links usable without JavaScript and with modifier keys.
  const languageLinks = Array.from(
    document.querySelectorAll("a[data-language-link][href]"),
    (link) => ({ link, href: link.getAttribute("href").split("#")[0] }),
  );
  const sectionHashes = new Set(
    Array.from(
      document.querySelectorAll("main[id], main section[id]"),
      (section) => `#${section.id}`,
    ),
  );
  function updateLanguageLinks() {
    const hash = sectionHashes.has(window.location.hash)
      ? window.location.hash
      : "";
    languageLinks.forEach(({ link, href }) => {
      link.setAttribute("href", href + hash);
    });
  }
  updateLanguageLinks();
  window.addEventListener("hashchange", updateLanguageLinks);

  const menuToggle = document.querySelector("#menu-toggle");
  const mainNav = document.querySelector("#main-nav");
  const desktopViewport = window.matchMedia("(min-width: 1000px)");

  function closeMenu(restoreFocus = false) {
    if (!menuToggle || !mainNav) return;
    const wasOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", messages.menuOpen);
    mainNav.classList.remove("is-open");
    if (restoreFocus && wasOpen) menuToggle.focus();
  }

  menuToggle?.addEventListener("click", () => {
    if (!mainNav) return;
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? messages.menuOpen : messages.menuClose,
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

  const guide = document.querySelector("#vodic");
  const guideForm = document.querySelector("#guide-form");
  if (guide && guideForm && bookingForm && bookingDialog) {
    const choices = guide.querySelector("#guide-choices");
    const details = guide.querySelector("#guide-details");
    const progress = guide.querySelector("#guide-progress");
    const selection = guide.querySelector("#guide-selection");
    const question = guide.querySelector("#guide-question");
    const answers = guide.querySelector("#guide-answers");
    const preview = guide.querySelector("#guide-preview");
    const summary = guide.querySelector("#guide-summary");
    const error = guide.querySelector("#guide-error");
    const reuse = guide.querySelector("#guide-reuse");
    let activeSituation = null;
    let selectedCard = null;
    let lastGuideDescription = "";
    let reuseMessage = "";

    function resetReuseChoice() {
      reuse.hidden = true;
      reuse.disabled = true;
      reuse.querySelectorAll("input").forEach((input) => {
        input.checked = false;
      });
      reuseMessage = "";
    }

    bookingForm.addEventListener("reset", () => {
      lastGuideDescription = "";
      resetReuseChoice();
    });

    function getGuideDescription() {
      const selected = guideForm.querySelector(
        "input[name='guide-answer']:checked",
      );
      const answer = activeSituation?.answers[Number(selected?.value)];
      return selected && answer
        ? `${activeSituation.description}\n${answer[1]}`
        : "";
    }

    choices.addEventListener("click", (event) => {
      const card = event.target.closest("[data-guide-situation]");
      const situation =
        card && messages.guide.situations[card.dataset.guideSituation];
      if (!situation) return;
      activeSituation = situation;
      selectedCard = card;
      selection.textContent = situation.title;
      question.textContent = situation.question;
      answers.replaceChildren();
      situation.answers.forEach(([labelText], index) => {
        const label = document.createElement("label");
        label.className = "guide-answer";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "guide-answer";
        input.value = String(index);
        input.required = true;
        const text = document.createElement("span");
        text.textContent = labelText;
        label.append(input, text);
        answers.append(label);
      });
      summary.textContent = "";
      preview.hidden = true;
      error.textContent = "";
      resetReuseChoice();
      choices.hidden = true;
      details.hidden = false;
      progress.textContent = messages.guide.secondStep;
      question.focus();
    });

    guide.querySelector("#guide-back").addEventListener("click", () => {
      details.hidden = true;
      choices.hidden = false;
      activeSituation = null;
      guideForm.reset();
      resetReuseChoice();
      preview.hidden = true;
      summary.textContent = "";
      error.textContent = "";
      progress.textContent = messages.guide.firstStep;
      selectedCard?.focus();
    });

    guideForm.addEventListener("change", () => {
      summary.textContent = getGuideDescription();
      preview.hidden = !summary.textContent;
      error.textContent = "";
    });

    guideForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!guideForm.reportValidity()) return;
      const description = getGuideDescription();
      if (!description) return;
      const messageField = field("message");
      const previousMessage = messageField.value;
      const previousDescriptionEdited =
        lastGuideDescription &&
        previousMessage.trim() &&
        !previousMessage.includes(lastGuideDescription);
      // An edited earlier summary can contradict the new answers. Let its author choose.
      if (
        previousDescriptionEdited &&
        (reuse.hidden || reuseMessage !== previousMessage)
      ) {
        resetReuseChoice();
        reuse.hidden = false;
        reuse.disabled = false;
        reuseMessage = previousMessage;
        guide.querySelector("#guide-reuse-title").focus();
        return;
      }
      const reuseChoice = guideForm.querySelector(
        "input[name='guide-reuse']:checked",
      )?.value;
      const message = previousDescriptionEdited
        ? reuseChoice === "keep"
          ? previousMessage
          : description
        : lastGuideDescription && previousMessage.includes(lastGuideDescription)
          ? previousMessage.replace(lastGuideDescription, description)
          : previousMessage.trim()
            ? `${previousMessage}\n\n${description}`
            : description;
      if (
        messageField.maxLength > 0 &&
        message.length > messageField.maxLength
      ) {
        error.textContent = messages.guide.tooLong;
        return;
      }
      const serviceField = field("service");
      serviceField.value = activeSituation.service;
      serviceField.setCustomValidity("");
      messageField.value = message;
      messageField.setCustomValidity("");
      if (!previousDescriptionEdited || reuseChoice === "replace") {
        lastGuideDescription = description;
      }
      showInquiryForm();
      openDialog(bookingDialog);
    });

    guide.hidden = false;
    document.querySelectorAll("[data-guide-link]").forEach((link) => {
      link.hidden = false;
    });
    document.querySelectorAll("[data-guide-fallback]").forEach((link) => {
      link.hidden = true;
    });
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

  function validateField(name) {
    const input = field(name);
    if (!input) return;
    input.setCustomValidity("");
    if (!input.value.trim()) {
      input.setCustomValidity(messages.required[name]);
    } else if (name === "email" && input.validity.typeMismatch) {
      input.setCustomValidity(messages.invalidEmail);
    }
  }

  Object.keys(messages.required).forEach((name) => {
    const input = field(name);
    if (!input) return;
    input.required = true;
    const validate = () => validateField(name);
    input.addEventListener("input", validate);
    input.addEventListener("change", validate);
  });

  bookingForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    Object.keys(messages.required).forEach((name) => {
      const input = field(name);
      if (input) {
        input.value = input.value.trim();
        validateField(name);
      }
    });

    if (!bookingForm.reportValidity()) return;

    const value = (name) => field(name)?.value.trim() || "";
    const name = value("name");
    const service = field("service")
      .selectedOptions[0].textContent.trim()
      .replace(/\s+/g, " ");
    const vehicle = value("vehicle");
    const inquiry = messages.inquiry;
    preparedInquiry = [
      inquiry.greeting,
      "",
      `${inquiry.service}: ${service}.`,
      ...(vehicle ? [`${inquiry.vehicle}: ${vehicle}`] : []),
      "",
      value("message"),
      "",
      inquiry.followUp,
      "",
      `${inquiry.name}: ${name}`,
      `${inquiry.email}: ${value("email")}`,
      ...(value("phone") ? [`${inquiry.phone}: ${value("phone")}`] : []),
      "",
      inquiry.signOff,
      name,
    ].join("\n");

    if (inquiryPreview) {
      if ("value" in inquiryPreview) inquiryPreview.value = preparedInquiry;
      else inquiryPreview.textContent = preparedInquiry;
    }

    if (emailDraft) {
      const subject = `${inquiry.subject} — ${service}${vehicle ? ` — ${vehicle}` : ""}`;
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
        if (copyStatus) copyStatus.textContent = messages.copied;
      } catch {
        if (inquiryPreview && "select" in inquiryPreview) {
          inquiryPreview.focus();
          inquiryPreview.select();
          inquiryPreview.setSelectionRange(0, inquiryPreview.value.length);
        }
        if (copyStatus) {
          copyStatus.textContent = messages.copyUnavailable;
        }
      }
    });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
