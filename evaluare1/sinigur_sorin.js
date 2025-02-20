//Problema 28
const sumaLungimei=(arr)=>{
   return arr.reduce((acc, word)=> acc+=word.length, 0)
}
console.log(sumaLungimei(["Hello", "World"]));