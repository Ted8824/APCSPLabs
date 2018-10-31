//
// Ted Ikehara
// Color Sorting lab

//Global variables
var bars = [];
var bars1 = [];
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadBars(255);
  bubbleSort();
}

//draw
function draw() {
  // Runs the boids and the ball
  for (i = 0; i < bars.length; i++){
    bars[i].run();
  }
  for (i = 0; i < bars1.length; i++){
    bars1[i].run();
    if(bars1[i].loc.y < 200){
    bars1[i].loc.y = bars1[i].loc.y + 200;
    }
  }
}

//loads the bars
function loadBars(num){
  for(var i = 0; i < num; i++){
    var h = 100;
    var w = 800/num;
    var loc = createVector((w * i), 100);
    var col = color(random(255), random(255), random(255));
    bars.push(new colorBar(w, h, loc, col));
    bars1.push(new colorBar(w, h, loc, col));
  }
}

//bubble sort function
function bubbleSort(){
  var temp = 0;
  for(var i = bars.length - 1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(bars[j] > bars[j + 1]){
        //swap text
        temp = bars[j];
        bars[j] = bars[j + 1];
        bars[j + 1] = temp;
      }
    }

  }



}
//select Sortin
function selectSort(){

}
