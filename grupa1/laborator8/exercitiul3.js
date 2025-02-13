// 1
const people = [
    {name: "Ernest Ziemann", age: 25 , city: "Mrazstad"},
    {name: "Jaime Crooks", age: 25 , city: "New Sierra"},
    {name: "Dorothy Lynch", age: 25 , city: "Ogden"},
    {name: "Ramiro Tromp", age: 25 , city: "Mrazstad"},
    {name: "Victoria O'Reilly", age: 25 , city: "Ogden"}
];
// 2
const grupPeopleByCity = people.reduce((acc, person)=>{
    if(!acc[person.city]) acc[person.city] = [];
    acc[person.city].push(person.name);
    return acc;
}, {});
//Afisare
console.log(grupPeopleByCity);