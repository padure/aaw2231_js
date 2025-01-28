let userAge = 30;
var userName = 'John Doe';

console.log('Hello World!', userName, userAge); 

//Tipuri de date
let city = 'Bucharest'; // string
let year = 2025; // number
let isAdmin = true; // boolean
let user = null; // null
let car; // undefined
let colors = ['red', 'green', 'blue']; // object
let person = {name: 'John', age: 30}; // object
let suma = function(a, b) { return a + b; }; // function
//Afisare tipuri de date
console.log(typeof city);
console.log(typeof colors);
console.log(typeof suma);
console.log(colors);

//Constante
let price = 110;
    price = 120;
const PORT = 3000;
const IP_ADDRESS = '192.168.3.67';
const admin = {name: 'John', age: 30};
const diferenta = (a, b) => a - b;
const cities = [
    'La Mesa',
    'Arden-Arcade',
    'Lake Marian',
    'Wymanburgh',
    'Haleighshire',
    'New Gracemouth',
    'Treyland',
    'Watsonville',
    'Gislasonbury',
    'Mission',
    'Kshlerinbury',
    'North Maeganfort',
];

//Concatenare
console.log(city, price, year);
console.log(city + ' ' + price + ' ' + year);
console.log(`Orasul: ${city}, Pret: ${price}, Anul: ${year}`);