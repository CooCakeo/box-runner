let gameRunning = true;
let alertShown = false;

const player = document.getElementById("player");
let y = 0;
let velocity = 0;

const jumpPower = 12;
const gravity = 0.7;

const scoreDisplay = document.getElementById("score"); //keeps it like that forever.
let score = 0; // lenient variable that can change over time, unlike const which is constant and cannot be changed

const endingScreen = document.getElementById("ending-screen");

const obstacle = document.getElementById("obstacle");
document.body.focus();
let obstacleX = 600;
let obstacleSpeed = 5;

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && y === 0 && gameRunning) {
    velocity = jumpPower;
  }
});

// game loop |below this|
setInterval(() => {
  velocity = velocity - gravity;
  y = y + velocity;
  if (gameRunning === true) {
    score += 1;
    // "score = score + 1;" is the same as the line above
    scoreDisplay.textContent = "Score: " + score;

    if (score % 100 === 0) {
      obstacleSpeed += 0.5;
    }
  }

  if (y < 0) {
    y = 0;
    velocity = 0;
  }

  player.style.bottom = y + "px";

  // --- OBSTACLE MOVEMENT ---
  obstacleX -= obstacleSpeed;
  obstacle.style.left = obstacleX + "px";
  if (obstacleX < 5) {
    obstacleX = 570;
  }

  if (gameRunning === false) {
    endingScreen.style.display = "block";
  }

  // Check collision
  if (
    obstacleX < 80 && // Obstacle near player horiontally
    obstacleX > 20 &&
    y < 40 // player is low enough to hit
  ) {
    gameRunning = false;
  }

  if (!gameRunning && !alertShown) {
    obstacleSpeed = 0;
    s;
    alertShown = true;
  }
}, 20);

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyR") {
    location.reload();
  }
});

const restartbutton = document.getElementById("restart");
restartbutton.addEventListener("click", () => {
  location.reload();
});

//int(input('eight'))
//String
//int
