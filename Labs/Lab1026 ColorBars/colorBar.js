//Color bar
//Ted Ikehara

function colorBar(w, size, loc, r, g, b){
  this.loc = loc;
  this.size = size;
  this.color = color(r,g,b);
  this.w = w;
  this.b = b;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    fill(this.color);
    rect(this.loc.x, this.loc.y, w, size);
  }
}
