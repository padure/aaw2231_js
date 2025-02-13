//1
const students = [
    {id: 1, name: "Jerald Jerde", grade: 7},
    {id: 2, name: "Gina Zieme", grade: 5},
    {id: 3, name: "Becky Beatty", grade: 8},
    {id: 4, name: "Ada Kris", grade: 9},
    {id: 5, name: "Delia Ryan", grade: 5},
    {id: 6, name: "Laurence Zieme", grade: 10}
];
//2
const primulStudentCuNotaMaiMareDe9 = students.find(student => student.grade > 9);
//3
const totiStudentiiAuPeste5 = students.every(student => student.grade >= 5);
//4 
const celPutinUnStudentAre10 = students.some(student => student.grade == 10);
//5
const studentiPromovati = students.map(student => {
    const newStudentData = {...student};
    newStudentData.status = newStudentData.grade >= 7 ? "Promovat" : "Restanta";
    return newStudentData;
});
//6
console.log(primulStudentCuNotaMaiMareDe9);
console.log(totiStudentiiAuPeste5);
console.log(celPutinUnStudentAre10);
console.log(studentiPromovati);
console.log(students);