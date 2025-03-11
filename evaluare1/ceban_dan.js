//problema 14
 const inverseazaArray = (arr) => {
    let inverseaza =[];
    for(let i = arr.length -1;i>=0;i--){
        inverseaza.push(arr[i]);
    }
    return inverseaza;

  
 }
let numere=[1,2,3,4,5];
let rezultat= inverseazaArray(numere);
console.log(rezultat);