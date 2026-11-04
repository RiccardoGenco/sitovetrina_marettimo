# Stile A: Solare

**Idea**: il sito che somiglia all'app. Caldo, amichevole, arrotondato, con le stesse forme e lo stesso crema delle slide. Chi arriva dal passaparola o da un volantino riconosce subito il progetto.

**Sensazione**: vacanza, luce, mare. Tono confidenziale, frasi brevi, un po' di allegria.

**Pubblico principale**: turisti e operatori locali che cercano qualcosa di semplice e rassicurante.

**Bozza**: `prototypes/stile-a-solare/index.html`

**Momento memorabile**: l'hero rilegge il logo. Il sole giallo tramonta dietro due onde, e il telefono con la schermata dell'app emerge dal mare, con un'unica animazione di salita al caricamento.

## Palette

| Ruolo | Colore | Hex |
|---|---|---|
| Sfondo pagina | Crema | `#FBF3AA` alternato con bianco `#FFFFFF` |
| Titoli | Blu ardesia | `#406890` |
| Testo corrente | Inchiostro | `#14283C` |
| Bottone primario | Blu mare con testo bianco | `#1070B8` |
| Accento e evidenziatori | Giallo sole | `#FCE348` |
| Decorazioni e onde | Azzurro | `#4AABD5` |

## Tipografia

- Titoli e testo: **Outfit** (Google Fonts), pesi 400, 600, 700. È il carattere più vicino a quello delle slide.
- Titoli molto grandi, in blu ardesia, con interlinea stretta.
- Corpo 18 px su desktop, interlinea 1,6.

## Layout e forme

- Colonna centrale ampia, sezioni a tutta larghezza che cambiano fondo (crema, bianco, blu mare).
- **Angoli molto arrotondati** (24-32 px), come l'icona dell'app.
- **Divisori a onda** in SVG tra le sezioni, con l'azzurro come seconda onda.
- Mockup del telefono con ombra morbida, leggermente inclinato nell'hero.
- Un grande **sole giallo** dietro il mockup, ispirato al logo.
- Card con ombra leggera e bordo bianco.

## Hero

```
┌──────────────────────────────────────────────┐
│ [logo]   App  Isole  Partner  Progetto  IT|EN│
│                                              │
│   Travel Egadi              (sole giallo)    │
│   Tutte le Egadi            ┌─────────┐      │
│   in un'unica app           │ mockup  │      │
│                             │ telefono│      │
│   [Scarica l'app]           └─────────┘      │
│   [Sei un'attività?]                         │
│ ~~~~~~~~~~~~~~~~ onda ~~~~~~~~~~~~~~~~~~~~~~ │
└──────────────────────────────────────────────┘
```

## Componenti

- **Bottoni**: pillola, blu mare con testo bianco (primario), giallo con testo inchiostro (secondario).
- **Card isola**: foto grande con angoli arrotondati, nome sovrapposto su una pillola gialla.
- **Card funzione**: icona in cerchio azzurro, titolo blu ardesia, due righe di testo.
- **Chip** per le tipologie (Bed & Breakfast, Casa, Hotel, Resort), identici a quelli dell'app.
- **Banner offerta di lancio**: striscia gialla con testo inchiostro.

## Movimento

- Le onde scorrono lentamente in orizzontale.
- Entrata delle card con dissolvenza e piccolo scorrimento verso l'alto.
- Rispetto di `prefers-reduced-motion`: tutto fermo.

## Tono dei testi

Esempio di titolo hero: "Le Egadi, tutte in un'app". Seconda riga: "Dormire, mangiare, esplorare: scegli con i consigli di chi vive qui."

## Pro e contro

**Pro**: coerenza immediata con app e slide, accessibile a tutti, facile da mantenere, rassicurante per i piccoli operatori.

**Contro**: meno distintivo, rischio di sembrare "generico da turismo" se le foto non sono forti.

## Riferimenti da cercare

Landing page di app di viaggio dal tono caldo (Airbnb Experiences, Wanderlog), siti di pro loco e consorzi turistici ben fatti.
