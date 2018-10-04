/*
**  Ball Constructor Function
** Ted Ikehara
** Aug 21, 2018
*/

function Ball(location, velocity, rad, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = rad;
  this.col = col;
  this.acc = createVector(0, 0.1);

  // This function calls other functions
  this.run = function (){
    this.update();
    this.render();
  }

  // Follows the mouse
  this.update = function(){
    // p5.Vector.sub()  returns a vector
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, rad, rad);
  }
}
