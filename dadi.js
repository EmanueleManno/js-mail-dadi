//VEDO SE FUNZIONA
console.log('JS OK');

//RECUPERO GLI ELEMENTI DAL DOM:
const diceButton = document.getElementById('dice-button');
const userNumber = document.getElementById('user-number');
const cpuNumber = document.getElementById('cpu-number');
const esitElement = document.getElementById('esit');

//AL CLICK DEL BOTTONE:
diceButton.addEventListener('click', function () {

//GENERO UN NUMERO CASUALE (UTENTE):
const userRandom =  Math.random();
console.log('Random User number ' + userRandom);

//GENERO UN SECONDO NUMERO CASUALE (CPU):
const cpuRandom =  Math.random();
console.log('Random CPU number ' + cpuRandom);

//DICHIARO CHE VOGLIO CHE IL NUMERO MASSIMO SIA 6:
const max = 6;

//GENERO UN NUMERO CASUALE PER L'UTENTE:
let userResult = Math.floor(userRandom * max) + 1;
console.log('Numero Estratto Utente : ' + userResult);

//GENERO UN NUMERO CASUALE PER LA CPU:
let cpuResult = Math.floor(cpuRandom * max) + 1;
console.log('Numero Estratto CPU : ' + cpuResult);

//CONFRONTO DEI NUMERI! SE I NUMERI SONO UGUALI:
if (userResult == cpuResult){
    console.log('Pareggio!');
    esitElement.innerText = 'Pareggio!';
}
//SE IL NUMERO DELL'UTENTE E' MAGGIORE DI QUELLO DELLA CPU:
else if (userResult > cpuResult){
    console.log('Vittoria per il giocatore!');
    esitElement.innerText = 'Vittoria per il giocatore!';
}
//SE IL NUMERO DELL'UTENTE E' MINORE DI QUELLO DELLA CPU:
else if (userResult < cpuResult){
    console.log('Vittoria per la CPU!');
    esitElement.innerText = 'Vittoria per la CPU!';
}

//INSERISCO I RISULTATI NELLA PAGINA:
userNumber.innerText = ('Numero Estratto utente :') + userResult;
cpuNumber.innerText = ('Numero Estratto CPU :') + cpuResult;
});