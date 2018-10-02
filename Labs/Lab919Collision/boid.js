/*
**  Ball Constructor Function
** Ted Ikehara
** Aug 21, 2018
*/

function Boid(location, velocity, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.col = col;

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


      for(var i = 0; i < boids.length; i++){
        var dist = boids[i].loc.dist(Ball.loc);
      if(dist < 20){
        boids.splice(i, 1);
      }
    }

      if(this !== redBall){
        //this.vel.add(this.acc);

        //var dist = Ball.loc.dist(this.loc);
        //if(dist < 200){
        this.vel.limit(5)
        this.loc.add(this.vel);
        steeringForce.normalize();  //  changes the magnitud to 1
        steeringForce.mult(0.25);    //  scales the magnitude to 0.5
        this.vel.add(steeringForce);
      }
      //}

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

    push() // push or save the current coord system into the stack
    translate(this.loc.x, this.loc.y);
    rotate(this.vel.heading() + radians(90));
    triangle(-5, 0, 5, 0, 0, -15);
    pop()  //  pop or restore the coordianate system from the stack

  }
}
