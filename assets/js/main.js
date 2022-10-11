/* BUZZFIZZ */
//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi “Fizz” al posto del numero
//e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

/* Tools 
    -for loop
        -if else if
*/


//Scrivi un programma che stampi in console i numeri da 1 a 100
const containerEl = document.querySelector(".container");
for (let i=1; i<=100; i++){
    const divEl = document.createElement("div");
    if (i%3 == 0 && i%5 == 0) {
        //Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
        //console.log("FizzBuzz");
        divEl.append("FizzBuzz");
        divEl.classList.add("fizzbuzz");
        containerEl.append(divEl);
    } else if (i%5 == 0) {
        //per i multipli di 5 stampi “Buzz”.
        //console.log("Buzz"); 
        divEl.append("Buzz");
        divEl.classList.add("buzz");
        containerEl.append(divEl);
    } else if (i%3 == 0){
        //Sostituisco ai multipli di 3 "Fizz"
        //console.log("Fizz");
        divEl.append("Fizz");
        divEl.classList.add("fizz");
        containerEl.append(divEl);
    } else {
        //console.log(i);      
        divEl.append(`${i}`);
        divEl.classList.add("box");        
        containerEl.append(divEl);
    }
}
/* BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare. */

/* BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */