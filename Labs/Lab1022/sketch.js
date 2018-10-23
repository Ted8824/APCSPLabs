//Ted Ikehara
//10/23/18

var text;
var temp;



function preLoad(){
  text = loadStrings('words.txt');
}

function setup(){
  preLoad();
  bubbleSort();
  console.log(text);
}

function bubbleSort(){
  for(var i = text.length - 1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(text[j] > text[j + 1]){
        //swap text
        temp = text[j];
        text[j] = text[j + 1];
        text[j + 1] = temp;
      }
    }
  }
}
