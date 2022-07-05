"use strict";

//Set
let mein_set = new Set();

mein_set.add(5);
mein_set.add(4);
mein_set.add(3);
mein_set.add(2);
mein_set.add(1);
mein_set.add(0);

for (let wert of mein_set.values()) {
    console.log(wert);
};

// console.log(mein_set.entries());
// console.log(mein_set.keys());
// console.log(mein_set.values());

//Map
let meine_map = new Map();
meine_map.set(0, "Wert der Eigenschaft 0");
meine_map.set(1, "Wert der Eigenschaft 1");
meine_map.set(2, "Wert der Eigenschaft 2");
meine_map.set(3, "Wert der Eigenschaft 3");
meine_map.set(4, "Wert der Eigenschaft 4");
meine_map.set(5, "Wert der Eigenschaft 5");

/* for (let paar of meine_map.entries()) {
    console.log(paar);
} */
console.log('********************');

for (let [eigenschaft,wert] of meine_map.entries()) {
    console.log(eigenschaft);
    console.log(wert);
};

for (let eigenschaft of meine_map.keys()) {
    console.log(eigenschaft);
};

for (let wert of meine_map.values()) {
    console.log(wert);
};

// console.log(meine_map.entries());
// console.log(meine_map.keys());
// console.log(meine_map.values());
