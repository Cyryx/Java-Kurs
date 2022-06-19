"use strict";

let auto_1 ={
    farbe:"rot",
    modell:"Passat",
    marke:"VW",
    preis:15784
};
let auto_2 ={
    farbe:"silber",
    modell:"Käfer",
    marke:"VW",
    preis:105784
};
let auto_3 ={
    farbe:"weiss",
    modell:"R32",
    marke:"VW",
    preis:55784
};
let auto_4 ={
    farbe:"weiss",
    modell:"R32",
    marke:"VW",
    preis:55784
};

/* console.log(auto_3 === auto_4);
console.log(auto_1 === auto_2);
console.log(auto_3 === auto_3);
console.log({} === {}); */



const vergleich = function (a_1,a_2) {
    
    if(a_1.marke == a_2.marke && a_1.modell == a_2.modell){
        return true;
    }else {
    return false
    };
};



console.log(vergleich(auto_1,auto_2));
console.log(vergleich(auto_3,auto_4));