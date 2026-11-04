# Travel Egadi: sito vetrina

Repository del sito vetrina dell'app **Travel Egadi** ("Smart Egadi Islands 4.0"), la guida digitale per Favignana, Levanzo e Marettimo.

Stato: **bozze**. Tre proposte di home page in HTML statico, una per stile. L'app Travel Egadi è ancora in fase di mock (esistono solo le schermate nelle slide), quindi il sito presenta un'app in arrivo.

## Le tre bozze

Si aprono con un doppio clic sul file, in un browser (serve la connessione per i font di Google Fonts).

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
| [`docs/struttura-sito.md`](docs/struttura-sito.md) | Obiettivi, pagine, sezioni della home, proposta tecnica |
| [`docs/stile-a-solare.md`](docs/stile-a-solare.md) | Stile A |
| [`docs/stile-b-carta-nautica.md`](docs/stile-b-carta-nautica.md) | Stile B |
| [`docs/stile-c-ora-blu.md`](docs/stile-c-ora-blu.md) | Stile C |

## Asset provvisori

In `assets/` ci sono materiali ricavati dalla cartella di progetto, da sostituire con le versioni definitive:

- `logo-icona.png`: ritaglio del logo dalle slide, serve il file originale in SVG.
- `app/`: tre schermate del mock ritagliate dalle slide.
- `photos/`: sette foto di Marettimo. I diritti d'uso vanno verificati prima della pubblicazione.

## Prossimi passi

1. Scegliere uno stile (o un mix).
2. Raccogliere logo SVG, screenshot ufficiali e foto con licenza, anche di Favignana e Levanzo.
3. Sviluppare le pagine restanti e collegare il modulo.
