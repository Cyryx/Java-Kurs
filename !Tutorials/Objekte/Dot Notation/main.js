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
    kontostand:50300,
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

let wert_1 = konto_1.iban;

//console.log(wert_1);

//console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat ${konto_1.kontostand} € auf seinem Konto.`);

//Eigenschaften setzen (Dot notation)

konto_1.abhebelimit = 1000;

//console.log(konto_1);

//Werte setzen bzw verändern

konto_1.kontostand = 50000;
//konto_1.kontostand = konto_1.kontostand - 3000;
//konto_1.kontostand -= 3000;

console.log(konto_1);


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

auto.modell = "Golf 7 Variant";
auto.ps= 235;
console.log(`Ein ${auto.marke} ${auto.modell} hat ${auto.ps}PS.`)