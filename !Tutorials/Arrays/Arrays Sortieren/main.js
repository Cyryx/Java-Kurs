"use strict";

/* so nicht mit Zahlen
let max = 100;
let wert_zahlen = [];
for (let i = 1; i <= 20; i++) {
    wert_zahlen.push(Math.floor(Math.random() * (max - 1 + 1)) + 1);
    while (i == 20) {
        console.log('**********Array Ausgabe**********');
        console.log(`Zahlengenerator Wert: ` + wert_zahlen);
        break;
    }
}

let zahlen_array_sortieren = wert_zahlen.sort();
console.log('**********Gefiltert**********');

console.log(zahlen_array_sortieren);
//////////
let mein_personen_array = [
    `Kathrin`,
    `Jens`,
    `Sonja`,
    `Elina`,
    `Maik`,
    `Bente`,
    `Hartmut`,
    `Leon`,
    `Michal`,
    `Laura`
];
console.log('**********Array komplett Ausgabe**********');

console.log(mein_personen_array);
let string_array_sortieren = mein_personen_array.sort();
console.log('**********Sortiert**********');

console.log(string_array_sortieren);
*/

//Die sort() Methode für Arrays wandelt Elemente des Arrays standartmässig in Strings um und vegleicht diese

// Für das sortieren  von Zahlen Arrays sollte deshalb eine Vergleichsfunktion genutzt werden.
//Ist der Rückgabewert der Vergleichsfunktion < 0, wird a auf einen niedrigen Index als b gesetzt
//Ist der Rückgabewert der Vergleichsfunktion > 0, wird a auf einen höheren Index als b gesetzt
//Ist der Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist
//return a - b sortiert in aufsteigender Reihenfolge
//return b - a sortiert in absteigender Reihenfolge

let max = 100;
let wert_zahlen = [];
let zaehler = 5;
for (let i = 0; i <= zaehler; i++) {
    wert_zahlen.push(Math.floor(Math.random() * (max - 1 + 1)) + 1);
    while (i == zaehler) {
        console.log(`Zahlengenerator Wert: ` + wert_zahlen);
        break;
    }
}

let zahlen_sortiert = wert_zahlen.sort(function (a, b) {
   return a-b;
})

console.log(zahlen_sortiert);