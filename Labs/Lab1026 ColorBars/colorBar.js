//Color bar
//Ted Ikehara

function colorBar(w, size, loc, color){
  this.loc = loc;
  this.size = size;
  this.color = color
  this.w = w;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    fill(color);
    rect(this.loc.x, this.loc.y, w, size);
  }
}
