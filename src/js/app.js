const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

const bird = new Image();
const bg = new Image(); // Создание объекта
const fg = new Image(); // Создание объекта
const pipeUp = new Image(); // Создание объекта
const pipeBottom = new Image(); // Создание объекта

bird.src = "src/img/flappy_bird_bird.png"; // Указание нужного изображения
bg.src = "/src/img/flappy_bird_bg.png"; // Аналогично
fg.src = "/src/img/flappy_bird_fg.png"; // Аналогично
pipeUp.src = "/src/img/flappy_bird_pipeUp.png"; // Аналогично
pipeBottom.src = "/src/img/flappy_bird_pipeBottom.png"; // Аналогично

// Звуковые файлы
const fly = new Audio(); // Создание аудио объекта
const score_audio = new Audio(); // Создание аудио объекта

fly.src = "/src/audio/fly.mp3"; // Указание нужной записи
score_audio.src = "/src/audio/score.mp3"; // Аналогично

const gap = 90;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
  yPos -= 25;
  fly.play();
}




