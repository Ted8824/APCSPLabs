
var balls = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(1000);
}

function draw() {
  background(20,20,20);
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function loadBalls(num){
	for(var i = 0; i < num; i++){
    var x = random(width);
    var y = random(height);
    var rad = random(15, 45);
    var col = color(random(255), random(255), random(255))
	  balls.push(new Ball(x, y, rad, col));
  }
}
