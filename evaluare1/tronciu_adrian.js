//Problema30
const listaNr = [2, 4, 3]
const sumaNr = (liste)=>{
    return liste.reduce((acc, nr) => acc += nr % 2 === 0 ? nr : 0 )
}
console.log(sumaNr(listaNr));