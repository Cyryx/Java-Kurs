"use strict";

let mein_objekt = {
    vorname: `Laura`,
    nachname: `Mustermann`,
    alter: `20`,
};
/* 
//so wird es NICHT verwendet

for (let e in mein_objekt) {
    console.log(mein_objekt[e]);
} 

//////////
/// console.log('**********Object.entries(mein_objekt) * array/**********');
let paare = Object.entries(mein_objekt);
for (let paar of paare) {
    console.log(paar);
} 
//////////Eigenschaften ausgeben

//console.log('**********Object.keys(mein_objekt)*array[e]/**********');
let eigenschaften = Object.keys(mein_objekt);

for (let e of eigenschaften) {
    console.log(e);
}
console.log('********************');

eigenschaften.forEach(e => {
    console.log(e);
});
console.log('********************');

for (let e = 0; e < eigenschaften.length; e++) {
    console.log(eigenschaften[e]);
}

//////////Werte ausgeben
//console.log('**********Object.values(mein_objekt) * array[e][w]/**********'); 

let werte = Object.values(mein_objekt);
console.log(werte);
for (let w of werte) {
    console.log(w);
}
console.log('********************');
werte.forEach(w => {
    console.log(w);
});
console.log('********************');

for (let w = 0; w < werte.length; w++) {
    console.log(werte[w]);

}
 */

let array_ausgeben = function () {
    console.log('**********/Object.entries(mein_objekt)*array/**********');

    let paare = Object.entries(mein_objekt);
    for (let paar of paare) {
        console.log(paar);
    }
}

let array_eigenschaft_ausgeben = function () {
    console.log('**********/Object.keys(mein_objekt)*array[e]/**********');

    let eigenschaften = Object.keys(mein_objekt);

    for (let e of eigenschaften) {
        console.log(e);
    }

    eigenschaften.forEach(e => {
        console.log(e);
    });

    for (let e = 0; e < eigenschaften.length; e++) {
        console.log(eigenschaften[e]);
    }
}

let array_werte_ausgeben = function () {
    console.log('**********/Object.values(mein_objekt)*array[e][w]/**********');

    let werte = Object.values(mein_objekt);
    console.log(werte);

    for (let w of werte) {
        console.log(w);
    }

    werte.forEach(w => {
        console.log(w);
    });

    for (let w = 0; w < werte.length; w++) {
        console.log(werte[w]);

    }
}

let funktions_ausgabe = function () {
    console.log('Array ausgeben');
    array_ausgeben();
    console.log('Array Eigenschaften ausgeben');
    array_eigenschaft_ausgeben();
    console.log('Array Werte ausgeben');
    array_werte_ausgeben();
}

funktions_ausgabe();

