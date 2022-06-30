"use strict";

let pizza = {
    zutaten:"Teig",
    belag:"tomaten",
    preis:5.99,
    lieferart:"zu fuss",
    zusatzstoffe:"nichts"
};
//geht
pizza.zutaten ="Sauce";
delete pizza.preis;

//geht nicht (konstante)
//pizza = {};
//pizza = "Geht nicht";

let belag = "tomaten";
let preis = 5.99;
let zutaten ="teig";



console.log(pizza.belag);