//Global variables
var boids = [];

// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBoids(50);
}
function draw() {
  background(20, 20, 20, 30);
  redBall.run();
  for (i = 0; i < boids.length; i++){

    boids[i].run();

  }
}


function loadBoids(numBoids){
  for (i = 0; i < numBoids; i++){
	  var location = createVector(random(width), random(height));
	  var velocity = createVector(random(-3, 3), random(-3, 3));
    var col = color(255,0,0);
    boids.push(new Boid(location, velocity, col));
}
var location = createVector(width/2, height/2);
var velocity = createVector(0,0);
var r = 35;
var col = color(0,255,0);
redBall = new Ball(location, velocity, r, col);
}
