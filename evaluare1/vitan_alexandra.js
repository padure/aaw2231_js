//problema 25
const esteAlfanumeric=(text)=>{
    return /^[a-zA-Z0-9]$/.test(text);
}
console.log(esteAlfanumeric('Test123'));
console.log(esteAlfanumeric('Salut!'));