"use strict";
let min = 1,
    datum_tag_min = 10,
    datum_monat_min = 10;
let max = 10000,
    datum_tag_max = 30,
    datum_monat_max = 12;
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
                datum: prompt("Datum (jjjj-mm-tt):",
                    `2020-${Math.floor(Math.random() * (datum_monat_max - datum_monat_min + 1)) + datum_monat_min}-${Math.floor(Math.random() * (datum_tag_max - datum_tag_min + 1)) + datum_tag_min}`
                )
            }
        )

    },

    eintraege_sortieren() {
        this.eintraege.sort(function (a, b) {
            if (a.datum > b.datum) {
                return -1;
            } else if (a.datum < b.datum) {
                return 1;
            } else {
                return 0;
            }
        })
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
            this.eintraege_sortieren();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag = confirm("Eintrag hinzufügen?");
        }

    }

};



haushaltsbuch.eintrag_hinzufuegen();

console.log(haushaltsbuch);