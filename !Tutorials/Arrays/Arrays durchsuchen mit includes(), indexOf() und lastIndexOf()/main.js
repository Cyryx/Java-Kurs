"use strict";

let personen_array = [
    "Kathrin",
    "Jens",    
    "Sonja",
    "Elina",
    "Maik",
    "Bente",
    "Hartmut",
    "Leon",
    "Elina",
    "Laura"
]

console.log(personen_array);

//array.includes(): Duchsucht das Array ab einem Startindex nach einen Wert und gibt True zurück, 
//wenn das Element gefunden wurde, bzw. false, wenn das Element nicht gefunden wurde
//Syntax: array.includes(Suchwert[, Startindex])
//nicht destuktiv
console.log('***********************************************************************');
let name_var = "ElinaMaus";
switch (personen_array.includes(name_var, 0)) {
    case true:
        console.log(`${personen_array[personen_array.indexOf(name_var,0)]} wurde an stelle personen_array[${personen_array.indexOf(name_var,0)}] des Arrays gefunden.`)
        break;
    case false:
        console.log(`Person wurde nicht gefunden.`)
        break;
}
console.log('***********************************************************************');

//array.indexOf(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt den Index der ersten Fundstelle zurück,
// wenn der Wert gefunden wurde oder -1 wenn der Wert im Array nicht gefunden wurde
//Syntax: array.indexOf(Suchwert[,Startindex])
//nicht destuktiv

console.log(`${personen_array[personen_array.indexOf(name_var,0)]} befindet sich an Stelle personen_array[${personen_array.indexOf(name_var,0)}] von indexOf.`);
console.log('***********************************************************************');

//array.lastIndexOf(): Durchsucht das Array ab einem Startindex Rückwärts nach einem Wert und gibt den Index der ersten Fundstelle zurück,
//wenn der Wert gefunden wurde oder -1 wenn der Wert im Array nicht gefunden wurde
//Syntax: array.lastIndexOf(Suchwert[,Startindex])
//nicht destuktiv
console.log(`${personen_array[personen_array.lastIndexOf(name_var,10)]} befindet sich an Stelle personen_array[${personen_array.lastIndexOf(name_var,10)}] von lastIndexOf.`);
console.log('***********************************************************************');