"use strict";

let mein_set = new Set();

mein_set.add("Test");
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add([]);
mein_set.add(function () { });
mein_set.add(function () { });
mein_set.add({});
mein_set.add({});

console.log(mein_set.has("Test"));//true
console.log(mein_set.has("Tester"));//false
console.log(mein_set.has({ }));//false
console.log(mein_set.has([]));//false
console.log(mein_set.has(7+6));//true

mein_set.delete("Test");
//mein_set.clear();
console.log(`Set hat ${mein_set.size} Werte.`);

console.log(mein_set);