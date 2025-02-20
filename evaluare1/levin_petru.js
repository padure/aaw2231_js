//problema 7
const numere = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const eliminaDuplicate = (numere) =>{
    return [...new Set(numere)];
}
const arrayFaraDublicare = eliminaDuplicate(numere);
console.log(arrayFaraDublicare);