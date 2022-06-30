"use strict";

let personen_array = [
    `Kathrin`,
    `Jens`,
    `Sonja`,
    `Elina`,
    `Maik`,
    `Bente`,
    `Hartmut`,
    `Leon`,
    `Elina`,
    `Laura`
];


//console.log(personen_array);

/* 
for (let i = 0; i < personen_array.length; i++) {
    const element = personen_array[i];
    console.log(element);
} 
*/
/* 
let meine_funktion = function (e) {
    console.log(e);
}

personen_array.forEach(meine_funktion) 
*/


personen_array.forEach(function (e) {
    console.log(e);
});