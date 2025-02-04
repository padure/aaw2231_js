const text = "Necessitatibus occaecati veniam omnis sunt alias excepturi omnis.";
const regulaDeCautare = /omnis/gi;
const result = text.matchAll(regulaDeCautare);

// console.log(text.match(regulaDeCautare));
// console.log(regulaDeCautare.test(text));
// console.log(regulaDeCautare.exec(text));
// result.forEach(element => console.log(element));

// Se contin numere
const str = "Ana are 2 mere si 3 pere";
const contineNumere = /\d+/g;
const newStr = str.replace(contineNumere, "X");

console.log(str.match(contineNumere));
console.log(contineNumere.test(str));
console.log(newStr);
const str2 = "Eu invat JS, JS este un limbaj orientat pe obiecte";
const regula = /js/gi;

console.log(str2.replace(regula, 'PHP'));

// Validare numar de telefon RM +37379000000
const nr = "+37379474747";
const validNrRM = /^\+373\d{8}$/;

console.log(validNrRM.test(nr));

// Validare email
const email = 'test@gmail.com';
const regEmailValidare = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

console.log(regEmailValidare.test(email));

const IDNP = "0123456789123";
// const validareIDNP = /^\d{13}$/;
const validareIDNP = /^[0-9]{13}$/;

console.log(validareIDNP.test(IDNP));