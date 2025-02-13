//1
const people = [
    {name: "Kathryn Gutmann DDS", age: 25, city: "Mekhifort"},
    {name: "Ryan Nitzsche V", age: 19, city: "Greenwood"},
    {name: "Carole Hand", age: 25, city: "Mekhifort"},
    {name: "Victoria Haley", age: 24, city: "Lake Tadland"},
    {name: "Lynette Greenfelder", age: 25, city: "Monroe"},
    {name: "Myra Keeling", age: 35, city: "Greenwood"}
];

//2
const grupPeopleByCity = people.reduce((acc, person)=>{
    if(!acc[person.city]){
        acc[person.city] = []
    }
    acc[person.city].push(person.name);
    return acc;
}, {});
console.log(grupPeopleByCity);