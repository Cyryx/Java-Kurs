"use strict";

/* let a;
a= 5;
console.log(a); -> 5

let b;
console.log(b); -> undefined
b=10;
console.log(b); -> 10

c=15;
console.log(c); -> C is not defined
let c; */


var a;
a = 5;
console.log(a);

var b;
console.log(b);
b = 10;
console.log(b);

c = 15;
console.log(c);
var c;
c = 15.1;
console.log(c);

if (true) {
    var d = 20;
}
console.log(d);

let e = 25;
if (true) {
    let e = 30;
    console.log(e)
}
console.log(e);

var f = 25;
if (true) {
    var f = 30;
    console.log(f)
}
console.log(f);

