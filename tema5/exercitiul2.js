// 1
const numbers = [2, 5, 8, 10, 15, 20];
// 2
const squaredNumbers = numbers.map(number => number * number);
// 3
const evenNumbers = numbers.filter(number => number % 2 === 0);
// 4 
console.log(numbers);
console.log(evenNumbers);
console.log(squaredNumbers);