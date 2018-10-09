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

      var mouseLoc = createVector(mouseX - this.size * 4, 0);
      this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);

  }

  // This function checks the collision of the Balls
  this.checkCollision = function(){
    for(var i = 0; i < balls.length; i++){
      if (balls[i].loc.y >= this.size && balls[i].loc.y < 650 && balls[i].loc.x >= mouseX - this.size * 4 && balls[i].loc.x <= mouseX + this.size * 4) {
          balls[i].vel.y = -balls[i].vel.y;
      }
    }


  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, 650, this.size * 8, this.size);
  }
}
