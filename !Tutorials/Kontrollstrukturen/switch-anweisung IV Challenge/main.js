"use strict";

let produkt = "Schokol2ade";

switch (produkt) {
    case "Brot":
        console.log(`${produkt} kostet 1,89€`);
        break;

    case "Milch":
    case "Apfel":
        console.log(`${produkt} kostet 0,79€`);
        break;
        
    case "Schokolade":
    case "Chips":
        console.log(`${produkt} kostet 0,99€`);
        break;

    default:
        console.log(`${produkt} wurde nicht gefunden!`);
        break;
}