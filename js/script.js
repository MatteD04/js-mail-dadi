//gioco dei dadi

//generare 2 numeri random da 1 a 6
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);

const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

//stabilire qual'è il numero più grande
let userMessage;
if(computerNumber === userNumber) {
    userMessage = 'Pareggio';

} else if(computerNumber > userNumber) {
    userMessage = 'Hai perso';

} else {
    userMessage = 'Hai vinto';

}

// comunichiamo se ha vinto o ha perso
alert(userMessage);