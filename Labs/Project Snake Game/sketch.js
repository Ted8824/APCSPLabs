
//  This is a comment
//  The setup function function is called once when your program begins

var w = 20;
var snake;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  snake = new Snake(createVector(400, 400), createVector(1, 0));


}

//  The draw function is called @ 30 fps
function draw() {

  background(20, 20, 20);
  snake.run();

}
