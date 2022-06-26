"use strict";

/* let auto_objekte_0 ={
    marke:"VW",
    modell:"Passat",
    farbe:"Weiss",
    preis:22500
}

let auto_objekte_1 ={
    marke:"Ford",
    modell:"Fiesta ST",
    farbe:"Grau",
    preis:25500
}

let auto_objekte_2 ={
    marke:"Porsche",
    modell:"Tycan",
    farbe:"Rot",
    preis:125500
}

let autos =[
    auto_objekte_0,
    auto_objekte_1,
    auto_objekte_2
] */


let autos_array = [
    {
        marke: "VW",
        modell: "Passat",
        farbe: "Weiss",
        preis: [50000]
    },
    {
        marke: "Ford",
        modell: "Fiesta ST",
        farbe: "Grau",
        preis: [40000]
    },
    {
        marke: "Porsche",
        modell: "Tycan",
        farbe: "Gelb",
        preis: [125000]
    }
]


/* 
for (let index = 0; index < autos_array.length; index++) {
    console.log(`
Das Array greift auf das autos_array zu und gibt das Objekt aus
marke:${autos_array[index]["marke"]} 
modell:${autos_array[index]["modell"]} 
preis: ${autos_array[index]["preis"]}€
`);
} */

/* let waren = [
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
]; */

let waren_objekt =
{
    obst: [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    gemuese: [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    brot: [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
}


console.log(`
Das Objekt greift auf das obst, gemuese und brot Array zu und gibt das Objekt aus

**************************************************

[${waren_objekt.obst} ]

waren_objekt.obst[0]
[${waren_objekt.obst[0]}]

waren_objekt.obst[1]
[${waren_objekt.obst[1]}]

waren_objekt.obst[2]
[${waren_objekt.obst[2]}]

**************************************************

[${waren_objekt.gemuese} ]

waren_objekt.gemuese[0]
[${waren_objekt.gemuese[0]}]

waren_objekt.gemuese[1]
[${waren_objekt.gemuese[1]}]

waren_objekt.gemuese[2]
[${waren_objekt.gemuese[2]}]

**************************************************

[${waren_objekt.brot} ]

waren_objekt.brot[0]
[${waren_objekt.brot[0]}]

waren_objekt.brot[1]
[${waren_objekt.brot[1]}]

waren_objekt.brot[2]
[${waren_objekt.brot[2]}]
**************************************************
`);

console.log(`
bevor gelöscht waren_objekt.brot[2] 
${waren_objekt.brot[2]}
**************************************************
`);
delete waren_objekt.brot[2];
console.log(`
delete waren_objekt.brot[2] 
${waren_objekt.brot[2]}

waren_objekt.brot
${waren_objekt.brot}
**************************************************
`); 



console.log(`
bevor hinzugefügt waren_objekt.brot[3] 
${waren_objekt.brot[3]}
**************************************************
`);
waren_objekt.brot[3] ="Maisbrot"
console.log(`
hinzugefügt waren_objekt.brot[3] = "Maisbrot"
${waren_objekt.brot[3]}
**************************************************
`);