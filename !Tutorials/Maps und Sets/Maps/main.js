"use strict";

let meine_map = new Map();

//Setzen
meine_map.set("Test", "Wert zur Eigenschaft Test.");
meine_map.set(13, "Wert zur Eigenschaft 13");
meine_map.set([], "Wert zur Eigenschaft []")
meine_map.set(function () { }, "Wert zur Eigenschaft function (){}");
meine_map.set({}, "Wert zur Eigenschaft {}")
console.log(meine_map);

//Wiederholen
console.log(meine_map.get("Test"));
console.log(meine_map.get(13));
console.log(meine_map.get([]));
console.log(meine_map.get(function(){}));
console.log(meine_map.get({}));

//Gibt es den Map Wert
console.log(meine_map.has(13));
console.log(meine_map.has(15));
console.log(meine_map.has([]));
console.log(meine_map.has({}));


//Map löschen
meine_map.delete("Test");

//Alle Maps löschen
//meine_map.clear();

//
console.log(meine_map.size);

console.log(meine_map);
