
var balls = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(10);
}

function draw() {
  background(20,20,20,22);
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function loadBalls(num){
	for(var i = 0; i < num; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3, 3), random(-3, 3));
    var rad = random(15, 35);
    var col = color(random(255), random(255), random(255));

	  balls.push(new Ball(loc, vel, rad, col));
  }
  console.log(balls);
}
