//Problema 26
const gasesteElement = (arr, conditie) => {
    for(let i = 0;i < arr.length;i++){
        if(conditie(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}
const rezolvare = gasesteElement([5, 3, 3],x=>x>10);
console.log(rezolvare);