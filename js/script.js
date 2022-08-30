/*
Consegna:
Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

const VALORE_SENTINELLA = "fine";

// Creazione di un array per la lista della spesa
const shoppingList = [];

// Acquisizione dell'elemento input HTML di tipo button per gestire l'inserimento dei prodotti nella lista
const buttonProduct = document.getElementById("buttonProduct");

// Aggiungiamo evento al pulsante
buttonProduct.addEventListener("click", function () {
    // Acquisizione dell'elemento input HTML per l'inserimento dei prodotti
    const product = document.getElementById("productName");

    // Condizione per verificare se l'elemento inserito nell'input è una stringa (diversa dal valore sentinella "Fine" oppure un numero)
    if (product.value.toLowerCase() !== VALORE_SENTINELLA && isNaN(product.value)) {
        console.log("funziona");
    } else {
        console.log("Non funziona");
    }
});
