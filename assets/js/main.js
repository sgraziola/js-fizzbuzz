/* BUZZFIZZ */
//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi “Fizz” al posto del numero
//e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

/* Tools 
    -for loop
        -if else if
*/


//1. Scrivi un programma che stampi in console i numeri da 1 a 100

for (let i=1; i<=100; i++){
    if (i%3 == 0 && i%5 == 0) {
        //Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
        console.log("FizzBuzz");
    } else if (i%5 == 0) {
        //per i multipli di 5 stampi “Buzz”.
        console.log("Buzz"); 
    } else if (i%3 == 0){
        //Sostituisco ai multipli di 3 "Fizz"
        console.log("Fizz");
    } else {
        console.log(i);      
    }
}

