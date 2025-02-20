//Problema 15
const curatArray=(arr)=>arr.filter(Boolean);
console.log(curatArray([1,2,0,null,NaN,undefined,false,"",3]));