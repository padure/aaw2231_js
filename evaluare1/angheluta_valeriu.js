//Problema12
const array = [-1,2,3,-7,10]
const produsNumerePozitive = (arr) => {
    return arr.reduce((prod, num) => num > 0 ? prod * num : prod, 1)
}

//afisare
console.log(produsNumerePozitive(array))