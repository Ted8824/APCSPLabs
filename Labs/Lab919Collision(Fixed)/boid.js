/*
**  Boid Constructor Function
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


  this.update = function(){
    var steeringForce = p5.Vector.sub(this.loc, greenBall.loc);
      // going to store all the distences of the boids to the ball
      // then splice out the boid if the distence is less than 20


      for(var i = 0; i = boids.length; i++){
        var dist = boids[i].loc.dist(greenBall.loc);
        if(dist < 20){
          boids.splice(i, 1);
        }
      }

      //prapels the boids
      this.loc.add(this.vel);
      steeringForce.normalize();  //  changes the magnitud to 1
      steeringForce.mult(0.5);    //  scales the magnitude to 0.5
      this.vel.add(steeringForce);


}

  // chaecks weather or not the boid has collided with the edge of the canvas
 this.checkEdges = function(){
   if(this.loc.x < 0) this.vel.x = -this.vel.x;
   if(this.loc.x > width) this.vel.x = -this.vel.x;
   if(this.loc.y < 0) this.vel.y = -this.vel.y;
   if(this.loc.y > height) this.vel.y = -this.vel.y;
 }

 this.render = function(){
   push() // push or save the current coord system into the stack
   translate(this.loc.x, this.loc.y);
   rotate(this.vel.heading() + radians(90));
   triangle(-5, 0, 5, 0, 0, -15);
   pop()  //  pop or restore the coordianate system from the stack

 }
}
