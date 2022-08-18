"use strict";

let mein_zahlen_array = [112, 23, 34, 94, 335, 66];

const addieren = function (array) {
    let addiere = 0;
    array.forEach(element => {
        addiere += element;
        console.log(addiere);
    });
};
const subtrahieren = function (array) {
    let addiere = 0;
    array.forEach(element => {
        addiere -= element;
        console.log(addiere);
    });
};
const multiplizieren = function (array) {
    let addiere = 0;
    array.forEach(element => {
        addiere === 0 ? addiere = element : addiere *= element;
        console.log(addiere);
    });
};
const dividieren = function (array) {
    let addiere = 0;
    array.forEach(element => {
        addiere === 0 ? addiere = element : addiere /= element;
        console.log(addiere);
    });
};
// const addieren = function (a,b,c) { 
//     console.log(a + b + c);
// };

// addieren(mein_zahlen_array[0], mein_zahlen_array[1], mein_zahlen_array[2]);

// addieren(...mein_zahlen_array);

let kleines_array = [55, 30, 12, 3];

//let grosses_array = [kleines_array[0],kleines_array[1],kleines_array[2],kleines_array[3], 25, 10, 5, 45, 15];
let grosses_array = [...kleines_array, 25, 10, 5, 45, 15];
console.log(`kleines Array: ${kleines_array} grosses Array: ${grosses_array}`);
console.log(...kleines_array, ...grosses_array)

addieren(grosses_array)
subtrahieren(grosses_array)
multiplizieren(grosses_array)
dividieren(grosses_array)


let mein_objekt_klein = {
    vorname: `Laura`,
    nachname: `Mustermann`,
    alter: `20`
};

let mein_objekt_gross = {
    ...mein_objekt_klein,
    geschlecht: `Weiblich`,
    beruf: `Hausfrau`,
};

console.log(mein_objekt_gross);

let mein_datums_array = [1985,7,5];
// let datum = new Date(mein_datums_array[0],mein_datums_array[1],mein_datums_array[2]);
let datum = new Date(...mein_datums_array);

console.log(datum)

