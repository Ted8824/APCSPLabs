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

      var mouseLoc = createVector(mouseX, 650);
      this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);

  }

  // This function checks the collision of the Balls
  this.checkCollision = function(){
    for(var i = 0; i < balls.length; i++){
      if (balls[i].loc.y + balls[i].rad >= 650 &&
        balls[i].loc.x + balls[i].rad > this.loc.x - this.size * 4
        && balls[i].loc.x + balls[i].rad < this.loc.x - this.size * 4 + this.size * 8
        && balls[i].loc.y + balls[i].rad <= 650 + this.size) {

        if(balls[i].vel.y > 0){
          balls.splice(i, 1);
          score = score + 1;
          //calculates scrore when ball is spliced
        }
        // if hits the bottom spon more balls
      else{
        loadBalls(2);
        count++;
        
        }

      }
    }


  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    image(img3, this.loc.x - this.size * 4, 650, this.size * 8, this.size);
  }
}
