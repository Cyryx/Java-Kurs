"use strict";

let variable_1 = "Variable 1";

const meineFunktion = function () {
    let variable_2 ="Variable 2";

    if (true) {
        let variable_3 ="Variable 3";
        console.log(variable_1);
        console.log(variable_2);
        console.log(variable_3);
    }

    console.log(variable_1);
    console.log(variable_2);
    // console.log(variable_3);
}

meineFunktion();


console.log(variable_1);
//console.log(variable_2);    
//console.log(variable_3);
