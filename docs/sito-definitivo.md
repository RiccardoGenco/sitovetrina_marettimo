# Sito definitivo

Il sito vive in `index.html` nella radice della repo. Unisce l'impianto semplice e pulito della bozza A (Solare) con lo scrollstory della bozza C (Ora blu). Le tre bozze restano in `prototypes/`, con la pagina di confronto in `prototypes/index.html`.

## Scopo

Convincere i titolari di attività alle Egadi (soprattutto B&B e strutture ricettive) ad aderire al progetto, compilando il modulo oppure chiedendo informazioni. Solo italiano.

## Struttura della pagina

1. **Hero**: "La tua attività, nell'app delle Egadi", con sole giallo, telefono e onde della bozza A. Due pulsanti: aderisci, chiedi informazioni.
2. **Una giornata con Travel Egadi**: scrollstory a tutta altezza, cinque tappe (08:00 mattina, 11:30 tarda mattina, 15:30 pomeriggio, 20:30 sera, 23:00 notte). Cambiano la foto, il colore del cielo, l'orologio, il capitolo e la schermata del telefono. Ogni capitolo mostra dove entra la tua attività. L'ultimo porta al modulo.
3. **Perché aderire**: quattro vantaggi (visibilità, contatti diretti, recensioni, statistiche) e le categorie a cui è rivolto.
4. **Come si entra, in tre passi**: modulo, preparazione della scheda (almeno 5 foto e descrizione fino a 1.000 caratteri), sei nell'app.
5. **Tre isole, una sola app**.
6. **Modulo**: un solo modulo con scelta tra "Voglio aderire" e "Voglio informazioni". I pulsanti della pagina preselezionano la scelta.
7. **Footer**.

## Scelte tecniche

- HTML, CSS e JavaScript in un solo file, senza framework, pubblicabile su GitHub Pages.
- Font Outfit in locale (`assets/fonts/`, licenza OFL), senza chiamate a Google Fonts.
- Foto e schermate in WebP (`assets/photos/web/`, `assets/app/web/`), con due misure per le foto dello scrollstory. Peso totale della pagina circa 1,8 MB su desktop e 1,1 MB su mobile. Gli originali restano in `assets/photos/` e `assets/app/` perché li usano le bozze.
- Con `prefers-reduced-motion` o senza JavaScript lo scrollstory diventa una sequenza di cinque capitoli con foto.
- Il modulo ha un campo trappola contro i robot e controlla i campi obbligatori e il consenso prima dell'invio.

## Da fare prima della pubblicazione

Le impostazioni stanno in `CONFIG`, all'inizio dello script in fondo a `index.html`.

| Cosa | Dove | Note |
|---|---|---|
| Servizio che riceve il modulo | `CONFIG.formEndpoint` | Per esempio Formspree o Netlify Forms. Finché è vuoto, il modulo mostra un avviso e non invia nulla. |
| Email e WhatsApp di contatto | `CONFIG.contactEmail`, `CONFIG.whatsapp` | Facoltativi. Se compilati compaiono due pulsanti accanto al modulo. |
| Informativa privacy e cookie | commento TODO nel footer | Il modulo raccoglie dati personali, serve la pagina. |

## Punti aperti

- **Offerta di lancio**: il sito dice "gratuito fino a dicembre 2026, dal 2027 decidi tu se continuare" (dalla presentazione). Il modulo cartaceo parla di una quota di 79,99 € l'anno. Con dicembre 2026 ormai vicino, il testo va confermato o aggiornato.
- **Concetta Spataro**: la frase sul coordinamento del progetto è ricavata dalle slide, da far confermare.
- **Foto**: i diritti d'uso vanno verificati. In due foto compaiono marchi visibili (ombrellone di una birra in `via-notte`, nome di una barca in `porto-giorno`).
- **Schermate del mock**: nella home compare un nome utente d'esempio. Meglio sostituirlo quando ci sono gli screenshot ufficiali.
- **Logo**: serve il file SVG originale al posto del ritaglio in `assets/logo-icona.png`.
- **Statistiche e recensioni**: nel testo sono scritte al futuro perché l'app non esiste ancora. Vanno riviste quando l'app esce.
