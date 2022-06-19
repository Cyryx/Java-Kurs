"use strict";

let konto_1 ={
    iban:"DE534325465432",
    bic:"FDGRGHHFDS",
    inhaber:{ 
        titel:"Frau",
        vorname : "Maria",
        nachname : "Mustermann",
        alter : 20,
        geschlecht: "männlich"
    },
    kontostand:1000,
    aktiv:true
};

let konto_2={
    iban:"DE234325323152",
    bic:"RGREVDASH",
    inhaber:{
        titel: "Herr",
        vorname:"Jens",
        nachname:"Deubach",
        geschlacht:"männlich",
        alter:36
    },
    kontostand:10000,
    aktiv:true
};

const kontostand_ausgeben = function(a){
 console.log(`${a.inhaber.vorname} ${a.inhaber.nachname} hat ${a.kontostand}€ auf dem Konto.`);
};

kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);


const ueberweisung = function(absender,empfaenger,betrag){
    absender.ausgabe= betrag;
    absender.kontostand =absender.kontostand - absender.ausgabe;
    console.log(`Hallo ${absender.inhaber.titel} ${absender.inhaber.vorname} ${absender.inhaber.nachname} 
Ihre Überweisung an das Konto von ${empfaenger.inhaber.titel} ${empfaenger.inhaber.vorname} ${empfaenger.inhaber.nachname} mit der 

IBAN: ${empfaenger.iban} 
BIC: ${empfaenger.bic}
Betrag: ${absender.ausgabe}€ 

wurde ausgeführt. 
Ihr Kontostand beträgt ${absender.kontostand}€.`)
}
ueberweisung(konto_1,konto_2,999);