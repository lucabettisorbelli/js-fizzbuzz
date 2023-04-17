
const contenitore = document.getElementById("container");

for (let i = 1; i <= 100; i++) {

    // variabili specifiche per valori divisibili
    let valoreDiviso3 = ""; 
    let valoreDiviso5 = ""; 

    // se il resto di "i" diviso 3 = 0
    if (i % 3 === 0) {
        valoreDiviso3 += "Fizz";
    }

    // se il resto di "i" diviso 5 = 0
    if (i % 5 === 0) {
        valoreDiviso5 += "Buzz";
    }

    // stampa valore(se non è stringa vuota) o "i"
    console.log((valoreDiviso3 + valoreDiviso5) || i); 

    // contenitore.innerHTML += `<div class="box">${valore}</div>`
}