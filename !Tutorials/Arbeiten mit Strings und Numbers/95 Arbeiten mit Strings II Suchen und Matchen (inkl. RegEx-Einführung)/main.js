"use strict";

let s = " Lorem ipsum dolor sit amet ipsum. ";
/* 
console.log(s.length);
console.log(s.indexOf("ipsum", 20));
console.log(s.lastIndexOf("ipsum", 10));
console.log(s.includes("sit",20));
console.log(s.toLocaleLowerCase());
console.log(s.toLocaleUpperCase());
console.log(s.trim());
console.log(s.trimEnd());
console.log(s.trimStart());
console.log(s.repeat(1)); */

let regex = /i\w{4}/g;
/* 
console.log(s.search(regex));
console.log(s.replace(regex, "opsum"));
console.log(s.match(regex)); 
*/

let regex_1 = /^\d+((,|\.)\d\d?)?$/;
let zahl = "0,2";
console.log(zahl);
if (zahl.match(regex_1) !== null) {
    console.log(true);
}else {console.log(false);}