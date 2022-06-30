"use strict";

/*
let inhaber_1 = {
 vorname : "Max",
 nachname : "Mustermann",
 alter : 20,
 geschlecht: "männlich"
};

console.log(inhaber_1);

let inhaber_2 ={
    vorname:"Jens",
    nachname:"Deubach",
    geschlacht:"männlich",
    alter:36
};

console.log(inhaber_2);
*/

let konto_1 = {
    iban: "DE534325465432",
    bic: "FDGRGHHFDS",
    inhaber: {
        vorname: "Max",
        nachname: "Mustermann",
        alter: 20,
        geschlecht: "männlich"
    },
    kontostand: 5000,
    aktiv: true
};

console.log(konto_1);

let konto_2 = {
    iban: "DE234325323152",
    bic: "RGREVDASH",
    inhaber: {
        vorname: "Jens",
        nachname: "Deubach",
        geschlacht: "männlich",
        alter: 36
    },
    kontostand: 100,
    aktiv: true
};

console.log(konto_2);

let auto = {
    marke: "VW",
    modell: "Passat",
    kraftstoffart: "Diesel",
    kilometerstand: 263000,
    Ausstattung: {
        massagesitz: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: true,
        panoramadach: false
    },
    zustand: "gebraucht",
    preis: 11000
};

console.log(auto);


/* let konto_1 ={
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


let iban: "DE534325465432";
let bic: "FDGRGHHFDS";
let vorname: "Max";
let nachname: "Mustermann";
let alter: 20;
let geschlecht: "männlich";

let kontostand: 5000;
let aktiv: true; */





document.getElementById("Demo").innerHTML = "Absatz wurde geändert ..";




