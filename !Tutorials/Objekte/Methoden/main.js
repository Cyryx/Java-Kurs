"use strict";

let konto = {
    iban: "DE534325465432",
    bic: "FDGRGHHFDS",
    inhaber: {
        vorname: "Max",
        nachname: "Mustermann",
        alter: 20,
        geschlecht: "männlich"
    },
    kontostand: 5000,
    aktiv: true,
    einzahlen(einzahlen) {
        this.kontostand += einzahlen;
    },
    abheben(abheben) {
        this.kontostand -= abheben;

    }
};

konto.einzahlen(150)
//console.log(konto.kontostand);

//challenge

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18,
    verarbeiten() {
        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            b: `Hallo ${this.vorname} ${this.nachname}!`
        }
    }
};


console.log(person.verarbeiten());