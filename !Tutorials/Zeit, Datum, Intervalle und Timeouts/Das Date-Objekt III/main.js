"use strict";

let datum = new Date();

//datum.toLocalString([schema][,optionen])

let en_US = datum.toLocaleString("en-US");
console.log(en_US);

let optionen = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
};

//let de_DE = datum.toLocaleString(); // BCP 47 (Sprachcodes)
let de_DE = datum.toLocaleString("de-DE",{
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
});
console.log(de_DE);

let de_DE_2 = datum.toLocaleDateString("de-DE",{
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric"
});
console.log(de_DE_2);

let de_DE_3 = datum.toLocaleTimeString("de-DE",{
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
});
console.log(de_DE_3);