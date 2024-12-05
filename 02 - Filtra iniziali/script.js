/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const wordsByLetter = (words, letter) => {
    let final = [];
    for (let i = 0; i < words.length; i++) {    
        if (words[i][0] === letter) {
            final.push(words[i]);
        }
    }
    return final; 
}

// Invoca la funzione qui e stampa il risultato in console
const letter = "A"
const final = wordsByLetter(names, letter);

console.log(final);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]