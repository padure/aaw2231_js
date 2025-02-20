// Problema.27

const toateRespecta = (arr, conditie) => arr.every(conditie);
const num = [3, 6, 9];
console.log(toateRespecta(num, x => x % 2 === 0));
console.log(toateRespecta(num, x => x % 2 !== 0));
console.log(toateRespecta(num, x => x % 3 === 0));