// Instructiuni repetitive
//For
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//While
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
//Do While
i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
//For in
let user = {
    name: 'John',
    age: 30
};
for (let prop in user) {
    console.log(prop, user[prop]);
}

//For of
let cars = ['BMW', 'Audi', 'VW'];
for (let car of cars) {
    console.log(car);
}