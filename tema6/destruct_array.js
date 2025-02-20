const numere = [23, 14, 90, 2025, 5, 9, 78];
let [, , alTreilea, ...rest] = numere;
// console.log(alTreilea);
// console.log(rest);

const fullStack = [
    ["Html", "Css", "Js"],
    ["PHP", "SQL", "C#", "Express"]
];

const [frontEnd, backend] = fullStack;

// console.log(frontEnd);
// console.log(backend);

const orase = [undefined, "Cahul", "Cantemir", "Leova"];

const [
    primulOras = "Fara nume",
    alDoileaOras,
    alTreileaOras,
    alPatruleaOras
] = orase;

console.log(primulOras, alDoileaOras, alTreileaOras, alPatruleaOras);