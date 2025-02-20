//Problema 9
const celMaiLungCuvant=(text)=>{
    return text.split(" ").reduce((a,b)=>{
        return b.length>a.length? b : a
    },"");
};

//exemplu
let propozitie = "Ut consequatur architecto aperiam et doloremqueq minima.";
console.log(celMaiLungCuvant(propozitie));