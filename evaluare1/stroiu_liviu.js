//Problema 16
const grupeazaDupaLungime = (arr)=>{
    const obj ={}
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i].length]){
            obj[arr[i].length]=[]
            
        }
        obj[arr[i].length].push(arr[i]);
    }
    return obj;
}

console.log(grupeazaDupaLungime(['get','set','join']))