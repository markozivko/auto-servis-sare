# Auto Servis Šare

Nova, responzivna web stranica izrađena u čistom HTML-u, CSS-u i JavaScriptu, bez frameworka i procesa izgradnje. Prva verzija obuhvaća naslovnu sekciju, usluge, predstavljanje servisa, česta pitanja, kontakt i dijalog za upit o terminu. Slike i ostali statički resursi pohranjeni su lokalno u projektu.

## Lokalni pregled

U direktoriju projekta pokrenite:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Otvorite [http://127.0.0.1:8000](http://127.0.0.1:8000). Poslužitelj zaustavite tipkama `Ctrl+C`.

## Upit o terminu

Obrazac najprije prikazuje nacrt poruke. Gumb „Otvori e-mail aplikaciju” otvara poveznicu `mailto:`, a korisnik sam šalje poruku. Alternativa je gumb za kopiranje poruke. Stranica nema backend, automatsko slanje ni sustav rezervacija; termin se dogovara izravno sa servisom. Uneseni podaci ne spremaju se u localStorage niti se šalju poslužitelju.

## Datoteke i dizajn

- `index.html`: sadržaj, SVG ikone, obrazac i dijalozi.
- `styles.css`: responzivni dizajn, antracit / žuta paleta, lokalni fontovi, prikaz za mobitel.
- `app.js`: izbornik, dijalozi, validacija i priprema upita.
- `assets/`: lokalne fotografije, fontovi i njihove OFL licence.

Tipografija: Barlow Condensed za naslove, Manrope za tekst. Primijenjene smjernice: [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) i [Vercel web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines). Dizajn kombinira veliki automobilski vizual, pregledne proširive usluge i stvarne fotografije servisa. Nema frameworka, vanjskih JavaScript biblioteka, analitike ni udaljenog učitavanja fontova.

### Fotografije

- `opel-grandland.jpg`: naslovna fotografija vozila, [izvor](https://www.opel-sare.hr/wp-content/uploads/2025/02/Grandland-1.jpg).
- `mehanika.jpg`: mehaničar u radionici, [izvor](https://www.opel-sare.hr/wp-content/uploads/2018/05/Mehanika1-800x490.jpg).
- `servis-eksterijer.jpg`: stvarni ulaz u servis, [izvor](https://www.opel-sare.hr/wp-content/uploads/2018/05/Front1-800x490.jpg).
- `opel-astra.webp`, `radionica.jpg` i `logo-original.png` preuzeti su s istog weba kao reference za iduće iteracije; trenutačna stranica ih ne učitava.

Fotografije su preuzete za lokalni prijedlog redizajna, a nisu novije fotografije stanja servisa. Novi tipografski znak ŠARE dizajnerski je prijedlog.

## Provjera prve verzije

Stranica je pregledana u Braveu i Safariju. U Safariju je provjeren stvarni prikaz u okvirima širine 320, 375, 390, 768, 1024, 1440 i 1920 px, bez horizontalnog prelijevanja. Provjereni su lokalni resursi, odabir usluge, validacija prazne poruke, uklanjanje rubnih razmaka, hrvatski znakovi u mailto poveznici, uređivanje nacrta, mobilni izbornik i zatvaranje dijaloga tipkom Escape. Nije slana e-pošta. To ne zamjenjuje završnu provjeru na stvarnom telefonu prije objave.

`qa-preview.html` je lokalna razvojna provjera s pregledom širina i testnim obrascem; nije dio javne navigacije i ne treba je objavljivati. Pokrenite je preko lokalnog poslužitelja. Provjera koristi isključivo izmišljene testne podatke i ne otvara e-mail aplikaciju.

## Google karta

U odjeljku Kontakt nalazi se responzivna Google karta točne lokacije koju je korisnik dostavio (Google CID `3651087283997827513`). Upute za dolazak otvaraju Google Maps s odredištem `45.8172058,15.9369876`. Karta je ugrađena iframeom, bez dodatne JavaScript biblioteke ili API ključa, i učitava se odgođeno (`loading="lazy"`). Za njezin prikaz potrebna je internetska veza; karta se dohvaća s Googlea, dok su fotografije i fontovi i dalje lokalni. Dijalog o privatnosti opisuje tu vanjsku vezu.

## Cjenik

Odjeljak `#cjenik` nalazi se između usluga i predstavljanja servisa te je povezan s glavnim i mobilnim izbornikom. Sadrži šest postojećih kategorija usluga. Dok vlasnik ne dostavi cijene, sva polja `.price-value` u `index.html` prikazuju „Cijena na upit”; nisu uneseni iznosi, obračunske jedinice ni porezne pretpostavke. Gumb „Zatraži procjenu” otvara postojeći obrazac s odabranom opcijom „Ostalo / nisam siguran”. Kada stigne konačni cjenik, zamijenite privremene oznake te po potrebi prilagodite nazive i broj stavki.

## Izvor sadržaja

Polazište je [postojeća službena stranica](https://www.opel-sare.hr/), pregledana 6. listopada 2026. Preuzeti poslovni podaci:

- Auto Servis Šare posluje od 1994.; specijaliziran je za Opel, a oglašava i brzi servis te dijelove za ostale marke.
- Adresa: Črnomerec 35, 10000 Zagreb.
- Telefon: +385 1 370 0174; e-pošta: auto-servis@opel-sare.hr.
- Objavljeno radno vrijeme: ponedjeljak–petak 08:00–16:00, vikendom zatvoreno.
- Usluge: mehanika, elektrika i elektronika, dijagnostika, gume, servis klime, kontrolni pregledi i priprema za tehnički pregled, poliranje farova te nabava dijelova.

Dodatni izvori za opis usluga: [dijagnostika](https://www.opel-sare.hr/?p=1621), [klima](https://www.opel-sare.hr/?p=1601) i [poliranje farova](https://www.opel-sare.hr/?p=1616). Specijalizacija za Opel nije tvrdnja o statusu ovlaštenog servisa.

## Prije javne objave

- Vlasnik treba potvrditi kontaktne podatke, radno vrijeme i aktualni opseg usluga.
- Potvrditi cijene i načine plaćanja, uključujući kartice i rate. Stari cjenik i stare akcije nisu pouzdana osnova za nove ponude.
- Provjeriti prava korištenja svih fotografija i oznaka. Fotografije stvarnog servisa i eventualnu ilustrativnu naslovnu fotografiju treba jasno razlikovati; ilustracija ne dokazuje izgled prostora ni opreme servisa.
- Potvrditi način zaprimanja upita. Ako se želi izravno slanje s weba ili stvarno rezerviranje termina, potrebno je dodatno povezivanje s odgovarajućom uslugom.
- Pripremiti i potvrditi poslovne i privatnosne informacije potrebne za konačnu javnu stranicu.
