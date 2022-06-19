"use strict";

//// Funktions Ausdruck (Anonyme Funktion)
// const meineFunktion = function (parameter_1, parameter_2){
//     auszuführender Code
// };

// meineFunktion();

const begruessung = function (a ="Max",b ="Mustermann",c=35) {
    console.log(`Hallo ${a} ${b} du bist ${c} alt!`);
};

let vorname= "Peter";
let nachname ="Pan";
let alter = 95;

begruessung();
begruessung(vorname,nachname,alter);
begruessung("Jens","Deubach",36);
