"use strict";

let personen_array = [
    `Kathrin`,
    `Jens`,
    `Sonja`,
    `Elina`,
    `Maik`,
    `Bente`,
    `Hartmut`,
    `Leon`,
    `Elina`,
    `Laura`
];
console.log('**********************************************************************');

for (let i = 0; i < personen_array.length; i++) {
    console.log(`Hallo ${personen_array[i]}! for-2`);
}

console.log('***********************************************************************');

for (let i = 0; i < 10; i++) {
    console.log(`Hallo ${personen_array[i]}! for-1`);
}



console.log('**********************************************************************');

for (let i = personen_array.length - 1; i >= 0; i--) {
    console.log(`Hallo ${personen_array[i]}! for-3`);
}



/* console.log('**********************************************************************');

for (personen_array.length; personen_array.length > 0; personen_array.length--) {
    console.log(personen_array);
}

console.log('**********************************************************************');

for (personen_array.length; personen_array.length > 0; personen_array.length++) {
    console.log(personen_array);
} */

/* console.log('**********************************************************************');

for (let i = personen_array.length; i > 0; i++) {
    console.log(personen_array);
} */

