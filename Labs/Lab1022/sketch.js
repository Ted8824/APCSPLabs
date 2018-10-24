//Ted Ikehara
//Bubble sort
//10/23/18

var text;
var text2;
var temp;



function preLoad(){
  text = loadStrings('words.txt');
}

function setup(){
  preLoad();
  bubbleSort(text);
}

//Buble sorting meathod
function bubbleSort(t){
  for(var i = t.length - 1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(t[j] > t[j + 1]){
        //swap text
        temp = t[j];
        t[j] = t[j + 1];
        t[j + 1] = temp;
      }
    }
  }
  t = text2;
  console.log(text2);
}
