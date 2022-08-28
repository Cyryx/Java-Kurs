"use strict"

class Eintrag {
    constructor(titel, typ, betrag, datum) {
        this._titel = titel;
        this._typ = typ;
        this._betrag = betrag;
        this._datum = datum;
        this._timestamp = Date.now();
        this._html = this.html_generieren();
    }


    titel() {
        return this._titel;
    }
    typ() {
        return this._typ;
    }
    betrag() {
        return this._betrag;
    }
    datum() {
        return this._datum;
    }
    timestamp() {
        return this._timestamp;
    }
    html() {
        return this._html; 
    }


    html_generieren() {

        let listenpunkt = document.createElement("li");
        this._typ === "einnahme" ? listenpunkt.setAttribute("class", "einnahme") : listenpunkt.setAttribute("class", "ausgabe");
        listenpunkt.setAttribute("data-timestamp", this._timestamp);

        let datum = document.createElement("span");
        datum.setAttribute("class", "datum");
        datum.textContent = this._datum.toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        listenpunkt.insertAdjacentElement("afterbegin", datum);

        let titel = document.createElement("span");
        titel.setAttribute("class", "titel");
        titel.textContent = this._titel;
        datum.insertAdjacentElement("afterend", titel);

        let betrag = document.createElement("span");
        betrag.setAttribute("class", "betrag");
        betrag.textContent = `${(this._betrag / 100).toFixed(2).replace(/\./, ",")} €`;
        titel.insertAdjacentElement("afterend", betrag);

        let button = document.createElement("button");
        button.setAttribute("class", "entfernen-button");
        betrag.insertAdjacentElement("afterend", button);

        let icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-trash");
        button.insertAdjacentElement("afterbegin", icon);
        this.eintrag_entfernen_event_hinzufuegen(listenpunkt);

        return listenpunkt;
    }

    eintrag_entfernen_event_hinzufuegen(listenpunkt) {
        listenpunkt.querySelector(".entfernen-button").addEventListener("click", click => {
            let timestamp = click.target.parentElement.getAttribute("data-timestamp")
            haushaltsbuch.eintrag_entfernen(timestamp);
        });
    }
}