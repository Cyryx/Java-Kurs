"use strict";

let html_collection_1 = document.getElementsByClassName("jumbotron");
let html_collection_2 = document.getElementsByTagName("li");
let node_list_1 = document.querySelectorAll("p");
let node_list_2 = document.querySelectorAll("ul");
//console.log(html_collection_1);


//Browser Kompatibilität beachten
console.log('**********For Schleife**********');
for (let i = 0; i < html_collection_1.length; i++) {
    console.log(html_collection_1[i]);
}

for (let i = 0; i < html_collection_2.length; i++) {
    console.log(html_collection_2[i]);
}

console.log('**********For of Schleife**********');
for (let e of html_collection_1) {
    console.log(e);
}

for (let e of html_collection_2) {
    console.log(e);
}

console.log('**********For Schleife Node List**********');
for (let i = 0; i < node_list_1.length; i++) {
    console.log(node_list_1[i]);
    
}
for (let i = 0; i < node_list_2.length; i++) {
    console.log(node_list_2[i]);
    
}

console.log('********** ForOf Schleife Node List**********');
for (let  e of node_list_1) {
    console.log(e);
}
for (let  e of node_list_2) {
    console.log(e);
}

console.log('**********forEaech Schleife Node List**********');
node_list_1.forEach(function (e) {
    console.log(e);
})
node_list_2.forEach(function (e) {
    console.log(e);
})