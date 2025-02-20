//Problema 13
const areCaractereUnice=(str) =>{
    const strArray=str.split('');
    for (const char of strArray) {
        if(str.split(char).length >2)
         return false;
    }
    return true; 
}
console.log(areCaractereUnice("abcd"));
