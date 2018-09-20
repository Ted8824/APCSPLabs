/* Ball Constructor Function
** Ted Ikehara
** Aug 22, 2018
*/


function Ball(location, velocity, rad, col){
	this.loc = location;
	this.vel = velocity;
	this.rad = rad;
	this.col = col;


this.run = function(){
	this.checkEdges();
	this.update();
	this.render();
}

this.update = function(){
	this.loc.X = this.loc.X + this.vel.X;
	this.loc.Y = this.loc.Y + this.vel.Y;
}


this.checkEdges = function(){
	if(this.loc.X < 0) this.vel.X = -this.vel.X;
	if(this.loc.X > width) this.vel.X = -this.vel.X;
	if(this.loc.Y < 0) this.vel.Y = -this.vel.Y;
	if(this.loc.Y > height) this.vel.Y = -this.vel.Y;
}


this.render = function(){
	fill(this.col);
	ellipse(this.loc.X, this.loc.Y, rad, rad);

}

}
