// -- PALINDROMA

/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.
*/

/*

--DONE  1.  Chiedo all'utente di inserire una parola => prompt
--DONE  2.  Creo una funzione per capire se la parola inserita è palindroma.
    --DONE  2.1 Utilizzo 3 funzioni per verificare se la parola è palindroma
        --DONE  2.1.1   Prima funzione => split('');
            --DONE  2.1.1.1 Viene utilizzata per convertire la stringa nei singoli caratteri dell'array => Ex. Un utente inserisce tramite prompt la parola: "Mario", tramite la funzione split, viene convertita in un array, quindi in => ["mario"];
        --DONE  2.1.2   Seconda funzione => reverse();
            --DONE  2.1.2.1  Aiuta a invertire la posizione dei SINGOLI caratteri dell'array. => Ex. Avevamo ["mario"] e con questa funzione diventa => ["o","i","r","a","m"];
        --DONE  2.1.3   Terza funzione/metodo => join();
            --DONE  2.1.3.1 Viene utilizzato per combinare i singoli caratteri dell'array nella stringa. => Ex. Avevamo ["o","i","r","a","m"] e con questo metodo diventa => "oiram" => Quindi non è più un array, ma è una stringa come all'inizio ed è stata invertita.
    --DONE  2.2 Confronto la parola inserita dall'utente con la parola invertita, (ovvero la parola che abbia subito le modifiche delle 3 funzioni utilizzate prima).
        --DONE  2.2.1   Se è uguale la parola sarà "PALINDROMA"
        --DONE  2.2.2   Se è diversa la parola sarà "NON PALINDROMA"
--DONE  3. Sostituisco l'argomento della funzione con il valore che gli passa l'utente => funzione(userWord);
    --DONE  3.1 La salvo in una variabile => let result = funzione(userWord);
--DONE  4. Stampo il risultato della funzione nell'html => "append" => x.append(result);

*/

let resWordPalindrome = document.querySelector(".result");

let userWord = prompt("Inserisci una parola");
console.log(userWord);

let result = wordPalindrome(userWord);
resWordPalindrome.append(result);
console.log(result);

// FUNZIONE
function wordPalindrome(wordInput) {

    let palindrome;

    let userWordArr = wordInput.split('');
    console.log(userWordArr);   // Console log per vedere cosa stampa effettivamente la funzione utilizzata
    let userWordRevArr = userWordArr.reverse();
    console.log(userWordRevArr);    // Console log per vedere cosa stampa effettivamente la funzione utilizzata
    let userWordRev = userWordRevArr.join('');
    console.log(userWordRev);   // Console log per vedere cosa stampa effettivamente la funzione utilizzata

    if (wordInput === userWordRev) {
        palindrome = "La parola inserita è Palindroma";
    } else {
        palindrome = "La parola inserita non è palindroma";
    }
    return palindrome;
}
