//gioco dei dadi


const pullButton = document.querySelector('#btn-pull');
pullButton.addEventListener('click', function () {

    const numbContainer = document.querySelector('#computer');
    const numbContainer2 = document.querySelector('#user');

    //al click del pulsante generare 2 numeri random da 1 a 6
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

    //scriviam in pagina i numeri
    const divLi = `<div>${computerNumber}</div>`;
    numbContainer.innerHTML += divLi;

    const divL = `<div>${userNumber}</div>`;
    numbContainer2.innerHTML += divL;

    // comunichiamo se l'utente ha vinto o ha perso
    alert(userMessage);

})