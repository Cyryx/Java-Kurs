"use strict";


let mein_array = [
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

let mein_objekt = {
    vorname: `Laura`,
    nachname: `Mustermann`,
    alter: `20`
};

/* 
console.log(mein_array);
console.log(mein_objekt);
 */
/* //Eigenschaft auslesen 
for (let eigenschaft in mein_array) {
    console.log(`Array Eigenschaft ${eigenschaft}`);
}

//Wert auslesen
for (let eigenschaft of mein_array) {
    console.log(`Array Wert ${eigenschaft}`);

} */

//Eigenschaft auslesen 
for (let eigenschaft in mein_objekt) {
    console.log(`Objekt Eigenschaft ${eigenschaft}`);
        //console.log(`Objekt Wert ${eigenschaft} ${mein_objekt[eigenschaft]}`);

}

//Wert auslesen geht nicht 
/* for (let eigenschaft of mein_objekt) {
    console.log(`Objekt Wert ${eigenschaft}`);

} */