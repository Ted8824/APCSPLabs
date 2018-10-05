/*
**  Paddle Constructor Function
** Ted Ikehara
** Aug 21, 2018
*/

function Paddle(location, size, col){
  // Instance variables
  this.loc = location;
  this.size = size;
  this.col = col;

  // This function calls other functions
  this.run = function(){
    this.checkCollision();
    this.update();
    this.render();
  }

  // This function changes the location of the paddle
  // only
  this.update = function(){

      var mouseLoc = createVector(mouseX, 0);
      this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);

  }

  // This function checks the collision of the numBalls
  this.checkCollision = function(){

    

  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, 650, this.size * 8, this.size);
  }
}
