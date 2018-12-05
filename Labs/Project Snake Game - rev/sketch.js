// Ted Ikehara
// 11/27/2018
// Snake game




var snake;
var snake2;
var scl = 20;
var food;
var img;
var img2;
let counter = 0;

function preload(){
  img = loadImage("sn.jpg");
  img2 = loadImage("apple.jpg");
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  snake = new Snake();
  snake2 = new Snake();
  frameRate(10);
  foodLoc();



  var timer = select('#timer');
  timer.html('0'); //insert text
  function timeIt(){
    counter ++;
    timer.html(counter);
  }

  setInterval(timeIt, 1000);//native function 1000ms =1 s
  //request animationframe is also another func
}


function draw() {
  background(20,20,20);
  fill(0, 0, 255);
  textSize(20);
  text("Player1, Score: " + snake.score, 50, 50);
  text("Player2, Score: " + snake2.score, 625, 50);



  if (snake.eat(food) || snake2.eat(food)) {
    foodLoc();
  }

  snake.run();
  snake.die();
  snake2.run();
  snake2.die();
  if(snake.death){
    textAlign(CENTER, CENTER);
    text("Player 2 Wins", 400, 450);
    asdjfk
  } else if(snake2.death){
    textAlign(CENTER, CENTER);
    text("Player 1 Wins", 400, 450);
    asdfjl
  }


  fill(255,0,0);
  image(img2, food.x, food.y, scl, scl);
}

function foodLoc() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}






function mousePressed() {
  snake.total++;
  snake2.total++;
}

//direction of key presses
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if ((keyIsPressed == true) && (key == 'W')) {
    snake2.dir(0, -1);
  } else if ((keyIsPressed == true) && (key == 'S')) {
    snake2.dir(0, 1);
  } else if ((keyIsPressed == true) && (key == 'D')) {
    snake2.dir(1, 0);
  } else if ((keyIsPressed == true) && (key == 'A')) {
    snake2.dir(-1, 0);
  }
}
