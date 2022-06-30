"use strict";

//// Funktions Ausdruck (Anonyme Funktion)
// const meineFunktion = function (parameter_1, parameter_2){
//     auszuführender Code
// };

// meineFunktion();
/* 
const logDieZahlIt = function (a) {
  console.log(a);
};


logDieZahlIt(474); */
 const rechnen = function (a, b) {
  console.log(`${a} + ${b} =`, a + b);
  console.log(`${a} / ${b} =`, a / b);
  console.log(`${a} - ${b} =`, a - b);
  console.log(`${a} * ${b} =`, a * b);
  console.log(`${a} % ${b} =`, a % b);


}
  let a = 0;
rechnen(4,7);
rechnen(10,10);
rechnen(1,1);
rechnen(0,0);



















/* 
const begruessung = function (Vorname, Nachname) {
  console.log(`Hallo ${Vorname} ${Nachname}!`)
};

let vor = "Jens";
let nach = "Deubach";

begruessung(vor, nach);

begruessung("Kathrin","Fehlau");



let z_1 = 12;
let z_2 = 2;
let z_3 = 3;
let z_4 = 4;
let z_5 = 20;

rechnen(z_1, z_2);
rechnen(z_3, z_4);
rechnen(z_2, z_4);
rechnen(z_4, z_5);
rechnen(z_5, z_1); */