//
// Ted Ikehara
// Json Sorting lab

//variables
var data;
var males = [];
// setup code
function setup() {
  loadJSON("data.json", gotData);


  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
}

//draw
function draw() {

  fill(255, 0, 0);
  rect(200, 200, 70, males[1]);

}

function gotData(jData){
  data = jData;

  if(data){
    bubbleSort();

    for(var i = 0; i < males.length; i++){
      console.log(males[i]);
    }
  }
}

//bubble sort function
function bubbleSort(){

  var temp = 0;
  for(var i = data.countrydata.length - 1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(data.countrydata[j].males > data.countrydata[j + 1].males){
        //swap
        temp = data.countrydata[j].males;
        data.countrydata[j].males = data.countrydata[j + 1].males;
        data.countrydata[j + 1].males = temp;
      }
    }

  }
  for(var i = 0; i < data.countrydata.length; i++){
    males.push(data.countrydata[i]);
  }
}
//select Sortin
function selectSort(){

}
