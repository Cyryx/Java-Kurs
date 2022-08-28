"use strict"

class Haushaltsbuch {

    constructor() {
        this._eintraege = [];
        this._monatslistensammlung = new Monatslistensammlung();
        this._gesamtbilanz = new Gesamtbilanz();
    }

    eintrag_hinzufuegen(formulardaten) {
        let neuer_eintrag = new Eintrag(
                formulardaten.titel,
                formulardaten.typ,
                formulardaten.betrag,
                formulardaten.datum
            );
        this._eintraege.push(neuer_eintrag);
        this._eintraege_sortieren();
        this._eintraege_anzeigen();
        this._gesamtbilanz_erstellen();
        this._gesamtbilanz_anzeigen();
    }

    eintrag_entfernen(timestamp) {
        let index;
        for (let i = 0; i < this._eintraege.length; i++) {
            if (this._eintraege[i].timestamp() === parseInt(timestamp)) {
                index = i;
                break;
            }
        }
        this._eintraege.splice(index, 1);
        this._eintraege_anzeigen();
        this._gesamtbilanz_erstellen();
        this._gesamtbilanz_anzeigen();
        eingabeformular._fehlerbox_entfernen();
    }

    _eintraege_sortieren() {
        this._eintraege.sort((eintrag_a, eintrag_b) => {
            return eintrag_a.datum() > eintrag_b.datum()
                ? -1 : eintrag_a.datum() < eintrag_b.datum()
                    ? 1 : 0;
        });
    }

    _eintraege_anzeigen() {
        document.querySelectorAll(".monatsliste ul").forEach(eintragsliste =>
            eintragsliste.remove()
        );
        let eintragsliste = document.createElement("ul");
        this._eintraege.forEach(eintrag  =>
            eintragsliste.insertAdjacentElement("beforeend", eintrag.html()));
        document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", eintragsliste);
    }

    _gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("bilanz", 0);
        this._eintraege.forEach(eintrag => {
            switch (eintrag.typ()) {
                case "einnahme":
                    neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.betrag());
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.betrag());
                    break;
                case "ausgabe":
                    neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.betrag());
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.betrag());
                    break;
                default:
                    console.log(`Der Typ "${eintrag.typ()}" ist nicht bekannt.`);
                    break;
            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    }

    _html_gesamtbilanz_generieren() {

        // <aside id="gesamtbilanz">
        let gesamtbilanz = document.createElement("aside");
        gesamtbilanz.setAttribute("id", "gesamtbilanz");

        //<h1>Gesamtbilanz</h1>
        let h1 = document.createElement("h1");
        h1.textContent = "Gesamtbilanz";
        gesamtbilanz.insertAdjacentElement("afterbegin", h1);

        //Einnahme generieren
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
        let div_gesamtbilanz = document.createElement("div");
        div_gesamtbilanz.setAttribute("class", "gesamtbilanz-zeile bilanz");

        let span_gesamtbilanz_name = document.createElement("span");
        span_gesamtbilanz_name.textContent = "Bilanz:";
        div_gesamtbilanz.insertAdjacentElement("afterbegin", span_gesamtbilanz_name);

        let span_gesamtbilanz_summe = document.createElement("span");
        this.gesamtbilanz.get("bilanz") >= 0 ? span_gesamtbilanz_summe.setAttribute("class", "positiv") : span_gesamtbilanz_summe.setAttribute("class", "negativ");

        span_gesamtbilanz_summe.textContent = `${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2).replace(/\./, ",")} €`;
        div_gesamtbilanz.insertAdjacentElement("beforeend", span_gesamtbilanz_summe);
        gesamtbilanz.insertAdjacentElement("beforeend", div_gesamtbilanz);

        return gesamtbilanz;
    }

    _gesamtbilanz_anzeigen() {
        document.querySelectorAll("#gesamtbilanz").forEach(gesamtbilanz => gesamtbilanz.remove());
        document.querySelector("body").insertAdjacentElement("beforeend", this._html_gesamtbilanz_generieren())
    }
} 