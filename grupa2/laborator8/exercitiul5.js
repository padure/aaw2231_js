//1
const students = [
    {id: 1, name: "Felipe Sporer", grade: 5},
    {id: 2, name: "Fernando Reinger", grade: 7},
    {id: 3, name: "Harriet Cronin", grade: 8},
    {id: 4, name: "Mrs. Chester Rau", grade: 9},
    {id: 5, name: "Hazel Mohr", grade: 5},
    {id: 6, name: "Pablo Hansen", grade: 7},
    {id: 7, name: "Patty Cassin", grade: 10}
];
//2
const primulStudentMaiMareCa9 = students.find(student=> student.grade > 9);
//3
const totiStudentiiAuPeste5 = students.every(student=> student.grade > 5);
//4
const celPutinUnStudentCu10 = students.some(student=> student.grade === 10);
//5
const studentsWithStatus = students.map(student=>{
    const newStudent = {...student};
    newStudent.status = newStudent.grade >= 7 ? "Promovat" : "Restanta";
    return newStudent; 
});
//6
console.log(students);
console.log(primulStudentMaiMareCa9);
console.log(totiStudentiiAuPeste5);
console.log(celPutinUnStudentCu10);
console.log(studentsWithStatus);
