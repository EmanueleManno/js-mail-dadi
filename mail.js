//VEDO SE FUNZIONA
console.log('JS OK');

//RECUPERO L'ELEMENTO DAL DOM:
const mailAnswerOk = document.getElementById('mail-answer-ok');
const mailAnswerNo = document.getElementById('mail-answer-no');

//CREO LA LISTA DI MAIL:
const mailList = ['emanuele.manno@gmail.com', 'marco.lanci@gmail.com', 'marco.baroncini@gmail.com', 'marius.minia@gmail.com'];
console.table(mailList);

//CHIEDO LA MAIL ALL'UTENTE:
const mailInput = prompt('Dimmi una mail valevole per poter accedere!').trim();
console.log(mailInput);

//VERIFICO CHE SIA PRESENTE ALL'INTERNO DELLA LISTA:
for (let i = 0; i < 4; i++) {
console.log(mailList[i]);

    if (mailInput == mailList[i]) {
    console.log('Benvenuto ' + mailInput);
    mailAnswerOk.innerText = ('Benvenuto ' + mailInput);  
}
    else (mailInput != mailList[i]) 
    console.log('NON PUOI ACCEDERE FURFANTE');
    mailAnswerNo.innerText = ('NON PUOI ACCEDERE FURFANTE');
}
