//
// Ted Ikehara
// Json Sorting lab

// setup code
function setup() {
  loadJSON("data.json", jData);


  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadBars(255);
}

//draw
function draw() {

  if(data){
    bubbleSort();
  }

}

function gotData(jData){
  data = jData;
}

//bubble sort function
function bubbleSort(){

  var temp = 0;
  for(var i = countrydata.length - 1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(countrydata[j].males > countrydata[j + 1].males){
        //swap
        temp = countrydata[j].males;
        countrydata[j].males = countrydata[j + 1].males;
        countrydata[j + 1].males = temp;
      }
    }

  }



}
//select Sortin
function selectSort(){

}
