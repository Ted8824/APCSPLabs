
//  This is a comment
//  The setup function function is called once when your program begins

var barWidth = 20;
var lastBar = -1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  background(200, 200, 200);



  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
}

//  The draw function is called @ 30 fps
function draw() {
  fill(0, 100, 0);
  rect(100, 300, 50, 50);

  fill(120, 200, 3);
  ellipse(200, 300, 50, 50);

  fill(120, 200,3);
  ellipse(200, 350, 50, 50);




  var whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    var barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }


}
