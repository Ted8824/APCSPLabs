
//  This is a comment
//  The setup function function is called once when your program begins


var snake;
var food;
var seg = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  snake = new Snake(createVector(400, 400), createVector(1, 0));
  food = new Food(createVector(random(800-20), random(800-20)));
}

//  The draw function is called @ 30 fps
function draw() {

  background(20, 20, 20);

  for(var i = 0; i < seg.length; i++){
    seg[i].run();
  }

  snake.run();
  keyPressed();
  food.run();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -1);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, 1);
  }
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1, 0);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1, 0);
  }
}

function snakeFood(){
  var food = new Food(createVector(random(800), random(800)));
}
