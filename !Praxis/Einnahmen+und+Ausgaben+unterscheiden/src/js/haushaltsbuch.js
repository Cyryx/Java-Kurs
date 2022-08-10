"use strict";
let lorem = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
    'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
    'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
    'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
    'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
    'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
    'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
    'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
    'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
    'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
    'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
    'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
    'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
    'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam']
let typ = ["Ausgabe", "Einnahme"]

const haushaltsbuch = {

    gesamtbilanz: new Map(),
    eintraege: [],
    fehler: [],
    //
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    //
    eintrag_erfassen() {
        let zufallswert_typ = Math.floor(Math.random() * (1 - 0 + 1) + 0);
        let zufallswert_betrag = (Math.random() * (10000 - 0 + 1) + 0);

        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", /* this.titel_verarbeiten( */lorem[this.getRandomIntInclusive(0, lorem.length)]);//prompt("Titel:")));
        neuer_eintrag.set("typ", this.typ_verarbeiten(typ[zufallswert_typ]));//prompt("Typ (Einnahme oder Ausgabe):")));
        neuer_eintrag.set("betrag", this.betrag_verarbeiten(zufallswert_betrag.toFixed(2)));//prompt("Betrag (in Euro, ohne €-Zeichen):")));
        neuer_eintrag.set("datum", this.datum_verarbeiten(`${this.getRandomIntInclusive(2000, 2050)}-0${this.getRandomIntInclusive(1, 9)}-${this.getRandomIntInclusive(10, 30)}`));//prompt("Datum (jjjj-mm-tt):")));
        neuer_eintrag.set("timestamp", Date.now());
        if (this.fehler.length === 0) {
            this.eintraege.push(neuer_eintrag);
        } else {
            console.log("Folgende Fehler wurden gefunden:")
            this.fehler.forEach(fehler => console.log(fehler));
        }
    },

    titel_verarbeiten(titel) {
        titel = titel.trim();
        if (this.titel_validieren(titel)) {
            return titel;
        } else {
            this.fehler.push("Kein Titel angegeben.");
        }
    },

    titel_validieren(titel) {
        if (titel !== "") {
            return true;
        } else {
            return false;
        }
    },

    typ_verarbeiten(typ) {
        typ = typ.trim().toLowerCase();
        if (this.typ_validieren(typ)) {
            return typ;
        } else {
            this.fehler.push(`Ungültiger Eintrags-Typ: "${typ}".`);
        }
    },

    typ_validieren(typ) {
        if (typ.match(/^(?:einnahme|ausgabe)$/) !== null) {
            return true;
        } else {
            return false;
        }
    },

    betrag_verarbeiten(betrag) {
        betrag = betrag.trim();
        if (this.betrag_validieren(betrag)) {
            return parseFloat(betrag.replace(",", ".")) * 100;
        } else {
            this.fehler.push(`Ungültiger Betrag: ${betrag} €.`);
        }
    },

    betrag_validieren(betrag) {
        if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
            return true;
        } else {
            return false;
        }
    },

    datum_verarbeiten(datum) {
        datum = datum.trim();
        if (this.datum_validieren(datum)) {
            return new Date(`${datum} 00:00:00`);
        } else {
            this.fehler.push(`Ungültiges Datumsformat: "${datum}".`);
        }
    },

    datum_validieren(datum) {
        if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
            return true;
        } else {
            return false;
        }
    },

    eintraege_sortieren() {
        this.eintraege.sort((eintrag_a, eintrag_b) => {
            if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
                return -1;
            } else if (eintrag_a.get("datum") < eintrag_b.get("datum")) {
                return 1;
            } else {
                return 0;
            }
        });
    },

    html_eintrag_generieren(eintrag) {

        let listenpunkt = document.createElement("li");
        if (eintrag.get("typ") == "einnahme") {
            listenpunkt.setAttribute("class", "einnahme");
        } else if (eintrag.get("typ") === "ausgabe") {
            listenpunkt.setAttribute("class", "ausgabe");
        }
        listenpunkt.setAttribute("data-timestamp", eintrag.get("timestamp"));

        let datum = document.createElement("span");
        datum.setAttribute("class", "datum");
        datum.textContent = eintrag.get("datum").toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        listenpunkt.insertAdjacentElement("afterbegin", datum);

        let titel = document.createElement("span");
        titel.setAttribute("class", "titel");
        titel.textContent = eintrag.get("titel");
        datum.insertAdjacentElement("afterend", titel);

        let betrag = document.createElement("span");
        betrag.setAttribute("class", "betrag");
        betrag.textContent = `${(eintrag.get("betrag") / 100).toFixed(2).replace(/\./, ",")} €`;
        titel.insertAdjacentElement("afterend", betrag);

        let button = document.createElement("button");
        button.setAttribute("class", "entfernen-button");
        betrag.insertAdjacentElement("afterend", button);

        let icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-trash");
        button.insertAdjacentElement("afterbegin", icon);

        return listenpunkt;

    },

    eintraege_anzeigen() {

        document.querySelectorAll(".monatsliste ul").forEach(eintragsliste => eintragsliste.remove());

        let eintragsliste = document.createElement("ul");
        this.eintraege.forEach((e) => eintragsliste.insertAdjacentElement("beforeend", this.html_eintrag_generieren(e)));

        document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", eintragsliste);

    },

    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("bilanz", 0);
        this.eintraege.forEach(eintrag => {
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

    html_gesamtbilanz_generieren() {
        // <aside id="gesamtbilanz">
        let gesamtbilanz = document.createElement("aside");
        gesamtbilanz.setAttribute("id", "gesamtbilanz");

        //<h1>Gesamtbilanz</h1>
        let h1 = document.createElement("h1");
        h1.textContent = "Gesamtbilanz";
        gesamtbilanz.insertAdjacentElement("afterbegin", h1);

        //Einnahme generieren
        //<div class="gesamtbilanz-zeile einnahmen"><span>Einnahmen:</span><span>4228,74€</span></div>
        let div_einnahme = document.createElement("div");
        div_einnahme.setAttribute("class", "gesamtbilanz-zeile einnahmen");
        let span_einnahme_name = document.createElement("span");
        span_einnahme_name.textContent = "Einnahme:";
        div_einnahme.insertAdjacentElement("afterbegin", span_einnahme_name);
        let span_einnahme_summe = document.createElement("span");
        span_einnahme_summe.textContent = `${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(2).replace(/\./, ",")} €`;
        div_einnahme.insertAdjacentElement("beforeend", span_einnahme_summe);
        gesamtbilanz.insertAdjacentElement("beforeend", div_einnahme);

        //Ausgabe generieren
        //<div class="gesamtbilanz-zeile ausgaben"><span>Ausgaben:</span><span>2988,88€</span></div>
        let div_ausgabe = document.createElement("div");
        div_ausgabe.setAttribute("class", "gesamtbilanz-zeile ausgaben");
        let span_ausgabe_name = document.createElement("span");
        span_ausgabe_name.textContent = "Ausgabe:";
        div_ausgabe.insertAdjacentElement("afterbegin", span_ausgabe_name);
        let span_ausgabe_summe = document.createElement("span");
        span_ausgabe_summe.textContent = `${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2).replace(/\./, ",")} €`;
        div_ausgabe.insertAdjacentElement("beforeend", span_ausgabe_summe);
        gesamtbilanz.insertAdjacentElement("beforeend", div_ausgabe);

        //Gesamtbilanz generieren
        //<div class="gesamtbilanz-zeile bilanz"><span>Bilanz:</span><span class="positiv">1239,86€</span></div>
        let div_gesamtbilanz = document.createElement("div");
        div_gesamtbilanz.setAttribute("class", "gesamtbilanz-zeile bilanz");

        let span_gesamtbilanz_name = document.createElement("span");
        span_gesamtbilanz_name.textContent = "Bilanz:";
        div_gesamtbilanz.insertAdjacentElement("afterbegin", span_gesamtbilanz_name);

        let span_gesamtbilanz_summe = document.createElement("span");
        if (this.gesamtbilanz.get("bilanz") >= 0) {
            span_gesamtbilanz_summe.setAttribute("class", "positiv")
        } else if (this.gesamtbilanz.get("bilanz") < 0) {
            span_gesamtbilanz_summe.setAttribute("class", "negativ")
        }

        span_gesamtbilanz_summe.textContent = `${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2).replace(/\./, ",")} €`;
        div_gesamtbilanz.insertAdjacentElement("beforeend", span_gesamtbilanz_summe);

        gesamtbilanz.insertAdjacentElement("beforeend", div_gesamtbilanz);

        return gesamtbilanz;
    },

    gesamtbilanz_anzeigen() {
        document.querySelectorAll("#gesamtbilanz").forEach(gesamtbilanz => gesamtbilanz.remove());
        document.querySelector("body").insertAdjacentElement("beforeend", this.html_gesamtbilanz_generieren())
    },

    eintrag_hinzufuegen() {
        let weiterer_eintrag = true;
        while (weiterer_eintrag ) {
            weiterer_eintrag = /* confirm("Eintrag hinzufügen?"); */prompt("Wieviele Einträge hinzufügen?");

            for (let i = 0; i < weiterer_eintrag; i++) {
                if (i < weiterer_eintrag) {
                    if (this.fehler.length === 0) {
                        this.eintrag_erfassen();
                        this.eintraege_sortieren();
                        this.eintraege_anzeigen();
                        this.gesamtbilanz_erstellen();
                        this.gesamtbilanz_anzeigen();
                    } else { this.fehler = []; }
                } else {
                    return false;
                }
            }
        }
    }
};
