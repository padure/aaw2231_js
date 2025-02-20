//problema20
const genereazaParola = (lungime) => {
    const caractereMici = 'abcdefg';
    const caractereMari = 'ABCDEFG';
    const cifre = '12345';
    const simboluri = '*&^%$#';
    const toateCaracterele = caractereMici + caractereMari + cifre + simboluri;
    let parola = '';
    for (let i = 0; i < lungime; i++) {
        const indexAleator = Math.floor(Math.random() * toateCaracterele.length );
        parola += toateCaracterele[indexAleator]
    }
    return parola;
}
console.log(genereazaParola(16));