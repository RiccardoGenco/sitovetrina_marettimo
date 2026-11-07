/* Impostazioni del sito: compila qui i valori e salva. Non serve toccare altro.
   Finché un campo è vuoto, la funzione collegata resta spenta (il modulo avvisa che non è attivo,
   i pulsanti di contatto non compaiono) e nella pagina privacy compare il segnaposto evidenziato. */
window.TE_CONFIG = {
  /* MODULO */
  formEndpoint: '',      // indirizzo del servizio che riceve il modulo, per esempio https://formspree.io/f/xxxxxxxx

  /* CONTATTI DIRETTI (facoltativi) */
  contactEmail: '',      // email per le richieste dirette, per esempio info@dominio.it
  whatsapp: '',          // numero WhatsApp con prefisso e senza spazi né +, per esempio 393331234567

  /* INFORMATIVA PRIVACY (privacy.html) */
  titolare: '',          // nome e cognome o ragione sociale del titolare del trattamento
  sedeTitolare: '',      // indirizzo, partita IVA o codice fiscale del titolare
  emailPrivacy: '',      // email a cui scrivere per esercitare i diritti sui dati
  fornitoreModulo: '',   // servizio che riceve il modulo, per esempio Formspree
  dataAggiornamento: ''  // data dell'ultimo aggiornamento, per esempio 7 novembre 2026
};
