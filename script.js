<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', function() {
  // Глобальный объект игры
  const game = {
    lives: 10,
    timerId: null,
    minSpeed: window.innerWidth <= 768 ? 400 : 700,
    gameSpeed: 1700,
    board: 16,
    startTime: 0,
=======
// Глобальный объект игры
const game = {
  lives: 3,
  timer: 0,
  gameSpeed: 1700,
  minSpeed: window.innerWidth <= 768 ? 400 : 700,
  board: 16
};
>>>>>>> 1efdadc70bc2051e9b41d077167daf560c6d77d1

  };
  
  // Получаем элементы DOM
  const startScreen = document.getElementById("start-screen"),
        gameContainer = document.getElementById("game-container"),
        gameOverScreen = document.getElementById("game-over"),
        grid = document.getElementById("grid"),
        livesDisplay = document.getElementById("lives"),
        timerDisplay = document.getElementById("timer"),
        finalTime = document.getElementById("final-time"),
        startBtn = document.getElementById("start-btn"),
        restartBtn = document.getElementById("restart-btn");
  
  // Звуки
  const sounds = {
    hit: document.getElementById("hitSound"),
    miss: document.getElementById("missSound"),
    gameOver: document.getElementById("gameOverSound"),
    hitHeart: document.getElementById("hitHeartSound"),
    missHeart: document.getElementById("missHeartSound"),
  };
  
  // Список ячеек
  const cells = [];
  
  // Функция создания грида
  function createGrid() {
    grid.innerHTML = "";
    cells.length = 0;
    for (let i = 0; i < game.board; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
      cells.push(cell);
    }
  }
  
  // Функция получения случайной ячейки
  function getRandomCell() {
    return cells[Math.floor(Math.random() * cells.length)];
  }
  
  // Функция отображения элемента (крот или сердце)
  function spawnElement(type) {

<<<<<<< HEAD
    if (game.lives <= 0) {
=======
  setTimeout(() => {
    if (cell.contains(element) && type == "mole" && 
    element.dataset.clicked == "false") {
      element.dataset.clicked = "true";
      game.lives--;
      element.classList.add("mole-hide");
>>>>>>> 1efdadc70bc2051e9b41d077167daf560c6d77d1
      checkGameOver();
      return;
    }
<<<<<<< HEAD

    const cell = getRandomCell();
  
    const element = document.createElement("img");
    element.src = type === "mole" ? "assets/mole.png" : "assets/heart.png";
    element.classList.add(type);
    element.dataset.clicked = "false"; // data-clicked='false'
    cell.appendChild(element);
  
    element.addEventListener("click", () => {
      if (element.dataset.clicked == "false")
        handleClick(type, element);
      else {
        console.log("На элемент уже нажали");
      }
    });
  
    setTimeout(() => {
      if (cell.contains(element) && type == "mole" && 
      element.dataset.clicked == "false") {
        element.dataset.clicked = "true";
        game.lives--;
        checkGameOver();
        livesDisplay.textContent = "❤️".repeat(game.lives); 
        livesDisplay.classList.add("blink");
        sounds.miss.play();
        setTimeout(()=>{
          livesDisplay.classList.remove("blink");
        }, 300);// даем пройти анимации мигания сердец
      }
      if(type == "heart" &&
      element.dataset.clicked == "false") {
        element.dataset.clicked = "true";
        element.classList.add("heart-blink");
        sounds.missHeart.play();
      }
      else element.classList.add("mole-hide");
      setTimeout(() => {
        delete element.dataset.clicked; // Удаляем атрибут
        element.remove(); // Удаляем сам элемент
    }, 500);
    }, Math.max(game.minSpeed, game.gameSpeed));
  
    setTimeout(gettingFaster, game.gameSpeed);
=======
    else if(type == "heart" &&
    element.dataset.clicked == "false") {
      element.dataset.clicked = "true";
      element.classList.add("heart-blink");
      sounds.missHeart.play();
    }

    setTimeout(() => {
      delete element.dataset.clicked; // Удаляем атрибут
      element.remove(); // Удаляем сам элемент
  }, 500);
  }, Math.max(game.minSpeed, game.gameSpeed));

  setTimeout(gettingFaster, game.gameSpeed);
}

// Функция обработки кликов по кроту или сердцу
function handleClick(type, element) {
  console.log(`Нажатие: ${type}`); // Отладка
  if (element.dataset.clicked == "true") {
    console.log("ВЫХОД! УЖЕ НАЖАЛИ");
    return;
>>>>>>> 1efdadc70bc2051e9b41d077167daf560c6d77d1
  }
  
  // Функция обработки кликов по кроту или сердцу
  function handleClick(type, element) {
    if (element.dataset.clicked == "true") {
      console.log("ВЫХОД! УЖЕ НАЖАЛИ");
      return;
    }
    element.dataset.clicked = "true";
    element.classList.add(type === "mole" ? "mole-hit" : "heart-glow");
    setTimeout(() => {
      delete element.dataset.clicked; // Удаляем атрибут
      element.remove(); // Удаляем элемент
    }, 500);
  
    if (type === "mole") {
      console.log("Крот кликнут!");
      sounds.hit.play();
    } else {
      console.log("Сердце кликнуто!");
      game.lives++;
      livesDisplay.textContent = "❤️".repeat(game.lives);
      livesDisplay.classList.add("blink");
      setTimeout(()=>{livesDisplay.classList.remove("blink");}, 300);// даем пройти анимации мигания сердец
      sounds.hitHeart.play();
    }
  }
<<<<<<< HEAD
  
  
  // Функция старта игры
  function startGame() {
    startScreen.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    game.lives = 3;
    game.startTime = Date.now();
    game.timerId = setInterval(updateTime, 1000);
    game.gameSpeed = 1700;
    livesDisplay.innerText = "❤️".repeat(game.lives);
  
    setTimeout(gettingFaster, game.gameSpeed);
=======
}


// Функция старта игры
function startGame() {
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  game.lives = 3;
  game.timer = 0;
  game.gameSpeed = 1700;
  livesDisplay.innerText = "❤️❤️❤️";

  setTimeout(gettingFaster, game.gameSpeed);
}


// Функция уменьшения ускоряющегося спавна
function gettingFaster() {
  game.timer++;
  timerDisplay.innerText = `Время: ${Math.floor(game.timer / 60)}:${(game.timer % 60).toString().padStart(2, "0")}`;
  spawnElement(Math.random() < 0.9 ? "mole" : "heart");
   // Уменьшаем скорость, но не даем ей упасть ниже 600 мс
  game.gameSpeed = Math.max(game.minSpeed, game.gameSpeed - 50);
  console.log("Новая скорость:", game.gameSpeed);
}

// Функция проверки конца игры
function checkGameOver() {
  if (game.lives <= 0) {
    gameOverScreen.classList.remove("hidden");
    gameContainer.classList.add("hidden");
    if (game.timer / 60 >= 1) {
      finalTime.innerText = 
      `Ты продержался ${Math.floor(game.timer / 60)} мин. ${(game.timer % 60)} сек.`;
    }
    else {
      finalTime.innerText = `Ты продержался ${game.timer} сек.`;
    }
    sounds.gameOver.play();
>>>>>>> 1efdadc70bc2051e9b41d077167daf560c6d77d1
  }
  
  
  // Функция ускоряющегося спавна
  function gettingFaster() {

    spawnElement(Math.random() < 0.9 ? "mole" : "heart");// 0 0.1 0.11 ... 0.999999
     // Уменьшаем скорость, но не даем ей упасть ниже 600 мс
    game.gameSpeed = Math.max(game.minSpeed, game.gameSpeed - 50);
    console.log("Новая скорость:", game.gameSpeed);
  }
  
  // Функция проверки конца игры
  function checkGameOver() {
    if (game.lives <= 0) {
      clearInterval(game.timerId);
      game.timerId = null;
      gameOverScreen.classList.remove("hidden");
      gameContainer.classList.add("hidden");
      const currentTime = Date.now();
      finalTime.innerText = `Ты продержался ${Math.floor(((currentTime - game.startTime) / 1000)/60)}:${Math.floor(((currentTime - game.startTime) / 1000)%60).toString().padStart(2, "0")} сек.`;
      sounds.gameOver.play();
    }
  }
  
  // Функция рестарта игры
  function restartGame() {
    gameOverScreen.classList.add("hidden");
    timerDisplay.innerText = "Время: 0:00";
    startGame();
  }
  
  function updateTime() {
    const currentTime = Date.now();
    timerDisplay.innerText = `Время: ${Math.floor(((currentTime - game.startTime) / 1000)/60)}:${Math.floor(((currentTime - game.startTime) / 1000)%60).toString().padStart(2, "0")}`; 

  }

  // Запускаем игру
  startBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", restartGame);
  createGrid();
  });