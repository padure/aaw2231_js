//Expersii regulate
const str1 = "Modi et voluptatum qui ex minus veritatis. Dolores qui qui nobis sit rerum vel tempore ut unde. Reiciendis atque assumenda asperiores. Rem quo commodi repellat ut maxime repudiandae et officia. Quia et modi ut nihil similique tempore enim quia.";

const exp_reg1 = /QUI/ig;

// console.log(str1.match(exp_reg1));
// console.log(exp_reg1.test(str1));
// console.log(exp_reg1.exec(str1));

const str2 = "Ana are 3 mere si 2 pere";
const exp_reg2 = /\d+/g;
const newStr2 = str2.replace(exp_reg2, 'X');
const arr = str2.split(/\d+/);

// console.log(str2.match(exp_reg2));
// console.log(newStr2);
// console.log(arr);
// Validare Email
const emailRegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegExp.test("te.st@gmail.com"));

//Validare Telefon
//+37379000000
const tfRegExp1 = /^\+373\d{8}$/;
const tfRegExp2 = /^\+373\[0-9]{8}$/;
