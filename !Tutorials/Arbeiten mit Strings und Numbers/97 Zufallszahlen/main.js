"use strict";


//Zufallszahl *N zahl zwischen 0 und N
let Zufallszahl = Math.random();
console.log(Math.floor(Zufallszahl * 12 + 1));

let min = 40;
let max = 60;
console.log(
    Math.floor(Math.random() * (max - min + 1) + min)
);