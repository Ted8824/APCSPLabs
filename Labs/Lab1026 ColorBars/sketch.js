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
  // Runs the color bars top and bot
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
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var h = 100;
    var w = 800/num;
    var loc = createVector((w * i), 100);
    bars.push(new colorBar(w, h, loc, r, g, b));
    bars1.push(new colorBar(w, h, loc, r, g, b));
  }
}

//bubble sort function
function bubbleSort(){
  var temp = 0;
  for(var i = bars.length - 1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(bars[j].b > bars[j + 1].b){
        //swap text
        temp = bars[j].b;
        bars[j].b = bars[j + 1].b;
        bars[j + 1].b = temp;
      }
    }

  }



}
//select Sortin
function selectSort(){

}
