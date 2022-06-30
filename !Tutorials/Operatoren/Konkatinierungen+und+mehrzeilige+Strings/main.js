"use strict";

let vorname = "Ruben";
let nachname = "Winkler";
let alter = 24;

let name = vorname + " " + nachname;
console.log(name);

let begruessung = "Hallo " + name + "!";
console.log(begruessung);

let zusammenfassung = name + " (" + alter + " Jahre)";
console.log(zusammenfassung);

let einzeiliger_string = "Das ist ein einzeiliger String!";

let mehrzeiliger_string = "Ich will diesen String " + 
"in der nächsten Zeile fortsetzen! " + 
"\n\tUnd wenn ich will, " + 
"kann es auch noch weitergehen.";

console.log(mehrzeiliger_string);