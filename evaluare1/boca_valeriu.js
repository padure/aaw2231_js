// Problema 3
const numaraVocale = (text) =>{
    const vocale = 'aeiouAEIOU';
    return text.split('').reduce((a,b)=>{
      return vocale.includes(b) ? a + 1 : a;
    },0);
}
let text = "Javascript";
console.log(numaraVocale(text));
