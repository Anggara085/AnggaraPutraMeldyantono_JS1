// Contoh penggunaan if, else, dan nested if
let nilai = 75;

if (nilai >= 80) {
    console.log("Nilai A");
} else if (nilai >= 70) {
    console.log("Nilai B");
} else {
    console.log("Nilai C");
}

// Contoh penggunaan switch case
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    default:
        dayName = "Hari lain";
}

console.log("Hari ini adalah " + dayName);

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// Contoh penggunaan while
let counter = 0;

while (counter < 5) {
    console.log("Perulangan ke-" + (counter + 1));
    counter++;
}

// Contoh penggunaan do while
let anotherCounter = 0;

do {
    console.log("Perulangan lain ke-" + (anotherCounter + 1));
    anotherCounter++;
} while (anotherCounter < 3);

// Contoh penggunaan function
function tambah(angka1, angka2) {
    return angka1 + angka2;
}

let hasilPenambahan = tambah(3, 5);
console.log("Hasil penambahan: " + hasilPenambahan);
