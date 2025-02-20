//Problema6
const estePalindrom=(text)=>{
    let textProcesat=text.toLowerCase().replace(/\s/g, "");
    return textProcesat===textProcesat.split("").reverse().join("");
}
console.log(estePalindrom("level"));
console.log(estePalindrom("minus"));
