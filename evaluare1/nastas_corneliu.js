//ploblema 29

function inlocuiesteCaracter(text, vechi, nou) {
    const reg = new RegExp(vechi, "g");
    return str = text.replace(reg, nou);
}

console.log(inlocuiesteCaracter("banana", 'a', "e"));