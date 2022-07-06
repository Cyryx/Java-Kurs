"use strict";

let d = new Date();

d.setFullYear(1985);
d.setMonth(7);
d.setDate(5);
d.setHours(14);
d.setMinutes(10);
d.setSeconds(20);
d.setMilliseconds(30);

d.getDay()
console.log(d);

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

let d_utc = new Date();

d_utc.setFullYear(1985);
d_utc.setMonth(17);
d_utc.setDate(5);
d_utc.setHours(14);
d_utc.setMinutes(10);
d_utc.setSeconds(20);
d_utc.setMilliseconds(30);

d_utc.getDay()
console.log(d_utc);

console.log(d_utc.getFullYear());
console.log(d_utc.getMonth());
console.log(d_utc.getDate());
console.log(d_utc.getDay());

console.log(d_utc.getHours());
console.log(d_utc.getMinutes());
console.log(d_utc.getSeconds());
console.log(d_utc.getMilliseconds());