# Stile C: Ora blu

**Idea**: il sito si apre su una foto vera, il porto di Marettimo all'ora blu, con le finestre del paese accese. Il blu notte arriva dalla foto, il giallo del logo compare solo dove serve ad accendere un'azione, come una luce nel buio.

**Sensazione**: immersiva, serale, concreta. Titoli grandi e diretti, foto grandi, poca decorazione.

**Pubblico principale**: turisti che si decidono guardando le immagini, e operatori che vogliono vedere come apparirà la loro scheda.

**Bozza**: `prototypes/stile-c-ora-blu/index.html`

## Palette

| Ruolo | Colore | Hex |
|---|---|---|
| Fondo hero | Foto del porto con velo blu | gradiente su `#0B2744` |
| Fondi sezioni | Blu notte e blu profondo | `#0A3F6E`, `#0B2744` |
| Testo | Bianco | `#FFFFFF` |
| Azioni e filetti | Giallo sole, con testo inchiostro | `#FCE348` |
| Sezione partner | Crema, con testo inchiostro | `#FBF3AA` |
| Bottone sul crema | Blu mare | `#1070B8` |

Il blu notte `#0A3F6E` e il blu profondo `#0B2744` sono scurimenti del blu del logo.

## Tipografia

- **Bricolage Grotesque** (Google Fonts) per titoli e testo, pesi 400, 600 e 800. Titoli molto grandi, interlinea stretta.

## Struttura e forme

- Hero a tutta altezza con la foto, titolo in basso a sinistra, schermata dell'app che sale dal bordo inferiore.
- Galleria orizzontale di foto con scorrimento, accessibile da tastiera.
- Le quattro voci dell'app come righe di testo grande separate da filetti, senza schede.
- Le tre isole in colonne divise da un filetto giallo.
- Sezione partner su crema con la scheda di un ristorante nel telefono, per mostrare cosa ottiene l'attività.
- Angoli piccoli (8-10 px), nessun effetto vetro.

## Momento memorabile

La foto dell'hero e la schermata dell'app che sale una sola volta al caricamento.

## Da sapere

- La resa dipende dalla foto: serve una foto di alta qualità con diritti chiari.
- Per le isole di Favignana e Levanzo mancano ancora foto dedicate.

## Pro e contro

**Pro**: forte impatto emotivo, chiaro e veloce da leggere, il giallo guida l'occhio verso le azioni.

**Contro**: più lontano dal crema solare delle slide, il fondo scuro ha senso solo con foto luminose e di qualità, rischio di sembrare troppo notturno per una vacanza al sole (si può alternare con sezioni chiare).

## Idea interattiva: scrollstory "Una giornata a Marettimo"

Dopo la hero, la pagina si ferma su una scena a schermo intero e racconta la giornata scorrendo: orologio dalle 08:00 alle 22:30, sfondo che passa da porto, grotta, via di sera e porto di notte, colore del cielo che cambia e telefono che mostra la schermata dell'app giusta per ogni momento (home, esperienze, scheda). L'ultimo capitolo porta alla call to action. Con `prefers-reduced-motion` la storia diventa una sequenza statica di capitoli.
