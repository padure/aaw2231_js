//Problema 11
function transformaTitlu(text) {
    return text.split(' ').map(word => word.replace(word[0], word[0].toUpperCase()));
}

console.log(transformaTitlu("salut lume!"));