//1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//2
const numbersFiltred = numbers.filter(number => number % 2 === 0);
const squaredEvenNumbers = numbersFiltred.map(number => number * number);
//3
const maiMiciCa100 = squaredEvenNumbers.filter(number => number < 100);
const maiMariCa100 = squaredEvenNumbers.filter(number => number > 100);
//4
console.log(numbers);
console.log(squaredEvenNumbers);
console.log(maiMiciCa100);
console.log(maiMariCa100);