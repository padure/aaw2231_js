//1
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
//2
const platArray = nestedArray.flat(Infinity); 
//3
const arrayDublat = platArray.flatMap(number => [number * 2]);
//4
console.log(platArray);
console.log(arrayDublat);