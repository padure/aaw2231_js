const startBTN = document.querySelector(".start");
const stopBTN = document.querySelector(".stop");
const restartBTN = document.querySelector(".restart");
const gameElement = document.querySelector(".game");
const levelElement = document.querySelector(".level");
const scoreElement = document.querySelector(".score");
const livesElement = document.querySelector(".lives");
const gameOverElement = document.querySelector(".game-over");

let game = false;
let score = 0;
let level = 1;
let lives = 3;
let asteroidInterval = 2000;
let asteroidSpeed = 2;
let lastAsteroidTime = 0;
let rocket;
let asteroids = [];

const buildRocket = () => {
    rocket = document.createElement("div");
    rocket.classList.add("rocket");
    rocket.style.left = "calc(50% - 40px)";
    rocket.style.bottom = "10px";
    rocket.style.position = "absolute";
    gameElement.appendChild(rocket);
};

const moveRocket = (event) => {
    if (!rocket || !game) return;

    const step = 55;
    const gameWidth = gameElement.offsetWidth;
    const rocketWidth = rocket.offsetWidth;
    let currentLeft = rocket.offsetLeft;

    if (event.key === "ArrowLeft" && currentLeft > 0) {
        rocket.style.left = `${Math.max(currentLeft - step, 0)}px`;
    } else if (event.key === "ArrowRight" && currentLeft + rocketWidth < gameWidth) {
        rocket.style.left = `${Math.min(currentLeft + step, gameWidth - rocketWidth)}px`;
    }
};

const createAsteroid = () => {
    const asteroid = document.createElement("div");
    asteroid.classList.add("asteroid");
    asteroid.style.left = `${Math.random() * 90}%`;
    asteroid.style.top = "0px";
    gameElement.appendChild(asteroid);
    asteroids.push({ element: asteroid, top: 0 });
};

const updateGame = (timestamp) => {
    if (!game) return;

    if (timestamp - lastAsteroidTime > asteroidInterval) {
        createAsteroid();
        lastAsteroidTime = timestamp;
    }

    const rocketRect = rocket.getBoundingClientRect();

    asteroids.forEach((asteroid, index) => {
        asteroid.top += asteroidSpeed;
        asteroid.element.style.top = `${asteroid.top}px`;

        const asteroidRect = asteroid.element.getBoundingClientRect();

        if (
            asteroidRect.bottom >= rocketRect.top &&
            asteroidRect.left < rocketRect.right &&
            asteroidRect.right > rocketRect.left
        ) {
            gameElement.removeChild(asteroid.element);
            asteroids.splice(index, 1);
            updateScore();
        } else if (asteroid.top >= gameElement.offsetHeight) {
            gameElement.removeChild(asteroid.element);
            asteroids.splice(index, 1);
            loseLife();
        }
    });

    requestAnimationFrame(updateGame);
};

const updateScore = () => {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    if (score % 10 === 0) {
        level++;
        levelElement.textContent = `Level: ${level}`;
        asteroidInterval = Math.max(500, asteroidInterval - 200);
        asteroidSpeed += 0.5;
    }
};

const loseLife = () => {
    lives--;
    livesElement.textContent = `Lives: ${lives}`;
    if (lives <= 0) {
        stopGame(true);
    }
};

const startGame = () => {
    if (game) return;
    game = true;
    score = 0;
    level = 1;
    lives = 3;
    asteroidInterval = 2000;
    asteroidSpeed = 2;
    lastAsteroidTime = 0;
    asteroids = [];

    scoreElement.textContent = `Score: ${score}`;
    levelElement.textContent = `Level: ${level}`;
    livesElement.textContent = `Lives: ${lives}`;
    gameElement.innerHTML = "";
    gameOverElement.classList.add("hidden");

    buildRocket();
    document.addEventListener("keydown", moveRocket);
    requestAnimationFrame(updateGame);
};

const stopGame = (showGameOver = false) => {
    game = false;
    document.removeEventListener("keydown", moveRocket);
    asteroids.forEach(a => a.element.remove());
    asteroids = [];
    if (showGameOver) {
        gameOverElement.classList.remove("hidden");
    }
};

startBTN.addEventListener("click", startGame);
stopBTN.addEventListener("click", () => stopGame(false));
restartBTN.addEventListener("click", startGame);
