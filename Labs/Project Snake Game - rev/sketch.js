// Ted Ikehara
// 11/27/2018
// Snake game




var snake;
var scl = 20;
var score = 0;
var food;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  snake = new Snake();
  frameRate(10);
  foodLoc();

}

function draw() {
  background(0);
  fill(0, 0, 255);
  textSize(20);
  text("Score: " + score, 50, 50);



  if (snake.eat(food)) {
    foodLoc();
  }
  snake.update();
  snake.show();
  snake.die();

  fill(255,0,0);
  rect(food.x, food.y, scl, scl);
}

function foodLoc() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}






function mousePressed() {
  snake.total++;
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}
