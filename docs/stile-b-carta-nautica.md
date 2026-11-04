# Stile B: Carta nautica

**Idea**: il sito come una carta nautica delle Egadi. Il reticolo di meridiani e paralleli, le curve di profondità, le isole in giallo (il colore con cui le carte tingono la terraferma) e la rotta tratteggiata dei traghetti da Trapani raccontano dove si trova il progetto. Le strutture grafiche portano informazione: le coordinate sono vere, la legenda spiega le quattro voci dell'app.

**Sensazione**: precisa, calma, curata. Tono asciutto, da guida di viaggio per chi ama il mare.

**Pubblico principale**: turisti che cercano autenticità e organizzano il viaggio con cura.

**Bozza**: `prototypes/stile-b-carta/index.html`

## Palette

| Ruolo | Colore | Hex |
|---|---|---|
| Carta | Bianco con reticolo azzurro al 22% | `#FFFFFF`, `#4AABD5` |
| Inchiostro del testo | Inchiostro | `#14283C` |
| Titoli, bordi, bottoni | Blu mare | `#1070B8` |
| Terra e simboli | Giallo sole | `#FCE348` |
| Testo secondario | Blu ardesia | `#406890` |

Giallo e azzurro restano decorazione, mai testo (vedi `brand-colori.md`).

## Tipografia

- **Literata** (serif di lettura, con corsivo) per titoli e testi. I nomi delle isole sono in corsivo, come i toponimi sulle carte.
- **Barlow Semi Condensed** per coordinate, didascalie, bottoni e navigazione.

## Struttura e forme

- Sfondo a reticolo, una linea ogni 96 px.
- Cornice doppia (bordo e contorno sottile) intorno alla carta dell'hero, come la riquadratura delle carte.
- Angoli netti (2 px), bordi sottili, nessuna ombra.
- Legenda con simboli: quadrato (Dove dormire), triangolo (Esperienze), cerchio (Dove mangiare), rombo (Punti di interesse).
- Elenco isole come righe di tabella con coordinate.

## Momento memorabile

La rotta dei traghetti che si disegna una volta sola al caricamento, da Trapani verso le isole. Con `prefers-reduced-motion` la linea compare già tracciata.

## Da sapere

- La carta è illustrativa: le forme delle isole sono stilizzate, le coordinate sono approssimate (da verificare prima della pubblicazione).
- Le foto sono tutte di Marettimo. Per Favignana e Levanzo servono foto dedicate.

## Pro e contro

**Pro**: identità forte e legata al luogo, grafica leggera (SVG), valorizza il racconto "come un local".

**Contro**: tono più serioso dell'app, richiede foto belle per non restare troppo schematico, la carta va ridisegnata con cura se si vuole una versione definitiva.
