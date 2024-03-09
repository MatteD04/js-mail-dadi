//chiedi all'utente la sua email
const emailList = ['paperino@email.it', 'topolino@email.com', 'pluto@email.com', 'minnie@email.it', 'paperina@email.com'];
const userEmail = prompt('inserisci la tua email');

let emailFound = false;
// Scorrere la lista delle email
for(let i = 0; i < emailList.length; i++) {
    const thisEmail = emailList[i];

    if(thisEmail === userEmail) {
        emailFound = true;
    }
}

//se è nella lista di chi può accedere stampa un messaggio
if(emailFound === true) {
    alert('benvenuto');
} else {
    alert('ci dispiace ma non puoi accedere');
}