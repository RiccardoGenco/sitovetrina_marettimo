# Stile B: Editoriale

**Idea**: il sito come rivista di viaggio. Le foto delle isole comandano, il testo è curato e il giallo del logo diventa un evidenziatore. Sensazione di guida d'autore scritta da chi vive a Marettimo.

**Sensazione**: autentico, elegante, calmo. Tono narrativo, racconto dei luoghi più che elenco di funzioni.

**Pubblico principale**: turisti che cercano esperienze autentiche (il posizionamento "come un local" della presentazione) e stampa.

## Palette

| Ruolo | Colore | Hex |
|---|---|---|
| Sfondo pagina | Bianco | `#FFFFFF`, con sezioni alterne in giallo chiaro `#FFF6B8` |
| Testo corrente | Inchiostro | `#14283C` |
| Titoli e link | Blu mare | `#1070B8` |
| Evidenziatore | Giallo sole | `#FCE348`, dietro parole chiave dei titoli |
| Linee sottili | Azzurro | `#4AABD5` |
| Blocchi scuri (citazioni) | Blu notte con testo bianco | `#0A3F6E` |

Il blu ardesia `#406890` si usa per didascalie e testo secondario.

## Tipografia

- Titoli: **Fraunces** (serif con carattere, Google Fonts), pesi 500 e 700, con corsivo per le parole d'accento.
- Testo e interfaccia: **Inter**, 17-18 px, interlinea 1,65.
- Didascalie e etichette: Inter in maiuscoletto con spaziatura larga, in blu ardesia.
- Numeri e dati: Fraunces, grandi.

## Layout e forme

- **Griglia asimmetrica** a 12 colonne: foto che sbordano a tutta larghezza, testo in colonne strette.
- **Angoli netti o appena smussati** (4 px). Nessuna ombra, solo linee sottili.
- Foto grandi a tutta pagina con didascalia in stile rivista ("Cala Rossa, Favignana").
- Numerazione delle sezioni (01, 02, 03) in azzurro.
- Citazioni dei local in blocco scuro con virgolette grandi.
- Il giallo appare solo come tratto di evidenziatore sotto le parole chiave dei titoli.

## Hero

```
┌──────────────────────────────────────────────┐
│ TRAVEL EGADI        App  Isole  Partner  IT|EN│
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │                                          │ │
│ │     foto a tutta larghezza di Levanzo    │ │
│ │                                          │ │
│ └──────────────────────────────────────────┘ │
│  Le Egadi viste                              │
│  da chi ci vive.   ▔▔▔▔▔ (evidenziatore)     │
│  Una guida in tasca, scritta dai local.      │
│  [Scarica l'app]  Per le attività →          │
└──────────────────────────────────────────────┘
```

## Componenti

- **Bottone primario**: rettangolo blu mare, testo bianco, maiuscoletto. **Secondario**: solo testo con freccia e sottolineatura azzurra.
- **Card isola**: foto verticale, numero, nome in Fraunces, riga di descrizione, link "Leggi".
- **Blocco "Consiglio dal local"**: citazione su fondo blu notte, firma in maiuscoletto.
- **Mockup dell'app**: telefono senza cornice pesante, inserito tra due colonne di testo come un'illustrazione di articolo.
- **Sezione partner**: tre colonne con filetti, tono sobrio, tabella dei benefici.

## Movimento

- Parallasse leggero sulle foto grandi.
- Evidenziatore giallo che si "disegna" quando il titolo entra in vista.
- Tutto disattivato con `prefers-reduced-motion`.

## Tono dei testi

Esempio di titolo hero: "Le Egadi viste da chi ci vive". Sottotitolo: "Calette, sentieri e tavole che non trovi altrove, raccolti in un'app dai local di Favignana, Levanzo e Marettimo."

## Pro e contro

**Pro**: aspetto premium e distintivo, valorizza la componente "local", ottimo per la stampa e per il posizionamento qualitativo.

**Contro**: dipende molto dalla qualità e dalla quantità delle foto (servono foto belle e con licenza), richiede testi scritti con cura, meno immediato per un operatore che vuole solo capire il costo.

## Riferimenti da cercare

Siti di riviste di viaggio (Condé Nast Traveller, Kinfolk), guide indipendenti, siti di boutique hotel mediterranei.
