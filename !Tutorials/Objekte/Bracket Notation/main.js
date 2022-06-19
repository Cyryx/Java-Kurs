"use strict";

let konto_1 ={
    iban:"DE534325465432",
    bic:"FDGRGHHFDS",
    inhaber:{ 
        vorname : "Max",
        nachname : "Mustermann",
        alter : 20,
        geschlecht: "männlich"
    },
    kontostand:5000,
    aktiv:true
};

let konto_2={
    iban:"DE234325323152",
    bic:"RGREVDASH",
    inhaber:{
        vorname:"Jens",
        nachname:"Deubach",
        geschlacht:"männlich",
        alter:36
    },
    kontostand:100,
    aktiv:true
};


//Werte auslesen
let wert_1 = konto_1["iban"];
console.log(wert_1);

let wert_2 = konto_1["inhaber"]["vorname"];
console.log(wert_2);

//Eigenschaften setzen (Bracket notation)
konto_1["abhebelimit"]= 250;
console.log(konto_1["abhebelimit"]);

//Werte setzen bzw verändern (Bracket notation)
konto_1["kontostand"]= 2500;
console.log(konto_1["kontostand"]);

//Warum sollten wir die Brackets Notation verwenden?
let eigenschaft ="iban";
let wert_3 = konto_1[eigenschaft];
console.log(wert_3);


let auto ={
    marke:"VW",
    modell:"Passat",
    kraftstoffart:"Diesel",
    kilometerstand:263000,
    Ausstattung:{
        massagesitz:true,
        klimaanlage:true,
        sitzheizung:true,
        tempomat:true,
        panoramadach:false
    },
    zustand:"gebraucht",
    preis:11000
};

auto["ps"] = 254;
let modell = "modell";

console.log(`Ein ${auto["marke"]} ${auto[modell]} hat ${auto["ps"]}PS.`);