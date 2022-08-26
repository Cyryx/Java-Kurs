"use strict"
// <!-- Navigationsleiste -->
// <nav id="navigationsleiste">
//     <a href="index.html"><span id="markenname">Liqui-Planner</span></a>
// </nav>
class Navigationsleiste {

    constructor() {
        this._html = this._html_generieren();
    }

    _html_generieren() {
        let nav = document.createElement("nav");
        nav.setAttribute("id", "navigationsleiste");

        let a = document.createElement("a");
        a.setAttribute("href", "#")

        let span = document.createElement("span");
        span.setAttribute("id", "markenname");
        span.textContent = "Liqui-Planner";
        a.insertAdjacentElement("afterbegin", span);
        
        nav.insertAdjacentElement("afterbegin", a);
        
        return nav
    };

    anzeigen() {

        let body = document.querySelector("body");
        if (body !== null) {
            body.insertAdjacentElement("afterbegin",this._html);
        }

    }
}