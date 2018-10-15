//Global variables
var balls = [];
var paddle;
var score = 0;
var count = 0;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(2);
}

//This is ran with 30FPS
function draw() {

  //runs paddle and balls
  background(20, 20, 20);
  paddle.run();
  for (i = 0; i < balls.length; i++){
    balls[i].run();
  }

  fill(0, 255, 0);
  textSize(20);
  text("Score: " + score, 30, 30);

  if(score >= 30){

      textSize(25);
      text("congratulations you win to play again refresh page", 125, 300);
      // causes error to freeze code
      jasdkfljashkjasd
  }

}

// This function loads the balls and the paddle
function loadBalls(numBalls){
  // This is loading balls
  for (i = 0; i < numBalls; i++){
    var location = createVector(random(800), random(0, 300));
    var velocity = createVector(random(-3, 3), random(-3, 3));
    var r = random(10, 20);
    var col = color(random(255), random(255), random(255));
    balls.push(new Ball(location, velocity, r, col));
  }

  // This loads the paddle
  var r = 55;
  var col = color(255,0,0);
  var mouseLoc = createVector(mouseX, 650);
  paddle = new Paddle(mouseLoc, 20, col);
}
