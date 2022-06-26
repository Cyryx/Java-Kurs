"use strict";

let personen_array = [
    "Maik",
    "Jens",
    "Kathrin",
    "Bente",
    "Hartmut",
    "Sonja",
    "Elina",
    "Leon",
    "Laura"
]
//
console.log('***********************************************************************');

console.log(personen_array);

console.log('***********************************************************************');

console.log(`Person geändert von ${personen_array[0]} zu ${personen_array[0] = "Benny"}`);

console.log('***********************************************************************');

console.log(personen_array);

console.log('***********************************************************************');


//push() hinzufügen eines Elements am ende des Arrays
personen_array.push("Maik");

console.log(`Person wurde am ende des Arrays hinzugefügt: ${personen_array[personen_array.length-1]}`);

console.log('***********************************************************************');

console.log(personen_array);

console.log('***********************************************************************');
//

//pop() Methode letzten eintrag entfernen 
console.log(`
Letzte Person im Array gelöscht = personen_array.pop();
${personen_array}  
${personen_array.pop()} gelöscht
${personen_array} 
`);

console.log('***********************************************************************');
//unshift() fügt am Anfang des Arrays einen Wert zu 
console.log(`
Person am anfang des Array hinzugefügt = personen_array.unshift();
${personen_array}  
${personen_array.unshift("Maik")} hinzugefügt
${personen_array} 
`);

console.log('***********************************************************************');

//shift() methode entfernt das erste Element des Arrays
console.log(`
Person am anfang des Array gelöscht = personen_array.shift();
${personen_array}  
${personen_array.shift()} gelöscht
${personen_array} 
`);

console.log('***********************************************************************');

