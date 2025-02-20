// problema18
const numarfrecvent=(text)=>{
    return text.split("").reduce((frecvent, litera)=>{
        frecvent[litera] = (frecvent[litera] || 0)+1;
        return frecvent;
    }, {});
}
console.log(numarfrecvent("abecedar"));