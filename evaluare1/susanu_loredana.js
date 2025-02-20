//problema4
const filtreazaPare = (arr) => arr.filter(num => (num > 7)&&(num % 2 === 0));
const numere = [1,2,3,4,5,6,7,8,9,10];
console.log(filtreazaPare(numere));