//Array
const orase = ["Cahul", "Cantemir", "Leova", "Ialoveni", "Chisinau"];
const culori = new Array("Rosu", "Albastru", "Verde");

// Metode de gestiune a tablourilor
// Adaugare
orase.push("Orhei", "Hancesti"); // Adauga la final
// const res = orase.unshift("Telenesti"); // Adauga la inceput
// orase[res] = "Sangereni";
// orase[100] = "Balti";
// console.log(orase);

// Stergere
orase.pop(); // La final
const res = orase.shift(); // La inceput

// console.log(res);
// console.log(orase);

// Modificare

orase[0] = "Edinet"; // Trebuie sa cunoastem indexul

// console.log(orase); 

// Concatenare
const frontend = ["HTML", "CSS", "JS", "React"];
const backend  = ["SQL", "PHP", "Laravel"];

// const fullstack = frontend.concat(backend).concat(["C#"]);
const fullstack = [...frontend, ...backend, "C#"];

console.log(fullstack);
