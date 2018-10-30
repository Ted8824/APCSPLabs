//
// Ted Ikehara
// Color Sorting lab

//Global variables
var bars = [];

// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBars(50);
}

//draw
function draw() {
  // Runs the boids and the ball
  background(20, 20, 20, 30);

  for (i = 0; i < bars.length; i++){
    bars[i].run();

  }
}

//loads the bars
function loadBars(){

}
