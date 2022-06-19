"use strict";

let essen = "Fisch";

switch (essen) {
    //Positiv
    case "Nudeln":
    case "Pizza":
    case "Steak":
        console.log(`${essen} mag ich!`);
        break;
    //Negativ
    case "Fisch":
    case "Hummer":
    case "Kaviar":
        console.log(`${essen} mag ich nicht!`);
        break;
    //default
    default:
        console.log(`Ich kenne ${essen} nicht was ist das?`);
        break;

}
/* 
switch (essen) {
    case "Nudeln":
        console.log("Nudeln mag ich!");
        break;
    case "Fisch":
        console.log("Fisch mag ich nicht!");
        break;
    case "Pizza":
        console.log("Pizza mag ich!");
        break;
    case "Hummer":
        console.log("Hummer mag ich nicht!");
        break;
    case "Wurst":
        console.log("Wurst mag ich!");
        break;
    case "Steak":
        console.log("Steak mag ich!");
        break;
    default:
        console.log(`Ich kenne ${essen} nicht was ist das?`);
        break;

} */