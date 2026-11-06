# Travel Egadi: sito vetrina

Repository del sito vetrina dell'app **Travel Egadi** ("Smart Egadi Islands 4.0"), la guida digitale per Favignana, Levanzo e Marettimo.

Stato: **sito definitivo in preparazione**. `index.html` unisce lo stile semplice e pulito della bozza A con lo scrollstory della bozza C ed è pensato per convincere i titolari di attività delle Egadi ad aderire. Dettagli, impostazioni da compilare e punti aperti in [`docs/sito-definitivo.md`](docs/sito-definitivo.md). L'app Travel Egadi è ancora in fase di mock (esistono solo le schermate nelle slide), quindi il sito presenta un'app in arrivo.

Si apre con un doppio clic su `index.html` (le immagini e il font sono nella cartella `assets/`, non serve connessione).

## Le tre bozze

Restano in `prototypes/`. La pagina di confronto è [`prototypes/index.html`](prototypes/index.html). Le bozze usano ancora i font di Google Fonts, quindi serve la connessione.

| Bozza | Idea | File |
|---|---|---|
| A, Solare | Carosello 3D animato delle schermate dell'app, sole e onde del logo | [`prototypes/stile-a-solare/index.html`](prototypes/stile-a-solare/index.html) |
| B, Carta nautica | Carta interattiva: zoom sulle isole, traghetto e schede d'esempio | [`prototypes/stile-b-carta/index.html`](prototypes/stile-b-carta/index.html) |
| C, Ora blu | Scrollstory "una giornata a Marettimo" dall'alba alla notte | [`prototypes/stile-c-ora-blu/index.html`](prototypes/stile-c-ora-blu/index.html) |

Le tre bozze hanno gli stessi contenuti e le stesse sezioni (hero, quattro voci dell'app, tre isole, partner, contatti). Il modulo email non è ancora collegato a nessun servizio.

## Documentazione

| File | Contenuto |
|---|---|
| [`docs/app-travel-egadi.md`](docs/app-travel-egadi.md) | Scheda dell'app: funzioni, struttura, partner, punti da chiarire |
| [`docs/brand-colori.md`](docs/brand-colori.md) | Palette del logo, tonalità derivate, contrasti |
| [`docs/sito-definitivo.md`](docs/sito-definitivo.md) | Sito definitivo: struttura, scelte tecniche, cosa manca prima della pubblicazione |
| [`docs/struttura-sito.md`](docs/struttura-sito.md) | Obiettivi, pagine, sezioni della home, proposta tecnica |
| [`docs/stile-a-solare.md`](docs/stile-a-solare.md) | Stile A |
| [`docs/stile-b-carta-nautica.md`](docs/stile-b-carta-nautica.md) | Stile B |
| [`docs/stile-c-ora-blu.md`](docs/stile-c-ora-blu.md) | Stile C |

## Asset provvisori

In `assets/` ci sono materiali ricavati dalla cartella di progetto, da sostituire con le versioni definitive:

- `logo-icona.png`: ritaglio del logo dalle slide, serve il file originale in SVG.
- `app/`: quattro schermate del mock ritagliate dalle slide.
- `photos/`: sette foto di Marettimo. I diritti d'uso vanno verificati prima della pubblicazione.
- `app/web/` e `photos/web/`: versioni WebP ottimizzate usate dal sito definitivo.
- `fonts/`: font Outfit in locale (licenza OFL).

## Prossimi passi

1. Collegare il modulo a un servizio di invio e inserire i contatti diretti (vedi `CONFIG` in `index.html`).
2. Aggiungere informativa privacy e cookie.
3. Confermare il testo dell'offerta di lancio e la frase sul team.
4. Raccogliere logo SVG, screenshot ufficiali e foto con licenza, anche di Favignana e Levanzo.
