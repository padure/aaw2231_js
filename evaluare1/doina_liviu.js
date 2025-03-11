//21
const arr = [1, 2, 3, 4, 5, 6, 2, 3, 1];
const eliminaPrimaAparitie = (arr, element) => {
    const index = arr.indexOf(element);
    if(index !== -1) return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
console.log(arr);
console.log(eliminaPrimaAparitie(arr, 3));