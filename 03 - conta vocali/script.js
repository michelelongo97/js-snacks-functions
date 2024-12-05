/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const countVocals = (vocal) => {
    let vocals = 0;

    for(let i = 0; i < vocal.length; i++) {
        if (vocal[i] === 'a' || vocal[i] === 'e' || vocal[i] === 'i' || vocal[i] === 'o' || vocal[i] === 'u'){

            vocals = vocals + 1
        }
    }
    return vocals;
}

// Invoca la funzione qui e stampa il risultato in console
const final = countVocals(word)
console.log(final)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)