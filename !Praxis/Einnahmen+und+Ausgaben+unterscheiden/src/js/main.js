"use strict";
let min = 1,
    datum_tag_min = 5,
    datum_monat_min = 8,
    datum_jahr_min = 1985;

let max = 31,
    datum_tag_max = 31,
    datum_monat_max = 12,
    datum_jahr_max = 2022;

let typ = ["Ausgabe", "Einnahme"]

let clear_console = true;

const haushaltsbuch = {

    gesamtbilanz: new Map(),
    eintraege: [],
    fehler: [],

    eintrag_erfassen() { //DEMO
        //Daten erfassen
        let neuer_eintrag = new Map();

        let zufallswert_typ = Math.floor(Math.random() * (1 - 0 + 1) + 0);
        let zufallswert_betrag = Math.random() * (10000 - 0 + 1) + 0;

        neuer_eintrag.set("titel", this.titel_Verarbeiten(""));//promt("Titel:").trim();
        neuer_eintrag.set(`typ`, this.typ_Verarbeiten(typ[zufallswert_typ]));//prompt(Einnahme / Ausgabe);
        neuer_eintrag.set(`betrag`, /* this.betrag_Verarbeiten( */zufallswert_betrag);//zufallswert_betrag);
        neuer_eintrag.set(`datum`, this.datum_Verarbeiten(" 2.2.2002")/* prompt("Datum (tt.mm.jjjj):").trim() */);
        neuer_eintrag.set(`timestamp`, Date.now());
        if (this.fehler.length === 0) {
            this.eintraege.push(neuer_eintrag);
        } else {
            console.log(`%c Folgende Fehler wurden gefunden:`, 'background: #222; color: red');
            this.fehler.forEach(function (fehler) {
                console.log(`%c ${fehler}`, 'background: #222; color: red');
            })
        };
    },

    fehler_ausgeben() {

    },

    titel_Verarbeiten(titel) {
        titel = titel.trim();
        if (this.titel_validieren(titel)) {
            return titel;
        } else { this.fehler.push(`Kein Titel eingegeben!`); }
    },

    titel_validieren(titel) {
        if (titel !== "") {
            return true;
        } else { return false; }
    },

    typ_Verarbeiten(typ) {
        typ = typ.trim().toLowerCase();
        if (this.titel_validieren(typ)) {
            return typ;
        } else {
            this.fehler.push(`Falschen Typ eingegeben: ${typ}!`);
        }
    },

    typ_validieren(typ) {
        if (typ !== /^(?:einnahme|ausgabe)$/) {
            return true;
        } else {
            return false;
        }
    },

    betrag_Verarbeiten(betrag) {
        betrag = betrag.trim();
        if (this.betrag_validieren(betrag)) {
            return (parseFloat(betrag.replace(",", ".")) * 100);
        } else {
            this.fehler.pushconsole.log(`Ungültiger Betrag: ${betrag}!`);
        }
        // Bsp. .replace("23,64") -> "23.64" -> .parseFloat(23.64) -> 23.64*100 -> 2364
    },

    betrag_validieren(betrag) {
        if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
            return true;
        } else {
            return false;
        }
    },

    datum_Verarbeiten(datum) {
        datum = datum.trim();
        if (this.datum_validieren(datum)) {
            return new Date(`${datum} 00:00:00`);
        } else {
            this.fehler.push(`Ungültiges Datumformat: ${datum}!`);
        }
    },

    datum_validieren(datum) {
        if (datum.match(/^(0?[1-9]|[12]\d|30|31)[^\w\d:](0?[1-9]|1[0-2])[^\w\d:](\d{4}|\d{2})$/) !== null) {
            return true;
        } else {
            return false;
        }
    },

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

    eintraege_ausgeben() {//Demo
        if (this.clear_console == true) {
            console.clear();
        }
        this.eintraege.forEach(function (eintrag) {
            console.log(
                `Titel: ${eintrag.get("titel")}\n`
                + `Typ: ${eintrag.get("typ")}\n`
                + `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)}€\n`
                + `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric"
                })}\n`,
                `Timestamp: ${eintrag.get("timestamp")}`,/* ${Date(eintrag.get("timestamp"))}`, */
            );
        });
    },

    gesamtbilanz_erstellen() {//Demo
        //Einnahme/Ausgabe berechnen
        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("bilanz", 0);

        this.eintraege.forEach(function (eintrag) {
            switch (eintrag.get("typ")) {
                case "einnahme":
                    neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
                    break;
                case "ausgabe":
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

    gesamtbilanz_ausgeben() {//Demo
        // Gesamtbilanz ausgaben
        console.log(
            `Einnahmen: ${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2)} €\n`
            + `Ausgaben: ${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2)} €\n`
            + `Bilanz: ${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2)} €\n`
            + `Bilanz ist positiv: ${(this.gesamtbilanz.get("bilanz") / 100) >= 0}\n`
        )
    },

    eintrag_hinzufuegen() {
        let weiterer_eintrag = true;

        while (weiterer_eintrag) {
            weiterer_eintrag = /* confirm("Eintrag hinzufügen?"); */prompt("Wieviele Einträge hinzufügen?");
            for (let i = 0; i < weiterer_eintrag; i++) {
                if (i < weiterer_eintrag) {
                    if (this.fehler.length === 0) {
                        this.eintrag_erfassen();
                        this.eintraege_sortieren();
                        this.eintraege_ausgeben();
                        this.gesamtbilanz_erstellen();
                        this.gesamtbilanz_ausgeben();
                    } else { this.fehler = []; }
                } else {
                    return false;
                }
            }
        }
    }
};

haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);