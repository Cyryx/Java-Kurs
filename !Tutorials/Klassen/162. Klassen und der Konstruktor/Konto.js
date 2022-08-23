"use strict";


//     iban: "DE6206752564419854",
//     inhaber: ["Max Mustermann"],
//     saldo: 3500,
//     aktiv: true,
//     einzahlen(einzahlung) {
//         this.saldo += einzahlung;
//     },
//     abheben(auszahlung) {
//         this.saldo -= auszahlung;
//     },
//     kontostand_abfragen() {
//         return this.saldo;
//     }
class Konto {

    constructor(iban, inhaber, einzahlung) {
        this.iban = iban;
        this.inhaber = [inhaber];
        this.saldo = einzahlung;
        this.aktiv = true;
    }

    einzahlen(einzahlung) {
        this.saldo += einzahlung;
    }

    abheben(auszahlung) {
        this.saldo -= auszahlung;
    }

    konstand_abfragen() {
        return this.saldo;
    }
}