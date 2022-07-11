"use strict";

//Elemente nach Id Auswählen
let el_by_id = document.getElementById("navigation");
console.log(el_by_id);
//Elemente nach ClassName  Auswählen
let el_by_className_1 = document.getElementsByClassName("jumbotron");
console.log(el_by_className_1);
console.log(el_by_className_1.length !== 0);

let el_by_className_2 = document.getElementsByClassName("teets");
console.log(el_by_className_2);
//Elemente nach TagName  Auswählen
let el_by_tagName = document.getElementsByTagName("p");
console.log(el_by_tagName);