"use strict";

//setTimeout(callback function, zeitspanne[,parameter1,parameter2,parameter3,..., parameterN]);
console.log('**********Timeout**********');

/* 
setTimeout(function () {
    console.log("3!");
},1000)
setTimeout(function () {
    console.log("2!");
},2000)
setTimeout(function () {
    console.log("1!");
},3000)
setTimeout(function () {
    console.log("LOS!");
},3500)
 */
//setTimeout(code-string)

setTimeout("console.log(\"Fertig\");",1000);
//setTimeout("console.log('Fertig');", 4000);

//clearTimeout(id);
console.log('**********Intervall**********');

//setIntervall(callback function, zeitspanne[,parameter1,parameter2,parameter3,..., parameterN]);
/* 
setInterval(function () {
    console.log("3!");
},1000)
 */
setInterval("console.log(\"Fertig\");",1000);

setTimeout("clearInterval(4);",4000);