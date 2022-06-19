"use strict";

let auto = {
    marke:"BMW"
};

//Eigenschaft ändern
auto.marke="VOLKSWAGEN";

//Eigenschaften hinzufügen 
auto.modell = "Passat";
auto.ps = "150";
auto["farbe"] ="Silber";

//Eigenschaften entfernen 
delete auto.farbe;
console.log(auto);
