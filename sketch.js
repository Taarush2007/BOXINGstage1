var arena;
var player1;
var player2;
var score1 = 0;
var score2 = 0;

function preload(){

arena = loadImage("Pictures/boxing ring.jpg");

}



function setup() {
  createCanvas(windowWidth,windowHeight);
 player1 = createSprite(600, 500, 50, 50);
 player2 = createSprite(700, 500, 50, 50);
}

function draw() {
  background(arena);
  textSize (30)
  
  fill ("red")
  text("PLAYER 1:"+score1,100,50)

  fill ("White")
  text("PLAYER 2:"+score1,1000,50)

  drawSprites();
}