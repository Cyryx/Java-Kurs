"use strict";

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
        "Vollkornbrot"
    ]
];

for (let i = 0; i < waren.length; i++) {
    for (let x = 0; x < waren[i].length; x++) {

        console.log(`Ich mag ${waren[i][x]}.`);
        
    }
}