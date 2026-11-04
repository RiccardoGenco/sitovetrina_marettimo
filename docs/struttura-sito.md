# Struttura comune del sito vetrina

Valida per tutti e tre gli stili. Cambiano grafica, ritmo e tono, restano uguali contenuti e pagine.

## Obiettivi del sito

1. **Far scaricare l'app** ai turisti (link App Store e Google Play, oppure lista d'attesa se non ancora pubblicata).
2. **Far aderire i partner** (hotel, B&B, tour, ristoranti) con un percorso chiaro fino al modulo.
3. **Dare credibilità al progetto**: team locale, isole, numeri verificabili.

## Pubblico

| Pubblico | Cosa cerca | Azione principale |
|---|---|---|
| Turista italiano e straniero | Capire cosa offre l'app e perché è meglio di cercare su più siti | Scaricare l'app |
| Operatore locale | Visibilità, contatti diretti, costo | Compilare il modulo partner |
| Enti e stampa | Chi c'è dietro, obiettivi del progetto | Contattare il team |

## Mappa delle pagine

```
/                    Home
/app                 L'app: funzioni, screenshot, download
/isole               Le tre isole
  /isole/favignana
  /isole/levanzo
  /isole/marettimo
/partner             Per le attività: benefici, costi, come aderire
  /partner/aderisci  Modulo di adesione
/progetto            Chi siamo: Smart Egadi Islands 4.0, team
/contatti
/privacy  /cookie
```

Lingue: italiano come base, inglese da prevedere subito nella struttura (i turisti stranieri sono un pubblico chiaro).

## Sezioni della home

1. **Hero**: titolo, sottotitolo "Smart Egadi Islands 4.0", mockup dell'app, due bottoni (scarica l'app, sei un'attività?).
2. **Il problema**: troppi siti e informazioni sparse.
3. **La soluzione**: un'unica app, con le quattro aree (Dove dormire, Esperienze, Dove mangiare, Punti di interesse).
4. **Funzionalità**: ricerca, prenotazione, mappa, consigli dei local, recensioni.
5. **Le tre isole**: Favignana, Levanzo, Marettimo, con foto e una riga ciascuna.
6. **Come funziona**: tre passi (cerca, scegli, vivi l'isola come un local).
7. **Per le attività**: benefici per hospitality, attività turistiche e ristorazione, con statistiche e contatti diretti.
8. **Offerta di lancio**: inserimento gratuito fino a dicembre 2026 (testo da concordare, vedi punti aperti in `app-travel-egadi.md`).
9. **Chi c'è dietro**: Concetta Spataro e il team locale.
10. **Call to action finale**: download e adesione partner.
11. **Footer**: contatti, social, legali.

## Componenti da progettare

Navbar con selettore lingua, bottone download con badge degli store, mockup telefono, card isola, card funzione, card partner, banner offerta di lancio, modulo di adesione, accordion FAQ, footer.

## Contenuti e vincoli

- Testi in italiano corretto, senza i refusi delle slide.
- Nessun dato di pagamento (IBAN o altro) sul sito pubblico: i dati bancari vanno comunicati ai partner solo dopo l'adesione.
- Foto con diritti chiari, testo alternativo su tutte le immagini.
- Cookie banner e informativa privacy, perché il modulo raccoglie dati personali e dati fiscali.
- Accessibilità: contrasti secondo `brand-colori.md`, navigazione da tastiera, rispetto di `prefers-reduced-motion`.

## Proposta tecnica (da discutere)

- Sito statico generato con **Astro** e **Tailwind CSS**, pubblicabile su GitHub Pages, Netlify o Cloudflare Pages.
- Modulo partner collegato a un servizio di form (Formspree, Netlify Forms) o a un piccolo endpoint, con invio email.
- Internazionalizzazione IT/EN fin dall'inizio.
- Un prototipo per stile in `prototypes/` (già presenti come bozze della home), con gli stessi contenuti, per confrontare le tre direzioni a parità di testo.

## Piano di lavoro

1. Scelta dello stile (o mix) dopo il confronto sulle tre schede.
2. Raccolta asset: logo SVG, screenshot, foto con licenza.
3. Prototipo della home nei tre stili.
4. Scelta, poi sviluppo delle pagine restanti.
5. Test su mobile, accessibilità, prestazioni, pubblicazione.
