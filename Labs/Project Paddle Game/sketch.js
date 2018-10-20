//Global variables
var balls = [];
var paddle;
var score = 0;
var count = 0;

var count2 = 0;
// load image
var img;
var img2;
var img3;
var img4;
var img5;
//Buttons
var button;
//sounds
var startSound;
var loseSound;
var winSound;
//time
var s;

// setup code
function setup() {
  var cnv = createCanvas(900, 900);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);

  img = loadImage("box.png");
  img2 = loadImage("background.jpg");
  img3 = loadImage("marioBoard.jpg");
  img4 = loadImage("over.jpg");
  img5 = loadImage("win.jpg");

  //button = createButton('Play');
  //button.position(350, 750);
  //button.mousePressed(loadBalls(2));

  //load initial balls
  loadBalls(2);

  //changes frame rate to higher value
  frameRate(2000);

  //plays the start sound
  startSound.setVolume(1.0);
  startSound.play();

  //shows the time
  //s = second();
}

function preload(){
  //load the sounds
  soundFormats('mp3', 'ogg');
  startSound = loadSound('theme.mp3');
  winSound = loadSound('win.mp3');
  loseSound = loadSound('die.mp3');
}

//This is ran with 30FPS
function draw() {

  fill(0, 255, 0);
  textSize(50);
  text('Time: ' + s, 30, 50);

  //runs paddle and balls
  image(img2, 0 , 0);
  paddle.run();
  for (i = 0; i < balls.length; i++){
    balls[i].run();
  }

  fill(0, 255, 0);
  textSize(20);
  text("Score: " + score, 30, 30);

  //acounts for missing balls if any in the code
  for(var i = 0; i < balls.length; i++){
    if(balls[i].loc.y > 900 && balls[i].loc.x > 900){
      count2++;
    }else{

    }
  }

  //win condition
  if(score === 30){
      //this is the text
      image(img5, 0, 0, img5.width * 2.5, img5.height * 4);
      //this stops the sound and play the win sound
      startSound.stop();
      winSound.play();

      // causes error to freeze code
      jasdkfljashkjasd
  }
  //lose condition
  else if(balls.length - count2 === 0){

      image(img4, -350, 0);
      //this stops sound and plays the lose sound
      startSound.stop();
      loseSound.play();

      // causes error to freeze code
      jasdkfljashkjasd
  }

  //Instructions for the game
  fill(255, 140, 0);
  textSize(20);
  text("Instructions: collect 30 balls to win\nhit bottom of paddle to gain more balls\nhit top of paddle to collect\nif all balls are gone you lose", 450, 30);

}

// This function loads the balls and the paddle
function loadBalls(numBalls){
  // This is loading balls
  for (i = 0; i < numBalls; i++){
    var location = createVector(random(800), random(0, 300));
    var velocity = createVector(random(-3, 3), random(-3, 3));
    var r = random(30, 50);
    var col = color(random(255), random(255), random(255));
    balls.push(new Ball(location, velocity, r, col));
  }

  // This loads the paddle
  var r = 55;
  var col = color(255,0,0);
  var mouseLoc = createVector(mouseX, 650);
  paddle = new Paddle(mouseLoc, 20, col);
}
