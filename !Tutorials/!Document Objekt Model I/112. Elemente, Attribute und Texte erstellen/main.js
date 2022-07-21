"use strict";

//Element erstellen
let div = document.createElement("div")

//Attribute erstellen
let attribute = document.createAttribute("id")

attribute.value = "meine_id";
//console.log(attribute)
//Attribute einem Element hinzufügen
div.setAttributeNode(attribute)

///Einfacher //Erstellen UND hinzufügen
div.setAttribute("id","test_id")
div.setAttribute("class","test_class")
console.log(div)
console.log('********************');

let text = document.createTextNode("Ad mollit tempor laborum laboris sint mollit dolore ex excepteur minim dolore deserunt.");
div.appendChild(text);
console.log(text);
