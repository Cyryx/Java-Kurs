"use strict";

let fuehrerschein = true;

// let fuehrerschein_kontrolle = function () {

//     if (fuehrerschein) {
//         return "Darf Autofahren";
//     } else {
//         return "Darf kein Autofahren";
//     }
// }
// console.log(fuehrerschein_kontrolle());

let fuehrerschein_kontrolle = function () {
    return fuehrerschein ? "Darf Auto fahren" : "Darf kein Auto fahren";
}
console.log(fuehrerschein_kontrolle());

let erdbeschleunigung = 2.2;
let panik = false;

console.log(`Erdbeschleunigung = ${erdbeschleunigung} und Panik = ${panik}`);
erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung = 9.81) : (panik = false, erdbeschleunigung = 9.81)
console.log(`Erdbeschleunigung = ${erdbeschleunigung} und Panik = ${panik}`);

let farbe = "rot";
console.log((farbe === "rot" || farbe === "gelb") ? `Farbe ist ${farbe}`: "Farbe ist nicht vorhanden");

