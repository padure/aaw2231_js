// Instructiuni repetitive
// For
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// While
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Do-while
i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
// for in
let user = {
    name: 'John',
    age: 30
};
for (let key in user) {
    console.log(user[`${key}`], key);
}