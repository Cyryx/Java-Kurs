"use strict";

//let mein_zahlen_array = [345, 3, 324132, 231423];


let wert_zahlen = [];
for (let i = 1; i <= 20; i++) {
    wert_zahlen.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    while (i == 20) {
        console.log(`Zahlengenerator Wert: ` + wert_zahlen);
        break;
    }
}


let kleiner_Gleich_Zwanzig = wert_zahlen.filter(function (e) {
    if (e <= 20) {
        return true;
    } else {
        return false;
    }
});
console.log(kleiner_Gleich_Zwanzig);

/*
let abfrage = function () {
    let array_hinzufuegen = true;
    let benutzer_array = [];

    while (array_hinzufuegen) {
        array_hinzufuegen = confirm("Mehr Arraywerte hinzufügen?");
        while (array_hinzufuegen) {
            let wert_hinzufuegen = prompt("Arraywert?");
            benutzer_array.push(wert_hinzufuegen);
            console.log(benutzer_array);
            array_hinzufuegen = confirm("Mehr Arraywerte hinzufügen?");
        }
    }

    if (confirm("Grössergleich filtern?")) {
        let wert = prompt("Wert?")
        benutzer_array.filter(function (e) {
            if (e >= wert) {
                console.log(`${e} ist grösser als ${wert}`)
            };
        });
    } else if (confirm("Kleinergleich filtern?")) {
        let wert = prompt("Wert?")

        benutzer_array.filter(function (b) {
            if (b <= wert) {
                console.log(`${b} ist kleiner als ${wert}`)
            };
        });
    };
}

abfrage();
 */
