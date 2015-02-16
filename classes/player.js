function Player(x,y) {
  this.x        = x;
  this.y        = y;
  this.vely     = 0;
  this.ms       = 4;
  this.height   = 60;
  this.width    = 20;
  this.grounded = false;

  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("#000").beginFill("#fda").drawCircle(this.x + 10,this.y + 10, 10);
  this.shape.graphics.beginFill("#000").drawRect(this.x, this.y + 20, 20, 40);
}

Player.prototype.update = function(l) {
  var x = this.x;
  var y = this.y;

  this.y += this.vely;
  // A (Left)
  if(input.isDown(65)){
    this.x -= this.ms;
  }
  // D (Right)
  if(input.isDown(68)){
    this.x += this.ms;
  }
  if(this.grounded === true){
    // Space (Jump)
    if(input.isDown(32)){
      this.vely = -15
      this.grounded = false;
    }
  }
  else{
    for(var i = 0; i < l.platforms.length; i++){
      pl = platforms[i];
      if(collision(this, pl) === true){
        this.x       = x;
        this.y       = y;
        if((this.vely) > 0) {
          this.y = pl.y - this.height;
          this.grounded = true;
        }
        this.vely    = 0;
        break;
      }
      else{
        if(this.vely < 10){
          this.vely += 0.2;
        }
      }
    }
  }


  this.shape.x = this.x;
  this.shape.y = this.y;
};