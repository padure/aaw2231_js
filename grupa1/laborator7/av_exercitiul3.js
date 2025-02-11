const people = [
    {name: "Bernice Schowalter Sr.", age: 25, city: "Sunnyside"},
    {name: "Madeline Hauck", age: 25, city: "Hyattside"},
    {name: "Amber Feest DDS", age: 25, city: "Broomfield"},
    {name: "Brooke Dibbert", age: 25, city: "Sunnyside"},
    {name: "Angela Nikolaus", age: 25, city: "Hyattside"}
];
const result = Object.groupBy(people, ({ city }) => city);
console.log(result);