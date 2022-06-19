"use strict";

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

    eintrag_erfassen() {
        //Daten erfassen
        this.neuer_eintrag.titel = prompt("Titel:");
        this.neuer_eintrag.typ = prompt("Typ (Einnahme oder Ausgabe):");
        this.neuer_eintrag.betrag = parseInt(prompt("Betrag (in Cent):"));
        this.neuer_eintrag.datum = prompt("Datum (jjjj-mm-tt):");
    },

    eintrag_ausgeben() {
        console.log  (`
        Titel: ${this.neuer_eintrag.titel} 
        Typ: ${this.neuer_eintrag.typ} 
        Betrag: ${this.neuer_eintrag.betrag} ct 
        Datum: ${this.neuer_eintrag.datum}`
        );
    },

    eintrag_mit_gesamtbilanz_verrechnen() {
        //Einnahme/Ausgabe berechnen
        if (this.neuer_eintrag.typ === "Einnahme") {
            this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
            this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
        } else if (this.neuer_eintrag.typ === "Ausgabe") {
            this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
            this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
        } else {
            console.log  (`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt.`);
        }
    },

    gesamtbilanz_ausgeben() {
        // Gesamtbilanz ausgaben
        console.log (`Einnahmen: ${this.gesamtbilanz.einnahmen} ct 
        Ausgaben: ${this.gesamtbilanz.ausgaben} ct 
        Bilanz: ${this.gesamtbilanz.bilanz} ct 
        Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
        )
    },

    eintrag_hinzufuegen(){
        this.eintrag_erfassen();
        this.eintrag_ausgeben();
        this.eintrag_mit_gesamtbilanz_verrechnen();
        this.gesamtbilanz_ausgeben();
    },
};



haushaltsbuch.eintrag_hinzufuegen();
//haushaltsbuch.eintrag_hinzufuegen();

/* const eintrag_hinzufuegen = function () {
    eintrag_erfassen();
    eintrag_ausgeben(titel, typ, betrag, datum);
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    gesamtbilanz_ausgeben(bilanz, einnahmen, ausgaben);
}; */

/* eintrag_hinzufuegen(); */

/* /* // Gesamtbilanz anlegen
let //einnahmen = 0,
    //ausgaben = 0,
    //bilanz = 0,
    titel,
    typ,
    betrag,
    datum; 
const eintrag_erfassen = function () {
    //Daten erfassen
    titel = prompt("Titel:");
    typ = prompt("Typ (Einnahme oder Ausgabe):");
    betrag = parseInt(prompt("Betrag (in Cent):"));
    datum = prompt("Datum (jjjj-mm-tt):");
}; 

const eintrag_ausgeben = function (ptitel, ptyp, pbetrag, pdatum) {
    console.log(`
Titel: ${ptitel}
Typ: ${ptyp}
Betrag: ${pbetrag} ct
Datum: ${pdatum}`
    );
};

const eintrag_mit_gesamtbilanz_verrechnen = function (ptyp, pbetrag) {
    //Einnahme/Ausgabe berechnen
    if (ptyp === "Einnahme") {
        einnahmen = einnahmen + pbetrag;
        bilanz = bilanz + pbetrag;
    } else if (ptyp === "Ausgabe") {
        ausgaben = ausgaben + pbetrag;
        bilanz = bilanz - pbetrag;
    } else {
        console.log(`Der Typ "${ptyp}" ist nicht bekannt.`);
    }
};

const gesamtbilanz_ausgeben = function (pbilanz, peinnahmen, pausgaben) {
    // Gesamtbilanz ausgaben
    console.log(`
Einnahmen: ${peinnahmen} ct
Ausgaben: ${pausgaben} ct
Bilanz: ${pbilanz} ct
Bilanz ist positiv: ${bilanz >= 0}`
    );
};
*/
