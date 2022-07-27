"use strict";

//liste erstellen
let liste = document.createElement("li")
liste.setAttribute("id","mein-listenElement")

//Anker erstellen
let anker = document.createElement("a");
anker.setAttribute("id","mein-ankerelement")
anker.setAttribute("href","#")

//Text erstellen
let text = document.createTextNode("Element")

//Verknüpfen
anker.appendChild(text)
liste.appendChild(anker)



//navListe.appendChild(liste)
//navListe.insertAdjacentElement("beforebegin",liste)
//navListe.insertAdjacentElement("afterbegin",liste)
//navListe.insertAdjacentElement("beforeend",liste)
//navListe.insertAdjacentElement("afterend",liste)

let navListe = document.querySelector("#navigation > ul")
let dom_string = "<li id=\"mein-listenElement\"><a id=\"mein-ankerelement\" href=\"#\">Element</a></li>"
navListe.insertAdjacentHTML("afterbegin", dom_string)

// navListe.insertAdjacentHTML("beforebegin", dom_string)

 ////dom_string = "<li id=\"mein-listenElement\"><a id=\"mein-ankerelement\" href=\"#\">Ele</a></li>"
// navListe.insertAdjacentHTML("afterbegin", dom_string)
// navListe.insertAdjacentHTML("beforeend", dom_string)
// navListe.insertAdjacentHTML("afterend", dom_string)

text = "Ad laborum est ad nostrud mollit ipsum cupidatat veniam nisi quis irure voluptate aliquip.";

//navListe.insertAdjacentText("beforebegin",text)
//navListe.insertAdjacentText("afterbegin",text)
// navListe.insertAdjacentHTML("beforeend", text)
//  navListe.insertAdjacentHTML("afterend", text)