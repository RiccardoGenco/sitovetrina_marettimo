/* Riceve il modulo "Aderisci" del sito Travel Egadi.
   Ogni richiesta diventa una riga del foglio "Richieste" e un'email di notifica.
   Istruzioni per pubblicarlo: docs/modulo-apps-script.md */

var EMAIL_NOTIFICHE = 'travelegadi@gmail.com';
var NOME_FOGLIO = 'Richieste';

// campo del modulo -> intestazione della colonna
var COLONNE = [
  ['data', 'Data'],
  ['richiesta', 'Richiesta'],
  ['attivita', 'Attività'],
  ['tipologia', 'Tipologia'],
  ['isola', 'Isola'],
  ['referente', 'Referente'],
  ['telefono', 'Telefono'],
  ['email', 'Email'],
  ['messaggio', 'Messaggio'],
  ['consenso', 'Consenso privacy']
];
// colonne in più da compilare a mano per seguire le adesioni
var COLONNE_GESTIONE = ['Stato', 'Note'];

function doPost(e) {
  try {
    var d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (d.sito) return risposta({ ok: true });   // campo trappola riempito da un robot: si finge l'invio

    var r = {};
    COLONNE.forEach(function (c) { r[c[0]] = testo(d[c[0]]); });
    r.consenso = d.consenso ? 'Sì' : '';
    if (!r.attivita || !r.referente || !r.email || !r.consenso) {
      return risposta({ ok: false, errore: 'Campi obbligatori mancanti' });
    }

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var riga = COLONNE.map(function (c) { return perFoglio(r[c[0]]); });
      riga[0] = new Date();
      foglio().appendRow(riga.concat(['Da contattare', '']));
    } finally {
      lock.releaseLock();
    }

    notifica(r);
    return risposta({ ok: true });
  } catch (err) {
    console.error(err);
    return risposta({ ok: false, errore: 'Errore interno' });
  }
}

// Esegui questa funzione una volta dall'editor: chiede le autorizzazioni,
// crea il foglio e ti manda un'email di prova.
function prova() {
  var esito = doPost({ postData: { contents: JSON.stringify({
    richiesta: 'Informazioni',
    attivita: 'PROVA - da cancellare',
    tipologia: 'B&B',
    isola: 'Marettimo',
    referente: 'Mario Rossi',
    telefono: '+39 0923 000000',
    email: EMAIL_NOTIFICHE,
    messaggio: 'Richiesta di prova inviata dall\'editor di Apps Script.',
    consenso: 'on'
  }) } });
  console.log(esito.getContent());
}

function notifica(r) {
  var testo = COLONNE.slice(1).map(function (c) {
    return c[1] + ': ' + (r[c[0]] || '-');
  }).join('\n');
  var opzioni = {
    to: EMAIL_NOTIFICHE,
    subject: 'Travel Egadi: ' + r.richiesta + ' - ' + r.attivita,
    body: 'Nuova richiesta dal sito Travel Egadi.\n\n' + testo +
      '\n\nRispondi a questa email per scrivere direttamente a ' + r.referente + '.\n' +
      'Tutte le richieste sono nel foglio: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl()
  };
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)) opzioni.replyTo = r.email;
  MailApp.sendEmail(opzioni);
}

function foglio() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(NOME_FOGLIO);
  if (!sh) {
    sh = ss.insertSheet(NOME_FOGLIO);
    var intestazioni = COLONNE.map(function (c) { return c[1]; }).concat(COLONNE_GESTIONE);
    sh.appendRow(intestazioni);
    sh.getRange(1, 1, 1, intestazioni.length).setFontWeight('bold');
    sh.setFrozenRows(1);
    // tutto come testo, tranne la data: così i numeri di telefono tengono lo zero iniziale
    sh.getRange(2, 2, sh.getMaxRows() - 1, intestazioni.length - 1).setNumberFormat('@');
    sh.getRange(2, 1, sh.getMaxRows() - 1, 1).setNumberFormat('dd/mm/yyyy hh:mm');
  }
  return sh;
}

// Testo semplice e di lunghezza ragionevole.
function testo(v) {
  return String(v == null ? '' : v).trim().slice(0, 2000);
}

// Un valore che comincia con = + - @ verrebbe letto dal foglio come formula,
// quindi si antepone un apostrofo (non compare nella cella).
function perFoglio(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function risposta(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
