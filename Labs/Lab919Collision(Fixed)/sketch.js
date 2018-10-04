//
// Ted Ikehara
// Collision lab

//Global variables
var boids = [];
var greenBall;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBoids(50);
}

function draw() {
  // Runs the boids and the ball
  background(20, 20, 20, 30);
  greenBall.run();

  for (i = 0; i < boids.length; i++){
  boids[i].run();

  }
}

function loadBoids(num){

// Creates boids and loads into array

  for (i = 0; i < num; i++){
	  var location = createVector(random(width), random(height));
	  var velocity = createVector(random(-3, 3), random(-3, 3));
    var col = color(random(255), random(255), random(255));
    boids.push(new Boid(location, velocity, col));
}

// This loads the chaser in the same function as loading the boids

    var location = createVector(width/2, height/2);
    var velocity = createVector(0,0);
    var r = 50;
    var col = color(0,255,0);
    greenBall = new Ball(location, velocity, r, col);
}
