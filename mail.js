//VEDO SE FUNZIONA
console.log('JS OK');

//RECUPERO L'ELEMENTO DAL DOM:
const mailAnswer = document.getElementById('mail-answer');

//CREO LA LISTA DI MAIL:
const mailList = ['emanuele.manno@gmail.com', 'marco.lanci@gmail.com', 'marco.baroncini@gmail.com', 'marius.minia@gmail.com'];
console.table(mailList);

//CHIEDO LA MAIL ALL'UTENTE:
const mailInput = prompt('Dimmi una mail valevole per poter accedere!').trim();
console.log(mailInput);

