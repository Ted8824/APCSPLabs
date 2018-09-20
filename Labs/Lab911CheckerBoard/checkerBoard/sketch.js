
var sqr = [];

function setup() {

  var size = 8;

  size = size * 100;

  var cnv = createCanvas(size, size);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);

  loadSqr();

}


function loadSqr(){
  for (var i = 0; i < width; i += 100) {
    for (var j = 0; j < height; j += 100){
      if (i / 100 % 2 === 0 && j / 100 % 2 === 0) {
        fill(0);
      }
      else if (i / 100 % 2 == 1 && j / 100 % 2 === 0) {
        fill(255);
      }
      else if (i / 100 % 2 == 1 && j / 100 % 2 == 1) {
        fill(0);
      }
      else if (i / 100 % 2 === 0 && j / 100 % 2 == 1) {
        fill(255);
      }
        rect(i, j, 100, 100);
  }
  }
  }
