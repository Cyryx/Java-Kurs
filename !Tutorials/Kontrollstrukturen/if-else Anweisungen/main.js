"use strict";

const minAlter =18;
let eingabeAlter = 19;

// if (eingabeAlter >= minAlter) {
//     console.log("Du bist alt genug");
// }else{
//     console.log("Du bist nicht alt genug");
// } 

if (eingabeAlter >= minAlter) {
    if (eingabeAlter == minAlter) {
        console.log("du bist grade alt genug.");
    } else {
        console.log("Du bist alt genug!");
    }
} else {
    console.log("Du bist nicht alt genug");
} 