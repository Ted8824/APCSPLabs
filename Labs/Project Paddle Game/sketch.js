//Global variables
var balls = [];
var paddle;
var score = 0;
var count = 0;
var count2 = 0;
var count3 = 0
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
var powerUp;
//time
var s;
// paddle size
var big = 20;

//loads images and sounds that are needed
function preload(){
  //load the sounds
  startSound = loadSound('theme.mp3');
  winSound = loadSound('win.mp3');
  loseSound = loadSound('die.mp3');
  powerUp = loadSound('power.mp3');

  //load the images
  img = loadImage("box.png");
  img2 = loadImage("background.jpg");
  img3 = loadImage("marioBoard.jpg");
  img4 = loadImage("over.jpg");
  img5 = loadImage("win.jpg");
}

// setup code
function setup() {
  var cnv = createCanvas(900, 900);
  cnv.position((windowWidth-width)/2, 30);

  //load initial balls
  loadBalls(2);

  //changes frame rate to higher value
  frameRate(2000);

  //plays the start sound
  startSound.stop();
  startSound.setVolume(1.0);
  startSound.play();
}

//This is ran with 2000 FPS
function draw() {

  //load the image
  image(img2, 0 , 0);

  fill(0, 255, 0);
  textSize(20);
  text("Score: " + score, 30, 30);

  //play power up sound every ten Balls
  if(score === 10 && count3 === 0){
    powerUp.play();
    count3++;
    big = big + 10;
  }
  if(score === 20 && count3 === 1){
    powerUp.play();
    count3++;
    big = big + 20;
  }

  //runs paddle and balls
  paddle.run();
  for (i = 0; i < balls.length; i++){
    balls[i].run();
  }

  //acounts for missing balls if any in the code
  for(var i = 0; i < balls.length; i++){
    if(balls[i].loc.y > 900 && balls[i].loc.x > 900){
      count2++;
    }else{

    }
  }

  //win condition
  if(score === 50){
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
  text("Instructions: collect 50 boxes to win\nhit bottom of paddle to gain more boxes\nhit top of paddle to collect\nif all boxes are gone you lose", 500, 30);


  fill(255, 140, 0);
  textSize(20);
  text("collect boxes to gain upgrade\nhit bottom of paddle to use upgrade", 175, 30);

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
  paddle = new Paddle(mouseLoc, big, col);
}
