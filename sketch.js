var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player, game;
var playerCount, gameState;
var car1_Img
var car2_Img
var PISTA
var car1, car2
var cars = []



function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_Img = loadImage("./assets/car1.png")
  car2_Img = loadImage("./assets/car2.png")
  PISTA = loadImage("./assets/PISTA.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState()
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);

  if (playerCount == 2) {
    game.updateState(1)
  }
  if (gameState == 1) {
    game.play()
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
