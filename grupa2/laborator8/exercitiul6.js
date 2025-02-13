//1
const originalArray = [10, 20, 30, 40, 50];
//2
const newOriginalArray = [...originalArray];
let primulElement = newOriginalArray.shift();
    newOriginalArray.splice(3, 1, primulElement);
let modifiedArray = newOriginalArray.slice(0, 2);
    modifiedArray.unshift(100);
//3
console.log(originalArray);
console.log(modifiedArray);