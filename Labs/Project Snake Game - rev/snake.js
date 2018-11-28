// Ted Ikehara
// 11/27/2018
// Snake game


// this is the snake constructor function

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.seg = [];

// this checks if the food has been eaten and counts score

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      score++;
      return true;
    } else {
      return false;
    }
  }


//this is the direction function for the snake

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

//this updates the segments of the rect

  this.update = function() {
    for (var i = 0; i < this.seg.length - 1; i++) {
      this.seg[i] = this.seg[i + 1];
    }
    if (this.total >= 1) {
      this.seg[this.total - 1] = createVector(this.x, this.y);
    }

// multiplied by scale so will move on a grid

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

// adds the other segments
//and renders the not head segments

  this.show = function() {
    fill(0,255,0);
    for (var i = 0; i < this.seg.length; i++) {
      rect(this.seg[i].x, this.seg[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);

  }

// this checks for death

  this.die = function() {
    for (var i = 0; i < this.seg.length; i++) {
      var pos = this.seg[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        fill(11, 226, 119);
        textSize(100);
        text("Game Over", 150, 350);
        death = true;
        //causes error in program and freezes interval
        asjdfkl;asjdf;jas

      }
    }
  }

}
