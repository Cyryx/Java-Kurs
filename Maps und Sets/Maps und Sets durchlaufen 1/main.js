"use strict";

//Map
let meine_map = new Map();
meine_map.set(0, "Wert der Eigenschaft 0");
meine_map.set(1, "Wert der Eigenschaft 1");
meine_map.set(2, "Wert der Eigenschaft 2");
meine_map.set(3, "Wert der Eigenschaft 3");
meine_map.set(4, "Wert der Eigenschaft 4");
meine_map.set(5, "Wert der Eigenschaft 5");

//console.log(meine_map);
/* 
meine_map.forEach(function (wert, eigenschaft,map) { 
    console.log(wert);
    console.log(eigenschaft);
    //console.log(map);
});
 */
for (let paar of meine_map) {
    console.log(paar);

}

for (let [eigenschaft, wert] of meine_map) {
    console.log(eigenschaft);
    console.log(wert);
}

//Set
let mein_set = new Set();

mein_set.add(5);
mein_set.add(4);
mein_set.add(3);
mein_set.add(2);
mein_set.add(1);
mein_set.add(0);

//console.log(mein_set);
console.log('********************');
/* 
mein_set.forEach(function (wert, NULL,set) { 
    console.log(wert);
    //console.log(wert2);
    //console.log(set);
});
 */
for (let wert of mein_set) {
    console.log(wert);
}