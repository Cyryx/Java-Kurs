"use strict";

let z = 0;

while (z < 10) {
    z++;
    if (z == 5) {
        continue;
    } else if (z == 7) {
        break;
    }
    console.log(`while: ${z}`);
};
console.log(`Schleife beendet.`);
