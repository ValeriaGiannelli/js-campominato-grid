// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// AL CLICK DEL BOTTONE FACCIO COMPARIRE LA GRIGLIA


// prendo il bottone


// al click del bottone aggiungo una classe alla griglia che la farà comparire

/****************************************/

// CREO LA GRIGLIA DINAMICA

// prendo l'elemento nella quale dovrà comparire
const container = document.getElementById(grid);
console.log(container);

// creo la griglia interna andando a creare un elemento per ogni spazio che ho (in questo caso 10*10 = 100)
for(i = 0; i < 100; i++){
    // creo l'elemento
    let cell = `<div class="box"></div>`;
    console.log(cell);

    // creo un evnetListener su questo elemento
}

// ogni elemento creato avrà un click che andrà ad aggiungere una classe


// ogni click dovrà far comparire in console il numero della cella cliccata