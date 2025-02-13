//1
const nestedArray = [1, [2, [3, 4], 5, 6, [7, 8]]];
//2
const platArray = nestedArray.flat(Infinity);

console.log(platArray);