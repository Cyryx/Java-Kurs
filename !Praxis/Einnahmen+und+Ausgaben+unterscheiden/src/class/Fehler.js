"use strict"

// _html_fehlerbox_generieren(formular_fehler) {
//     let fehlerbox = document.createElement("div");
//     fehlerbox.setAttribute("class", "fehlerbox");

//     let fehlertext = document.createElement("span");
//     fehlertext.textContent = "Es gibt Fehler in folgenden Eingabefeldern:";
//     fehlerbox.insertAdjacentElement("afterbegin", fehlertext);

//     let fehlerliste = document.createElement("ul");
//     formular_fehler.forEach((fehler) => {
//         let fehlerlistenpunkt = document.createElement("li");
//         fehlerlistenpunkt.textContent = fehler;
//         fehlerliste.insertAdjacentElement("beforeend", fehlerlistenpunkt);
//     });
//     fehlerbox.insertAdjacentElement("beforeend", fehlerliste);

//     return fehlerbox;
// }

// _fehlerbox_anzeigen(formular_fehler) {
//     let eingabeformular_container = document.querySelector("#eingabeformular-container");
//     if (eingabeformular_container !== null)
//         document.querySelector("#eingabeformular-container").insertAdjacentElement("afterbegin", this._html_fehlerbox_generieren(formular_fehler));
// }



class Fehler {
    constructor(fehlertext, formular_fehler) {
        this._fehler_text = fehlertext;
        this._formular_fehler = formular_fehler;
        this._html = this._html_generieren();
    }

    _html_generieren() {
        let fehlerbox = document.createElement("div");
        fehlerbox.setAttribute("class", "fehlerbox");

        let fehlertext = document.createElement("span");
        fehlertext.textContent = this._fehler_text;
        fehlerbox.insertAdjacentElement("afterbegin", fehlertext);

        let fehlerliste = document.createElement("ul");
        this._formular_fehler.forEach(fehler => {
            let fehlerlistenpunkt = document.createElement("li");
            fehlerlistenpunkt.textContent = fehler;
            fehlerliste.insertAdjacentElement("beforeend", fehlerlistenpunkt);
        })
        fehlerbox.insertAdjacentElement("beforeend", fehlerliste);

        return fehlerbox;
    }

    _entfernen() {
        let fehlerbox = document.querySelector(".fehlerbox");
        if (fehlerbox !== null)
            fehlerbox.remove();
    }

    anzeigen(formular_fehler) {
        this._entfernen();
        let eingabeformular_container = document.querySelector("#eingabeformular-container");
        if (eingabeformular_container !== null)
            document.querySelector("#eingabeformular-container").insertAdjacentElement("afterbegin", this._html);
    }
}