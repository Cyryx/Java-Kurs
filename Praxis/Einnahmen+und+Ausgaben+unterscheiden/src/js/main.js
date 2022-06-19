"use strict";

// Gesamtbilanz anlegen
let einnahmen = 0;
    ausgaben = 0,
    bilanz = 0,
    titel,
    typ,
    betrag,
    datum;








    
// Eingabedaten holen
let titel_1 = prompt("Titel:");
let typ_1 = prompt("Typ (Einnahme oder Ausgabe):");
let betrag_1 = parseInt(prompt("Betrag (in Cent):"));
let datum_1 = prompt("Datum (jjjj-mm-tt):");

console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`
);

if (typ_1 === "Einnahme") {
    einnahmen = einnahmen + betrag;
    bilanz = bilanz + betrag;
} else if (typ === "Ausgabe") {
    ausgaben = ausgaben + betrag;
    bilanz = bilanz - betrag;
} else {
    console.log(`Der Typ "${typ}" ist nicht bekannt.`);
}

// Gesamtbilanz ausgaben
let positiv = bilanz >= 0;

console.log(`Einnahmen: ${einnahmen} ct
Ausgaben: ${ausgaben} ct
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${positiv}`
);
