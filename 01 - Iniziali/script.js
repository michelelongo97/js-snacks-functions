/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const firstLetter = (names) => {
    let maiusc = [];
    for(let i = 0; i < names.length; i++) {
        maiusc.push(names[i][0]);
    }
    return maiusc;
}


// Invoca la funzione qui e stampa il risultato in console

const firstLetterArray = firstLetter(names);
console.log(firstLetterArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]