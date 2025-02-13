//1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//2
const evenNumbers = numbers.filter(number => number % 2 === 0);
const squaredEvenNumbers = evenNumbers.map(number => number * number);
//3
const maiMare100    = squaredEvenNumbers.filter(number => number > 100);
const maiMic100     = squaredEvenNumbers.filter(number => number < 100);
//4
console.log(numbers);
console.log(squaredEvenNumbers);
console.log(maiMare100);
console.log(maiMic100);