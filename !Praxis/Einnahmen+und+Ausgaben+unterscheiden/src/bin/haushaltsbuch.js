"use strict";

const haushaltsbuch = {

    gesamtbilanz: new Map(),
    eintraege: [],

    eintrag_hinzufuegen(formulardaten) {
        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", formulardaten.titel);
        neuer_eintrag.set("typ", formulardaten.typ);
        neuer_eintrag.set("betrag", formulardaten.betrag);
        neuer_eintrag.set("datum", formulardaten.datum);
        neuer_eintrag.set("timestamp", Date.now());
        this.eintraege.push(neuer_eintrag);
        this.eintraege_sortieren();
        this.eintraege_anzeigen();
        this.gesamtbilanz_erstellen();
        this.gesamtbilanz_anzeigen();
    },

    eintrag_entfernen(timestamp) {
        let index;
        for (let i = 0; i < this.eintraege.length; i++) {
            if (this.eintraege[i].get("timestamp") === parseInt(timestamp)) {
                index = i;
                break;
            }
        }
        this.eintraege.splice(index, 1);
        this.eintraege_anzeigen();
        this.gesamtbilanz_erstellen();
        this.gesamtbilanz_anzeigen();
        eingabeformular.fehlerbox_entfernen();
    },

    eintraege_sortieren() {
        this.eintraege.sort((eintrag_a, eintrag_b) => {
            return eintrag_a.get("datum") > eintrag_b.get("datum")
                ? -1 : eintrag_a.get("datum") < eintrag_b.get("datum")
                    ? 1 : 0;
        });
    },

    html_eintrag_generieren(eintrag) {

        let listenpunkt = document.createElement("li");
        eintrag.get("typ") === "einnahme" ? listenpunkt.setAttribute("class", "einnahme") : listenpunkt.setAttribute("class", "ausgabe");
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
        this.eintrag_entfernen_event_hinzufuegen(listenpunkt);

        return listenpunkt;
    },

    eintrag_entfernen_event_hinzufuegen(listenpunkt) {
        listenpunkt.querySelector(".entfernen-button").addEventListener("click", click => {
            let timestamp = click.target.parentElement.getAttribute("data-timestamp")
            this.eintrag_entfernen(timestamp);
        });
    },

    eintraege_anzeigen() {
        ///////// ///////// ///////// ///////// ///////// ///////// ///////// ///////// ///////// ///////// /////////
        document.querySelectorAll(".monatsliste ul").forEach(eintragsliste =>
            eintragsliste.remove()
        );
        let eintragsliste = document.createElement("ul");
        this.eintraege.forEach((e) =>
            eintragsliste.insertAdjacentElement("beforeend", this.html_eintrag_generieren(e)));
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
    },

    gesamtbilanz_anzeigen() {
        document.querySelectorAll("#gesamtbilanz").forEach(gesamtbilanz => gesamtbilanz.remove());
        document.querySelector("body").insertAdjacentElement("beforeend", this.html_gesamtbilanz_generieren())
    }
};
