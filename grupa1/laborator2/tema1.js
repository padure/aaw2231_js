//Operatori aritmetici
let x = 1;
let y = '1';

let suma = x + y; 
let diferenta = x - y;
let catul = x / y;
let produs = x * y;
let restul = x % y;

//Operatori de comparare
let egal = x == y;
let echivalent = x === y;
let diferit = x != y;
let diferitEchivalent = x !== y;
let maiMare = x > y;
let maiMareSauEgal = x >= y;
let maiMic = x < y;
let maiMicSauEgal = x <= y;

//Operatori logici
let si = x && y; //inmultirea logica 
let sau = x || y; //adunarea logica
let negatie = !x; //negatia logica

//Operatori de incrementare si decrementare
let incrementare = x++;
let decrementare = x--;
let postIncrementare = ++x;
let postDecrementare = --x;

//Operatori de atribuire
let atribuire = 5;
let s = x + 8;
    s += 8;
//Operator ternar
let major = (age >= 18) ? "Major" : "Minor";
let isAdmin = user === 'admin' ? true : false;

//Operatorul nullish ??
let user = {
    nume: "Ion",
    age: 30
};
let guest = "Vizitator";
let nume = user.name ?? guest ?? "Anonim";