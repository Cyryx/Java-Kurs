"use strict";
let min = 1;
let max = 10000;
let typ = ["Ausgabe", "Einnahme"]

const haushaltsbuch = {

    gesamtbilanz: {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0
    },

    neuer_eintrag: {
        titel: null,
        typ: null,
        betrag: null,
        datum: null
    },
    eintraege: [],



    eintrag_erfassen() {
        //Daten erfassen
        this.eintraege.push(
            {
                titel: prompt("Titel:", `Test`),
                typ: prompt("Typ (Einnahme oder Ausgabe):", typ[Math.floor(Math.random() * typ.length)]),
                betrag: parseInt(prompt("Betrag (in Cent):", Math.floor(Math.random() * (max - min + 1)) + min)),
                datum: prompt("Datum (jjjj-mm-tt):", `2020-02-02`)
            }
        )
    },

    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function (eintrag) {
            console.log(
                `Titel: ${eintrag.titel}\n`
                + `Typ: ${eintrag.typ}\n`
                + `Betrag: ${eintrag.betrag} ct\n`
                + `Datum: ${eintrag.datum}\n`
            );
        });
    },

    gesamtbilanz_erstellen() {
        //Einnahme/Ausgabe berechnen
        let neue_gesamtbilanz = {
            einnahmen: 0,
            ausgaben: 0,
            bilanz: 0
        };

        this.eintraege.forEach(function (eintrag) {
            switch (eintrag.typ) {
                case "Einnahme":
                    neue_gesamtbilanz.einnahmen += eintrag.betrag;
                    neue_gesamtbilanz.bilanz += eintrag.betrag;
                    break;
                case "Ausgabe":
                    neue_gesamtbilanz.ausgaben += eintrag.betrag;
                    neue_gesamtbilanz.bilanz -= eintrag.betrag;
                    break;
                default:
                    console.log(`Der Typ "${eintrag.typ}" ist nicht bekannt.`);
                    break;
            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    },

    gesamtbilanz_ausgeben() {
        // Gesamtbilanz ausgaben
        console.log(
            `Einnahmen: ${this.gesamtbilanz.einnahmen} ct\n`
            + `Ausgaben: ${this.gesamtbilanz.ausgaben} ct\n`
            + `Bilanz: ${this.gesamtbilanz.bilanz} ct\n`
            + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}\n`
        )
    },


    eintrag_hinzufuegen() {
        let weiterer_eintrag = true;

        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag = confirm("Eintrag hinzufügen?");
        }

    },
};



haushaltsbuch.eintrag_hinzufuegen();

console.log(haushaltsbuch);