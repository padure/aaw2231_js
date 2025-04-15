const startBTN = document.querySelector(".start");
const stopBTN = document.querySelector(".stop");
const gameElement = document.querySelector(".game");
let game = false;

const buildRocket = async () => {
    gameElement.innerHTML = `<div class="rocket"></div>`;
}

const buildAsteroid = async () => {

}

const startGame = async () => {
    await buildRocket();
    setInterval( buildAsteroid, 3000);
    game = true;    
}

const stopGame = async () => {

}

startBTN.addEventListener('click', startGame);
stopBTN.addEventListener('click', stopGame);
