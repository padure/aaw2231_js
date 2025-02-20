//problema 22
let extrageValori = (arr, cheie)=>{
    return arr.map(obj =>obj[cheie])
};

const produs=[
    {nume: "Laptotp", pret:20000},
    {nume: "Mouse", pret:200},
    {nume: "Phone", pret:13000},
];

console.log(extrageValori(produs,"nume"));
console.log(extrageValori(produs,"prett"));