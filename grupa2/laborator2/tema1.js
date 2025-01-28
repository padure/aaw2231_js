// Operatorii aritmetici
let a = 10;
let b = 5;
let suma = a + b;
let diferenta = a - b;
let produs = a * b;
let cat = a / b;
let rest = a % b;
let putere = a ** b;
// Operatorii de comparare
let egal = a == b;
let egalitate = a === b;
let diferit = a != b;
let diferitTip = a !== b;
let maiMare = a > b;
let maiMic = a < b;
let maiMareSauEgal = a >= b;
let maiMicSauEgal = a <= b;
// Operatorii logici
let si = a && b; // inmultirea logica a lui a si b
let sau = a || b; // adunarea logica a lui a sau b
let nu = !a; // negarea lui a
// Operatorii de incrementare si decrementare
let c = a++; //incrementare cu 1
let d = b--; //decrementare cu 1
let e = ++a; //postincrementare cu 1
let f = --b; //postdecrementare cu 1
// Operatorii de atribuire
let g = a += b; //adunare si atribuire a = a + b
let h = a -= b; //scadere si atribuire a = a - b
let i = a *= b; //inmultire si atribuire a = a * b
let j = a /= b; //impartire si atribuire a = a / b
let k = a %= b; //rest si atribuire a = a % b
let l = a **= b; //putere si atribuire a = a ** b
// Operatorul ternar ? :
let isMajor = age >= 18 ? "Da" : "Nu";
let isAdmin = user.role === "admin" ? true : false;
// Operatorul nullish ??
let user = {
    name: null,
    age: 25,
    role: "admin",
}
let userName = user.name ?? guest ?? "Guest";
