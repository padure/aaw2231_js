const numere = [23, 14, 90, 2025, 5, 9, 78];
let [primul, , alTreilea, ...rest] = numere;
console.log(primul);
console.log(alTreilea);
console.log(rest);

const fullStack = [
    ["Html", "Css", "Js"],
    ["PHP", "SQL", "C#", "Express"]
];

const [frontend, backend] = fullStack;

console.log(frontend);
console.log(backend);

const orase = [undefined, "Cahul", "Cantemir", "Leova"];

const [
    primulOras = "Fara nume",
    alDoileaOras,
    alTreileaOras,
    alPatruleaOras
] = orase;

console.log(primulOras, alDoileaOras, alTreileaOras, alPatruleaOras);