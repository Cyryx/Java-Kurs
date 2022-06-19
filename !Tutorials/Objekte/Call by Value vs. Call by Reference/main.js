"use strict";

console.log();

let meine_variable = "Jens";

let mein_objekt = {
    zahl:5000
};


const meine_funktion = function(v,o){
    v = "Dennis",
    o.zahl =2500
};

meine_funktion(meine_variable,mein_objekt);

//console.log(meine_variable);
//console.log(mein_objekt.zahl);

// call by value (Übergabe als Wert) gilt für primitive datentypen (String, Number, Boolean)
// Call by reference (Übergabe als Verweis/Rückverweis) gilt für komplexere Datentypen (Object, Funktionen, Arrays)


let konto ={
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
console.log(konto.kontostand);

const einzahlen = function(k,betrag){
    k.kontostand += betrag;
    //k.kontostand = k.kontostand + betrag;
}

const auszahlung = function(k,betrag){
    k.kontostand -= betrag;
    //k.kontostand = k.kontostand - betrag;
}

einzahlen(konto,500);
console.log(konto.kontostand);

auszahlung(konto,5000);
console.log(konto.kontostand);