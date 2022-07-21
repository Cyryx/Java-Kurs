"use strict";
/* 
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
console.log(text); */

//113
let div = document.createElement("div");
div.setAttribute("id", "meine_id");
div.setAttribute("class", "meine_klasse");
let text = document.createTextNode("Esse nulla adipisicing qui incididunt deserunt veniam qui id.");

//abbendChild() fügt ein Element einem Kindelement hinzu
//Existiert ein Kindelement wird es gelöscht und als letztes Kindelement eingefügt

//Text zum div element hinzugefügt
div.appendChild(text);

//Section in Jumbotron selektiert
let jumbo = document.querySelector(".jumbotron > section"); 

//div element zur sektion im Jumbotron hinzugefügt
jumbo.appendChild(div);

//Navigationselement verschieben

//Erstes Kindelement in nav > ul selektiert
let li = document.querySelector("nav > ul > li");

//ul in Navigation selektiert
let ul = document.querySelector("#navigation > ul");

//ertstes Listenelement der ul erneut in ul eingefügt
//(durch appendChild() als letztes Kindelement )
ul.appendChild(li);
