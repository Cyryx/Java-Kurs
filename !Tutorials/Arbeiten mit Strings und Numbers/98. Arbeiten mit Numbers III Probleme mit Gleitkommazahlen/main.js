"use strict";

console.log(99.93 + 354.97);
console.log(((99.93 * 100 + 354.97 *100)/100).toFixed(2));
console.log(933265472989154900);


let euro = function (wert_a, wert_b) {
    console.log(parseFloat((wert_a * 100 + wert_b * 100)/100).toFixed(2));
}
euro(99.93,354.97)