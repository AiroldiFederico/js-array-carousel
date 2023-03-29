/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.


MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. */







// array immagini
let images = [
    './asset/img/01.webp',
    './asset/img/02.webp',
    './asset/img/03.webp',
    './asset/img/04.webp',
    './asset/img/05.webp',
]

// dichiaro variabili che puntano alle freccie
// freccia sopra e sotto
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

//dichiaro variabile per l'index
let index = 0;

let img = document.querySelector(".image");

//incremento
next.addEventListener('click', function(){

    //uso l'indice array per l'attributo src
    img.setAttribute('src', images[index]);
    index++;

    //setto l'indice a 0 quando finisce l'array
    if (index >= images.length) {
        index = 0;
    }

});

//decremento
prev.addEventListener('click', function(){

    //uso l'indice array per l'attributo src
    img.setAttribute('src', images[index]);
    index--;

    //setto l'indice a 0 quando finisce l'array
    if (index < 0) {
        index = images.length - 1;
    }

});