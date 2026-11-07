# Sito definitivo

Il sito vive in `index.html` nella radice della repo. Unisce l'impianto semplice e pulito della bozza A (Solare) con lo scrollstory della bozza C (Ora blu). Le tre bozze restano in `prototypes/`, con la pagina di confronto in `prototypes/index.html`.

## Fonte dei testi

I testi principali (titolo, vantaggi, come funziona, offerta) riprendono le didascalie del video informativo `0542.mp4`: stanco di regalare percentuali ai colossi del web, zero commissioni, contatto diretto senza intermediari, quota di lancio di 79,99 €.

## Scopo

Convincere i titolari di attività alle Egadi (soprattutto B&B e strutture ricettive) ad aderire al progetto, compilando il modulo oppure chiedendo informazioni. Solo italiano.

## Struttura della pagina

1. **Hero**: "Stanco di regalare percentuali altissime ai colossi del web?", con sole giallo, telefono e onde della bozza A. Due pulsanti: aderisci, chiedi informazioni.
2. **Una giornata con Travel Egadi**: scrollstory a tutta altezza, cinque tappe (08:00 mattina, 11:30 tarda mattina, 15:30 pomeriggio, 20:30 sera, 23:00 notte). Cambiano la foto, il colore del cielo, l'orologio, il capitolo e la schermata del telefono. Ogni capitolo mostra dove entra la tua attività. L'ultimo porta al modulo.
3. **Perché aderire**: quattro vantaggi (zero commissioni, visibilità, contatti immediati, statistiche in tempo reale) e le categorie a cui è rivolto.
4. **Come funziona** (come gli utenti trovano la tua attività) e **come si entra, in tre passi**: modulo, preparazione della scheda (almeno 5 foto e descrizione fino a 1.000 caratteri), sei nell'app.
5. **Tre isole, una sola app**.
6. **Modulo**: un solo modulo con scelta tra "Voglio aderire" e "Voglio informazioni". I pulsanti della pagina preselezionano la scelta.
7. **Footer**.

## Scelte tecniche

- HTML, CSS e JavaScript in un solo file, senza framework, pubblicabile su GitHub Pages.
- Font Outfit in locale (`assets/fonts/`, licenza OFL), senza chiamate a Google Fonts.
- Foto in WebP (`assets/photos/web/`), con due misure per le foto dello scrollstory. Gli originali restano in `assets/photos/` e `assets/app/` perché li usano le bozze.
- Le schermate dell'app nel telefono sono un mock disegnato in HTML e CSS (home, esperienze, scheda), con le foto di Marettimo e nomi generici. Sono illustrative e scalano con il telefono. Si sostituiscono con gli screenshot ufficiali quando l'app esiste.
- Barra fissa su mobile con "Aderisci al progetto" (e "WhatsApp" se il numero è compilato): compare dopo lo scrollstory e sparisce sul modulo.
- Anteprima social `assets/og.jpg` (1200x630), favicon, `robots.txt` e `sitemap.xml`. Gli indirizzi assoluti puntano a riccardogenco.github.io: vanno cambiati se il sito avrà un dominio proprio (`og:image` in `index.html`, `sitemap.xml`, `robots.txt`).
- Con `prefers-reduced-motion` o senza JavaScript lo scrollstory diventa una sequenza di cinque capitoli con foto.
- Il modulo ha un campo trappola contro i robot e controlla i campi obbligatori e il consenso prima dell'invio.

## Da fare prima della pubblicazione

Tutte le impostazioni stanno in `config.js`, nella radice della repo. Basta compilare i campi e salvare.

| Cosa | Campo in `config.js` | Note |
|---|---|---|
| Servizio che riceve il modulo | `formEndpoint` | Per esempio Formspree. Finché è vuoto il modulo avvisa che non è attivo e non invia nulla. |
| Email e WhatsApp di contatto | `contactEmail`, `whatsapp` | Facoltativi. Se compilati compaiono i pulsanti accanto al modulo, e WhatsApp anche nella barra fissa su mobile. |
| Dati dell'informativa privacy | `titolare`, `sedeTitolare`, `emailPrivacy`, `fornitoreModulo`, `dataAggiornamento` | `privacy.html` mostra un segnaposto giallo finché un campo è vuoto. |

L'informativa è un testo di partenza (GDPR, nessun cookie, nessuno strumento di statistica). Va fatta rivedere da chi cura gli aspetti legali del cliente, in particolare i tempi di conservazione (proposti: 12 mesi se non si dà seguito) e il fornitore del modulo. Se in futuro si aggiungono statistiche o cookie, va aggiornata e può servire un avviso di consenso.

## Punti aperti

- **Offerta**: il sito segue il video informativo (`0542.mp4`) e il modulo di adesione: zero commissioni, quota di lancio di 79,99 € all'anno IVA inclusa, per 12 mesi dall'attivazione. La presentazione, più vecchia, parlava di inserimento gratuito fino a dicembre 2026 e di decisione nel 2027: il sito non lo dice più. Da far confermare al cliente.
- **Titolare del trattamento**: nel modulo cartaceo l'intestatario dei pagamenti è Myland Srl. Per l'informativa privacy serve sapere chi è il titolare dei dati raccolti dal modulo del sito. Le coordinate bancarie del modulo non vanno mai messe nel sito.
- **Concetta Spataro**: la frase nel sito riprende la presentazione ("il team è guidato da Concetta Spataro, esperta del settore turistico"). La presentazione parla anche di un coordinatore residente a Marettimo, senza dire che sia la stessa persona, quindi non l'ho scritto.
- **Foto**: i diritti d'uso vanno verificati. In due foto compaiono marchi visibili (ombrellone di una birra in `via-notte`, nome di una barca in `porto-giorno`).
- **Schermate del mock**: nella home compare un nome utente d'esempio. Meglio sostituirlo quando ci sono gli screenshot ufficiali.
- **Logo**: serve il file SVG originale al posto del ritaglio in `assets/logo-icona.png`.
- **Statistiche**: nel testo sono scritte al futuro perché l'app non esiste ancora. Vanno riviste quando l'app esce.
