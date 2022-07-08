"use strict";
console.log(Math);


//Kreisfläche berechnen mit Radius
// A= PI *r^2
let pi = Math.PI;
console.log(pi);

let gerundet_pi = Math.round(pi);
console.log(gerundet_pi);

let abrunden_pi = Math.floor(pi);
console.log(abrunden_pi);

let aufrunden_pi = Math.ceil(pi);
console.log(aufrunden_pi);

//Kreisfläche berechnen
let kreisfläche = pi * Math.pow(12, 2);
console.log(kreisfläche);

//Runden
let kreisfläche_runden = Math.round(kreisfläche);
console.log(kreisfläche_runden);

//Abrunden
let kreisfläche_abrunden = Math.floor(kreisfläche);
console.log(kreisfläche_abrunden);

//Aufrunden
let kreisfläche_aufrunden = Math.ceil(kreisfläche);
console.log(kreisfläche_aufrunden);

//Nachkommastelle // gibts String aus
let kreisfläche_nachkommaStelle = kreisfläche.toFixed(2);
console.log(kreisfläche_nachkommaStelle);   

// string zu kommazahlen parseFloat()
console.log(parseFloat(kreisfläche_nachkommaStelle));

// string zu ganzzahlen parseInt()
console.log(parseInt(kreisfläche_nachkommaStelle));
