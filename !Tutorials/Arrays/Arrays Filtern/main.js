"use strict";

let mein_zahlen_array = [112, 23, 34, 94, 335, 66];

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

        benutzer_array.filter(function (e) {
            if (e <= wert) {
                console.log(`${e} ist kleiner als ${wert}`)
            };
        });
    };
}

abfrage();
