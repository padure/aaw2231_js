//1
const data = [10, 20, 30, 40, 50];
//2 
const modifiedArray = [...data];
const element = modifiedArray.shift();
    modifiedArray.splice(3, 1, element);
const response = modifiedArray.slice(0, 2);
    response.unshift(100);

console.log(data);
console.log(response);