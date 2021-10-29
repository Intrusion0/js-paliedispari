//--PARI E DISPARI

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*

--DONE  1. Creo due variabili in cui l'utente inserirà in una "pari" o "dispari" e nell'altra inserirà un numero da 1 a 5.
--DONE  2. Creo una funzione in cui verrà generato un numero da 1 a 5 => function()
    --DONE  2.1 Assegno il valore generato al computer. => let botNum = numGenerato
--DONE  3. Sommo i numeri (utente e bot) => let sum = userNum + botNum
--DONE  4. Creo una funzione in cui dovrò confrontare se la somma è pari o dispari. => function(sumInput)
    --DONE  4.1 Se è pari => if (sum % 2 === 0)
    --DONE  4.2 Se è dispari => else (non è necessario inserire la condizione)
--DONE  5. Stampo in html il vincitore. => .append

*/

let resultGame = document.querySelector(".result");

let choice = prompt("Scegli tra 'pari' o 'dispari'");
console.log(choice);

let userNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
console.log("Numero scelto dall'utente: ", userNum);


// FUNZIONE NUMERO RANDOM DA 1 A 5 PER IL BOT
function numRandom() {

    let botNum = Math.floor(Math.random() * 5) + 1;

    return botNum;
}

let assignedNumBot = numRandom();
console.log("Numero assegnato al computer: ", assignedNumBot);

let sum = userNum + assignedNumBot;
console.log("La somma dei numeri è di: ", sum);


// FUNZIONE PER CONFRONTARE SE LA SOMMA E' PARI O DISPARI
function comparisonOfNum(sumInput) {

    let winner;

    if(sumInput % 2 === 0){
        winner = "La somma dei numeri è pari";
    } else {
        winner = "La somma dei numeri è dispari";
    }
    return winner;
}

let winnerGame = comparisonOfNum(sum);
console.log(winnerGame);

if (choice === "pari" && sum % 2 === 0) {
    resultGame.append(winnerGame, "  Hai vinto!");
} else if (choice === "dispari" && sum % 2 !== 0) {
    resultGame.append(winnerGame, "  Hai vinto!");
} else {
    resultGame.append(winnerGame, "  Hai perso!");
}
