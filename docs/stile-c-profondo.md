# Stile C: Profondo

**Idea**: il sito come un'app moderna. Fondo blu notte, il giallo del logo come luce, mockup dell'app protagonista con animazioni allo scroll. Vetrina da prodotto digitale, con un percorso netto verso download e adesione partner.

**Sensazione**: tecnologico, sicuro, notturno. Richiama il "Smart Egadi Islands 4.0" della presentazione. Tono diretto, frasi corte, numeri in evidenza.

**Pubblico principale**: turisti abituati alle app e operatori che valutano la piattaforma come strumento di lavoro (statistiche, contatti, prenotazioni).

## Palette

| Ruolo | Colore | Hex |
|---|---|---|
| Sfondo principale | Blu notte | `#0A3F6E` |
| Sfondo sezioni alterne | Inchiostro | `#14283C` |
| Testo | Bianco | `#FFFFFF` |
| Accento e bottone primario | Giallo sole con testo inchiostro | `#FCE348` |
| Link e dettagli | Azzurro | `#4AABD5` (solo testo grande, 4,1:1 su blu notte) |
| Card | Blu mare con trasparenza | `#1070B8` al 20-30% |
| Sezione di respiro | Crema con testo inchiostro | `#FBF3AA` |

## Tipografia

- Titoli: **Sora** o **Plus Jakarta Sans** (Google Fonts), peso 700-800, tracking leggermente stretto.
- Testo: **Inter**, 17 px, interlinea 1,6.
- Numeri grandi (statistiche) in Sora 800, colore giallo.

## Layout e forme

- Sezioni a tutta altezza con **scroll narrativo**: il mockup resta fisso e cambia schermata mentre il testo scorre (Dove dormire, Esperienze, Dove mangiare, Mappa).
- **Angoli arrotondati medi** (16 px), card con effetto vetro (sfocatura dello sfondo, bordo bianco al 10%).
- Alone giallo morbido dietro i punti focali, come un sole che sorge sul mare scuro.
- Linee d'onda sottili in azzurro come texture di sfondo.
- Griglia a card per le funzioni, con numeri dichiarati (3 isole, 50+ attività, 24/7).

## Hero

```
┌──────────────────────────────────────────────┐
│ ◖logo  App  Isole  Partner  Progetto   IT|EN │
│                                              │
│  Smart Egadi Islands 4.0     ┌──────────┐    │
│                              │  mockup  │    │
│  Le tre isole.               │ (si anima│    │
│  Un'app sola.                │ allo     │    │
│                              │ scroll)  │    │
│  [Scarica l'app] [Per le     └──────────┘    │
│   attività]                    (alone giallo)│
│  3 isole · 50+ attività · 24/7               │
└──────────────────────────────────────────────┘
```

## Componenti

- **Bottone primario**: giallo, testo inchiostro, angoli 12 px. **Secondario**: bordo bianco al 30%, testo bianco.
- **Card funzione**: vetro su blu notte, icona gialla, titolo bianco.
- **Contatori** che salgono da zero quando entrano in vista.
- **Sezione partner**: tre schede (Hospitality, Attività, Ristorazione) con anteprima della dashboard statistiche, per vendere lo strumento.
- **Banner offerta di lancio**: barra gialla fissa in alto fino a dicembre 2026.
- **Sezione di respiro**: una fascia crema con la citazione del team, per spezzare il blu.

## Movimento

- Scroll narrativo del mockup, contatori, alone giallo che si sposta con il puntatore.
- Con `prefers-reduced-motion` il mockup resta statico e mostra tutte le schermate in fila.

## Tono dei testi

Esempio di titolo hero: "Le tre isole. Un'app sola." Sottotitolo: "Cerca, prenota e scopri le Egadi con i consigli di chi le vive ogni giorno."

## Pro e contro

**Pro**: massima chiarezza sul prodotto, ottimo per convincere gli operatori con statistiche e dashboard, aspetto moderno e memorabile.

**Contro**: si allontana dal crema solare delle slide, il fondo scuro funziona meno per un contesto di vacanza se le foto non sono luminose, l'azzurro su blu notte è usabile solo per testi grandi, richiede più lavoro di sviluppo (animazioni).

## Riferimenti da cercare

Pagine prodotto di app di viaggio e mobilità, landing con scroll narrativo del telefono, siti di marketplace turistici.
