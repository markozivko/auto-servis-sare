# Auto servis Šare

Moderna, responzivna web-stranica za Auto servis Šare na zagrebačkom Črnomercu. Izrađena je u čistom **HTML-u, CSS-u i JavaScriptu**, bez frameworka, instalacije paketa i procesa izgradnje.

[GitHub repozitorij](https://github.com/markozivko/auto-servis-sare) · [Postojeća stranica — izvor sadržaja](https://www.opel-sare.hr/)

## Trenutačno stanje

Stranica je dostupna na hrvatskom i engleskom jeziku, uz izbor **HR | EN** u zaglavlju. Cjenik zasad prikazuje **„Cijena na upit”** / **„Price on request”**, a obrazac priprema e-mail koji korisnik pregledava i sam šalje iz svoje e-mail aplikacije. Automatsko slanje upita i rezervacija termina nisu implementirani.

Stranica sadrži:

- Naslovnu sekciju s pozivom na dogovor servisa.
- Pregled šest kategorija usluga s proširivim opisima.
- Cjenik pripremljen za naknadni unos iznosa.
- Predstavljanje servisa i korake za dogovor dolaska.
- Česta pitanja, kontaktne podatke i radno vrijeme.
- Ugrađenu Google kartu i poveznicu za upute za dolazak.
- Obrazac za pripremu upita i obavijest o privatnosti.
- Mobilni izbornik i prikaz prilagođen mobitelima, tabletima i računalima.

## Lokalno pokretanje

Potreban je Python 3. U terminalu, iz glavnog foldera projekta, pokrenite:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Otvorite **[http://127.0.0.1:8000](http://127.0.0.1:8000)**. Poslužitelj zaustavite tipkama `Ctrl+C` u istom terminalu. Naredba služi za lokalni pregled na vašem računalu.

Engleska verzija dostupna je na **[http://127.0.0.1:8000/en/](http://127.0.0.1:8000/en/)**. Oba jezika mogu se otvoriti izravno ili preko izbora jezika u zaglavlju.

Za preuzimanje projekta na drugo računalo, uz instaliran Git:

```sh
git clone https://github.com/markozivko/auto-servis-sare.git
cd auto-servis-sare
```

Zatim pokrenite lokalni poslužitelj prethodnom naredbom. Nisu potrebni `npm install` ni build naredbe.

## Struktura projekta

| Datoteka ili folder                  | Namjena                                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------------------- |
| [`index.html`](index.html)           | Hrvatski sadržaj, cjenik, karta, obrazac i dijalozi.                                     |
| [`en/index.html`](en/index.html)     | Engleski sadržaj, cjenik, karta, obrazac i dijalozi.                                     |
| [`styles.css`](styles.css)           | Zajedničke boje, tipografija, raspored i responzivni prikaz za oba jezika.               |
| [`app.js`](app.js)                   | Zajednički mobilni izbornik, dijalozi, HR/EN poruke, validacija i priprema e-mail upita. |
| [`assets/`](assets/)                 | Fotografije, ikona stranice, lokalni fontovi i njihove licence.                          |
| [`qa-preview.html`](qa-preview.html) | Razvojni alat za provjeru širina prikaza i ponašanja obrasca na oba jezika.              |
| [`.gitignore`](.gitignore)           | Pravila za izostavljanje lokalnih i pomoćnih datoteka iz Gita.                           |
| [`README.md`](README.md)             | Upute za pokretanje, održavanje i objavu.                                                |

## Jezici i prijevodi

Hrvatski je zadani jezik na osnovnoj adresi, a engleski se otvara na putanji `en/`. Izbor **HR | EN** koristi obične poveznice, pa radi i bez JavaScripta. Nema automatskog prepoznavanja jezika preglednika, preusmjeravanja ni spremanja jezika u `localStorage`. Kada je otvorena poveznica na sekciju, JavaScript prenosi njezin hash pri promjeni jezika.

Vidljivi sadržaj nalazi se u dvije HTML datoteke koje treba održavati zajedno. Fotografije, fontovi, `styles.css` i `app.js` zajednički su. Dinamične poruke, uključujući poruke validacije, stanje mobilnog izbornika, potvrdu kopiranja te predložak i predmet e-maila, nalaze se u HR/EN rječniku u `app.js`; jezik se bira prema atributu `lang` dokumenta.

Vrijednosti usluga u atributima `data-service` i `value` ostaju iste na oba jezika: `mechanics`, `diagnostics`, `electrics`, `tyres`, `air-conditioning`, `inspection` i `other`. Prevodi se tekst opcije koji korisnik vidi, a taj se tekst koristi i u pripremljenom e-mailu. Korisnikov vlastiti unos ne prevodi se.

## Kako funkcionira obrazac

1. Korisnik otvara obrazac gumbom **„Dogovori servis”**, **„Zatraži procjenu”** ili upitom iz pojedine usluge.
2. Unosi ime i prezime, e-mail, uslugu i opis upita. Telefon te marka i model vozila nisu obavezni.
3. Klik na **„Pripremi e-mail”** provjerava obavezna polja i format e-mail adrese te prikazuje nacrt poruke. Upit u tom trenutku još nije poslan.
4. Korisnik može urediti podatke, kopirati tekst ili odabrati **„Otvori e-mail aplikaciju”**.
5. Poveznica `mailto:` otvara nacrt za `auto-servis@opel-sare.hr` u aplikaciji koju je korisnik postavio za e-poštu. Korisnik ondje šalje poruku, a termin dogovara izravno sa servisom.

Ako otvaranje e-mail aplikacije nije postavljeno, korisnik može kopirati tekst u svoj e-mail. Ako automatsko kopiranje nije dostupno, tekst se označava za ručno kopiranje.

Obrazac nema backend, bazu podataka ni povezivanje s kalendarom. Podatke ne sprema u `localStorage` i ne šalje ih poslužitelju stranice. Za izravno slanje s weba potrebno je naknadno povezati servis za slanje e-pošte ili backend.

## Uređivanje sadržaja

### Cjenik

Odjeljak `#cjenik` u `index.html` i `en/index.html` nalazi se između pregleda usluga i predstavljanja servisa. Sadrži šest kategorija s oznakom **„Cijena na upit”** / **„Price on request”**. Gumb **„Zatraži procjenu”** / **„Request an estimate”** otvara obrazac s odabranom opcijom za ostale usluge.

Kada konačni cjenik bude spreman:

1. U odjeljku `#cjenik` pronađite ćelije s klasom `price-value`.
2. Zamijenite tekst „Cijena na upit” potvrđenim iznosima i načinom obračuna.
3. Prema potrebi prilagodite nazive i broj redaka te napomenu ispod gumba.
4. Uskladite povezani odgovor „Koliko će koštati servis?” u čestim pitanjima.
5. Iste iznose i odgovarajuće prijevode unesite u obje HTML datoteke.

Iznosi, obračunske jedinice i porezne napomene zasad nisu zadani.

### Kontaktni podaci

Adresa, telefon i radno vrijeme uređuju se u `index.html` i `en/index.html`. Pri promjeni provjerite sve njihove pojave na oba jezika, uključujući poveznice `tel:` i `mailto:`, česta pitanja i obavijest o privatnosti. Adresa primatelja pripremljenog e-maila postavljena je i u `app.js`.

### Google karta

Kontakt sadrži Google Maps `iframe` za **Auto servis Šare, Črnomerec 35, Zagreb**. Karta se učitava odgođeno (`loading="lazy"`); ova implementacija ne zahtijeva API ključ ni dodatnu JavaScript biblioteku.

- Google CID lokacije: `3651087283997827513`.
- Koordinate za upute za dolazak: `45.8172058,15.9369876`.
- Pri promjeni lokacije u obje HTML datoteke ažurirajte ugrađenu kartu, poveznicu na profil i poveznicu „Upute za dolazak” / „Get directions”.

Google karta zahtijeva internetsku vezu i povezuje preglednik s Googleom. Fotografije i fontovi učitavaju se lokalno iz projekta. Stranica nema vlastitu analitiku ni marketinške skripte; Google integracija opisana je u obavijesti o privatnosti.

## Dizajn i resursi

Dizajn kombinira antracitnu i žutu paletu, veliki automobilski vizual, pregledne usluge i fotografije servisa. Za naslove se koristi **Barlow Condensed**, a za tekst **Manrope**. Oba fonta pohranjena su lokalno, zajedno s pripadajućim licencama:

- [Barlow Condensed — OFL licenca](assets/BarlowCondensed-LICENSE.txt)
- [Manrope — OFL licenca](assets/Manrope-LICENSE.txt)

Primijenjene dizajnerske smjernice: [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) i [Vercel web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines).

| Fotografija             | Namjena i izvor                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `opel-grandland.jpg`    | Naslovna fotografija vozila — [izvor](https://www.opel-sare.hr/wp-content/uploads/2025/02/Grandland-1.jpg).      |
| `mehanika.jpg`          | Mehaničar u radionici — [izvor](https://www.opel-sare.hr/wp-content/uploads/2018/05/Mehanika1-800x490.jpg).      |
| `servis-eksterijer.jpg` | Ulaz u servis na Črnomercu 35 — [izvor](https://www.opel-sare.hr/wp-content/uploads/2018/05/Front1-800x490.jpg). |

`opel-astra.webp`, `radionica.jpg` i `logo-original.png` pohranjeni su kao reference za daljnji razvoj; trenutačna stranica ih ne učitava. Fotografije su preuzete s postojećeg weba za prijedlog redizajna i nisu nove snimke servisa. Tipografski znak ŠARE dizajnerski je prijedlog.

## Provjera nakon izmjena

Uz pokrenut lokalni poslužitelj otvorite [qa-preview.html](http://127.0.0.1:8000/qa-preview.html). Izbornik **„Jezik pregleda”** otvara hrvatsku ili englesku stranicu. Alat provjerava horizontalno prelijevanje na širinama **320, 375, 390, 768, 1000, 1024, 1440 i 1920 px**, oznaku jezika dokumenta te učitavanje fontova i slika. Gumbi sa širinama služe za ručni pregled.

Gumb **„Provjeri oba jezika i obrasce”** redom provjerava obje verzije i zadržava rezultate odvojeno za HR i EN. **„Provjeri trenutačni obrazac”** provjerava samo trenutačno otvoreni jezik. Provjera obrasca koristi izmišljene podatke i obuhvaća:

- Odabir svih sedam usluga preko gumba na stranici.
- Obavezna polja i neispravnu e-mail adresu, uz poruke na odabranom jeziku.
- Prevedeni predmet, predložak i naziv odabrane usluge u nacrtu.
- Uklanjanje rubnih razmaka i očuvanje izvornog korisničkog teksta, hrvatskih znakova i prijeloma redaka.
- Uređivanje nacrta i odbijanje poruke koja sadrži samo razmake.

Alat ne otvara e-mail aplikaciju, ne šalje e-poštu i ne kopira tekst u međuspremnik. Ručno na oba jezika provjerite mobilni izbornik, čitljivost cjenika, Google kartu, poveznice, prebacivanje jezika iz pojedine sekcije, poruku nakon kopiranja i zatvaranje dijaloga tipkom `Escape`. Razvojni pregled ne zamjenjuje provjeru na stvarnom telefonu. Nakon budućih izmjena provjere treba ponoviti.

## Rad s GitHubom

Projekt koristi granu `main` i remote `origin` s adresom `https://github.com/markozivko/auto-servis-sare.git`. Za spremanje novih izmjena, iz glavnog foldera projekta:

```sh
git status
git diff
git add .
git diff --cached
git commit -m "Opis napravljenih izmjena"
git push
```

`git diff` prikazuje izmjene praćenih datoteka, a `git diff --cached` sadržaj pripremljen za commit, uključujući nove dodane datoteke. Commit sprema verziju lokalno; push je šalje na GitHub. `git init` i `git remote add` ne ponavljaju se za svaku izmjenu.

`.gitignore` izostavlja `.DS_Store`, `.env`, `.env.*` i `*.log`. Iznimka `!.env.example` omogućuje praćenje predloška konfiguracije ako se naknadno doda. Trenutačna stranica ne zahtijeva `.env` datoteku.

## Objava web-stranice

Projekt se može posluživati kao statička stranica: na hosting se prenose `index.html`, cijeli folder `en/`, `styles.css`, `app.js` i potrebni resursi iz `assets/`, uz očuvanje njihove strukture. Nema build koraka. Za javni web koristite HTTPS.

Oznake `canonical`, `hreflang="hr"`, `hreflang="en"` i `hreflang="x-default"` u obje HTML datoteke koriste baznu adresu projekta `https://markozivko.github.io/auto-servis-sare/`, s engleskom verzijom na `en/`. Kada se promijeni hosting ili domena, ažurirajte sve te apsolutne adrese u obje datoteke tako da upućuju na stvarne javne adrese. Hrvatski ostaje zadana verzija (`x-default`).

`qa-preview.html` može ostati u izvornom repozitoriju kao razvojni alat, ali ga izostavite iz datoteka objavljenog weba. `.gitignore` ne upravlja objavom na hosting.

Samo slanje koda na GitHub ne postavlja hosting. Hosting i domenu treba konfigurirati zasebno; budući automatski deploy može povezati objavu s GitHub promjenama.

Prije javne objave ostaje potvrditi:

- Poslovne i kontaktne podatke, radno vrijeme i aktualne usluge.
- Konačni cjenik i načine plaćanja; stare cijene i akcije nisu prenesene.
- Prava korištenja fotografija i oznaka.
- Željeni način zaprimanja upita i konačni tekst obavijesti o privatnosti.
- Prikaz na stvarnom telefonu te otvaranje pripremljenog upita u e-mail aplikaciji.

## Izvor poslovnih podataka

Sadržaj redizajna temelji se na [postojećoj službenoj stranici](https://www.opel-sare.hr/), pregledanoj 6. listopada 2026. Preuzeti podaci uključuju poslovanje od 1994., specijalizaciju za Opel, brzi servis i nabavu dijelova za druge marke, adresu Črnomerec 35 u Zagrebu, telefon `01 3700 174`, e-mail `auto-servis@opel-sare.hr` te radno vrijeme ponedjeljak–petak 08:00–16:00.

Dodatni izvori opisa usluga: [dijagnostika](https://www.opel-sare.hr/?p=1621), [servis klime](https://www.opel-sare.hr/?p=1601) i [poliranje farova](https://www.opel-sare.hr/?p=1616). Specijalizacija za Opel ne predstavlja tvrdnju o statusu ovlaštenog servisa.
