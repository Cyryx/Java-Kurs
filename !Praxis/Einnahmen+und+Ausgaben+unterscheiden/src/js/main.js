"use strict";
let min = 1,
    datum_tag_min = 10,
    datum_monat_min = 10,
    datum_jahr_min = 10;

let max = 10,
    datum_tag_max = 30,
    datum_monat_max = 12,
    datum_jahr_max = 99;

let typ = ["Ausgabe", "Einnahme"]
11
const haushaltsbuch = {

    gesamtbilanz: new Map(),
    eintraege: [],

    eintrag_erfassen() { //DEMO
        //Daten erfassen
        let neuer_eintrag = new Map();

        let zufallswert = Math.floor(Math.random() * (1 - 0 + 1) + 0);

        neuer_eintrag.set("titel", "Test");
        neuer_eintrag.set(`typ`, typ[zufallswert]);
        neuer_eintrag.set(`betrag`, this.betrag_Verarbeiten(prompt("Betrag")));
        neuer_eintrag.set(`datum`, new Date(prompt("Datum (tt.mm.jjjj):")));
        neuer_eintrag.set(`timestamp`, Date.now());
        //neuer_eintrag.set(`datum`, `20${Math.floor(Math.random() * (datum_jahr_max - datum_jahr_min + 1)) + datum_jahr_min}-${Math.floor(Math.random() * (datum_monat_max - datum_monat_min + 1)) + datum_monat_min}-${Math.floor(Math.random() * (datum_tag_max - datum_tag_min + 1)) + datum_tag_min}`);
        this.eintraege.push(neuer_eintrag);
    },

    betrag_Verarbeiten(betrag) {
        // Bsp. .replace("23,64") -> "23.64" -> .parseFloat(23.64) -> 23.64*100 -> 2364
        return (parseFloat(betrag.replace(",", ".")) * 100);
    },
    /* eintrag_erfassen() { //Original
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

    }, */


    eintraege_sortieren() {//Demo
        this.eintraege.sort(function (a, b) {
            if (a.get("datum") > b.get("datum")) {
                return -1;
            } else if (a.get("datum") < b.get("datum")) {
                return 1;
            } else {
                return 0;
            }
        })
    },
    /*eintraege_sortieren() {//Original
        this.eintraege.sort(function (a, b) {
            if (a.datum > b.datum) {
                return -1;
            } else if (a.datum < b.datum) {
                return 1;
            } else {
                return 0;
            }
        })
    }, */

    eintraege_ausgeben() {//Demo
        console.clear();
        this.eintraege.forEach(function (eintrag) {
            console.log(
                `Titel: ${eintrag.get("titel")}\n`
                + `Typ: ${eintrag.get("typ")}\n`
                + `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)}€\n`
                + `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "numeric",
                    weekday: "long",
                    day: "numeric"
                })}\n`,
                `Timestamp: ${Date(eintrag.get("timestamp"))}`,
            );
        });
    },
    /*     eintraege_ausgeben() {//Original
            console.clear();
            this.eintraege.forEach(function (eintrag) {
                console.log(
                    `Titel: ${eintrag.titel}\n`
                    + `Typ: ${eintrag.typ}\n`
                    + `Betrag: ${eintrag.betrag} ct\n`
                    + `Datum: ${eintrag.datum}\n`
                );
            });
        }, */

    gesamtbilanz_erstellen() {//Demo
        //Einnahme/Ausgabe berechnen
        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("bilanz", 0);

        this.eintraege.forEach(function (eintrag) {
            switch (eintrag.get("typ")) {
                case "Einnahme":
                    neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
                    break;
                case "Ausgabe":
                    neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"));
                    break;
                default:
                    console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt.`);
                    break;
            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    },
    /* gesamtbilanz_erstellen() {//Original
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
    }, */

    gesamtbilanz_ausgeben() {//Demo
        // Gesamtbilanz ausgaben
        console.log(
            `Einnahmen: ${(this.gesamtbilanz.get("einnahmen")/ 100).toFixed(2)} €\n`
            + `Ausgaben: ${(this.gesamtbilanz.get("ausgaben")/ 100).toFixed(2)} €\n`
            + `Bilanz: ${(this.gesamtbilanz.get("bilanz")/ 100).toFixed(2)} €\n`
            + `Bilanz ist positiv: ${(this.gesamtbilanz.get("bilanz")/ 100) >= 0}\n`
        )
    },
    /* gesamtbilanz_ausgeben() {//Original
        // Gesamtbilanz ausgaben
        console.log(
            `Einnahmen: ${this.gesamtbilanz.einnahmen} ct\n`
            + `Ausgaben: ${this.gesamtbilanz.ausgaben} ct\n`
            + `Bilanz: ${this.gesamtbilanz.bilanz} ct\n`
            + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}\n`
        )
    }, */

    eintrag_hinzufuegen() {
        let weiterer_eintrag = true;

        while (weiterer_eintrag) {
            weiterer_eintrag = confirm("Eintrag hinzufügen?");//prompt("Wieviele Einträge hinzufügen?");
            for (let i = 0; i < weiterer_eintrag; i++) {
                if (i < weiterer_eintrag) {
                    this.eintrag_erfassen();
                    this.eintraege_sortieren();
                    this.eintraege_ausgeben();
                    this.gesamtbilanz_erstellen();
                    this.gesamtbilanz_ausgeben();
                } else {
                    return false;
                }
            }
        }
    }
};

haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);