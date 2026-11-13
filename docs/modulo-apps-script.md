# Modulo "Aderisci": ricezione con Google Apps Script

Le richieste inviate dal modulo del sito finiscono in un Foglio Google (scheda "Richieste")
e arrivano come email a travelegadi@gmail.com. Rispondendo all'email si scrive direttamente al cliente.

Il codice è in `apps-script/Codice.gs`.

## Pubblicazione (una volta sola)

Tutti i passaggi vanno fatti con l'account **travelegadi@gmail.com**.

1. Crea un nuovo Foglio Google, per esempio "Travel Egadi - Richieste".
2. Dal foglio: **Estensioni → Apps Script**.
3. Cancella il contenuto di `Codice.gs` nell'editor e incolla quello di `apps-script/Codice.gs`. Salva.
4. In alto scegli la funzione **prova** e premi **Esegui**. Google chiede le autorizzazioni:
   Rivedi autorizzazioni → scegli l'account → Avanzate → "Vai a ... (non sicuro)" → Consenti.
   (L'avviso compare perché lo script è tuo e non è verificato da Google: è normale.)
   Controlla che nel foglio sia comparsa la scheda "Richieste" con una riga di prova
   e che sia arrivata l'email. Poi cancella la riga di prova.
5. **Esegui il deployment → Nuovo deployment** → tipo **App web**.
   - Esegui come: **Me**
   - Chi ha accesso: **Chiunque**
6. Copia l'**URL dell'app web** (finisce con `/exec`) e mettilo in `config.js` alla voce `formEndpoint`.

## Modifiche successive al codice

Dopo aver cambiato il codice nell'editor: **Esegui il deployment → Gestisci deployment → modifica (matita)
→ Versione: Nuova versione → Esegui il deployment**. Così l'URL resta lo stesso e non serve toccare `config.js`.

## Limiti

- Un account Gmail gratuito può inviare circa 100 email al giorno con Apps Script.
- Le colonne "Stato" e "Note" del foglio sono per voi: servono a segnare chi è stato contattato, chi ha aderito, ecc.
