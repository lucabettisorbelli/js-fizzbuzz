
let container = document.getElementById("container");


for (let i = 1; i <= 100; i++) {
    let valore = "";
    let className = "";

    if (i % 3 === 0 && i % 5 === 0) {
        valore = "FizzBuzz";
        className = "box1";

    } else if (i % 3 === 0) {
        valore = "Fizz";
        className = "box2";

    } else if (i % 5 === 0) {
        valore = "Buzz";
        className = "box3";
    } else {
        valore = i;
        className = "box4";
    }
    
    console.log(valore);

    // crea un nuovo elemento e lo assegna a "elemento"
    let elemento = document.createElement("div");

    // imposta il contenuto di  testo di "div" a "valore"
    elemento.textContent = valore;

    // aggiunge classe css 
    elemento.classList.add(className);
    
    // aggiunge l'elemento "div" a "container"
    container.append(elemento);
}