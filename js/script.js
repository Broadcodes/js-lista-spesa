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

// Acquisizione dell'elemento input HTML di tipo button per gestire l'inserimento e visualizzazione dei prodotti nella lista
const buttonProduct = document.getElementById("buttonProduct");
const buttonVisualProduct = document.getElementById("buttonVisualProduct");
let index = 0

// Aggiungiamo evento al pulsante "Inserisci"
buttonProduct.addEventListener("click", function () {

    // Acquisizione dell'elemento input HTML per l'inserimento dei prodotti
    const product = document.getElementById("productName");

    // Condizione per verificare se l'elemento inserito nell'input è una stringa (diversa dal valore sentinella "Fine" oppure un numero)
    // Operazione per aggiungere elementi nell'array 
    if (product.value.toLowerCase() !== VALORE_SENTINELLA && isNaN(product.value)) {
        shoppingList[index] = product.value;
        index++;
    } else {
        // Acquisizione dell'elemento input HTML per mostrare i prodotti nella text area
        const notes = document.getElementById("notes");
        let product;

        let index = 0;

        while (index < shoppingList.length) {
            // Creazione di dell'elemento "li" ad ogni ciclo
            product = document.createElement("li");

            // Se la lunghezza dell'array da visualizzare è maggiore di 10 elementi vengono visualizzati con alcune proprietà
            if (shoppingList.length > 10) {
                notes.classList.add("note");
                notes.style.maxHeight = "320px";
                notes.style.paddingLeft = "30px";
            }

            // inserimento del valore nell'elemento "li"
            product.innerHTML += shoppingList[index];
            notes.append(product);
            index++;
        }

        // Disattiazione del pulsante "Inserimento prodotti"
        buttonProduct.disabled = true;
    }

    // Rimuove qualsiasi testo presente nell'input
    product.value = "";
});