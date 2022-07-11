"use strict";

//Element mit CSS-Selektor auswählen
let us_1 = document.querySelector("body > #navigation > ul");
console.log(us_1);

let us_2 = document.querySelector(".jumbotron");
console.log(us_2);

let us_3 = document.querySelector(".test");
console.log(us_3);

/* let us_4 = document.querySelector("%67§ 4");
console.log(us_4); */

//Element mit CSS-Selektor ALL auswählen
let qsa_1 = document.querySelectorAll("body > #navigation > ul > li > a");
console.log(qsa_1);

let qsa_2 = document.querySelectorAll(".jumbotron");
console.log(qsa_2);

let qsa_3 = document.querySelectorAll(".test");
console.log(qsa_3.length !== 0);

/* let qsa_4 = document.querySelectorAll("%67§ 4");
console.log(qsa_4); */