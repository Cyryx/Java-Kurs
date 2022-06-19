"use strict";

const pizza = {
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
pizza = {};
pizza = "Geht nicht";

console.log(pizza);