"use strict";

/* let obst =[
    "Äpfel",
    "Birnen",
    "Bananen"
]

let gemuese =[
    "Möhren",
    "Sellerie",
    "Kohl"
]

let brot = [
    "Graubrot",
    "Schwarzbrot",
    "Vollkornbrot"
]

let waren =[ obst, gemuese, brot]; */




let waren = [
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
        "Vollkornbrot",
        [
            "Möhren",
            "Sellerie",
            "Kohls",
        ]
    ]
];
//Arraygruppe 0
console.log(waren);
console.log(waren[2][3][2]);
