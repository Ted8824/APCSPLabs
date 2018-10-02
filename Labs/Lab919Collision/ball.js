/*
**  Ball Constructor Function
** Ted Ikehara
** Aug 21, 2018
*/

function Ball(location, velocity, rad, col){
  // Instance variables
  var mouseLoc
  this.loc = location;
  this.vel = velocity;
  this.rad = rad;
  this.col = col;
  this.acc = createVector(0, 0.1);

  // This function calls other functions
  this.run = function (){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){
    // p5.Vector.sub()  returns a vector
      var steeringForce = p5.Vector.sub(this.loc, redBall.loc);
      mouseLoc = createVector(mouseX, mouseY);
      this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)


  }
  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, rad, rad);
  }
}
