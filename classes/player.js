function Player(x,y) {
  this.x        = x;
  this.y        = y;
  this.velx     = 0;
  this.vely     = 0;
  this.speed       = 25;
  this.height   = 60;
  this.width    = 20;
  this.grounded = false;
  this.friction = 0.8;
  this.gravity  = 1;

  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("#000").beginFill("#fda").drawCircle(this.x + 10,this.y + 10, 10);
  this.shape.graphics.beginFill("#000").drawRect(this.x, this.y + 20, 20, 40);

  this.update = function(l){
    // A (Left)
    if(input.isDown(65)){
      if (this.velx > -this.speed) {
        this.velx -= this.speed/5;
      }
    }
    // D (Right)
    if(input.isDown(68)){
      if (this.velx < this.speed) {
        this.velx += this.speed/5;
      }
    }
    // Space (Jump)
    if(input.isDown(32)){
      if(this.grounded) {
        this.grounded = false;
        this.vely = -this.speed;
      }
    }
    if(input.isPressed(32)){
      this.vely = -2;
    }

    this.velx *= this.friction;
    this.vely += this.gravity;

    if(this.grounded){
      this.grounded = false;
      this.y += this.vely
    }
    for(var i = 0; i < l.platforms.length; i++){
      pl  = platforms[i];
      var dir = collision(this, pl);
      if(dir){
        if(dir === "t"){
          this.grounded = true;
        }
        if(dir === "b"){
          this.vely = 0;
        }
        if (dir === "l" || dir === "r") {
          this.velx = 0;
        }
        break;
      }
    }

    if(this.grounded){
      this.vely = 0;
    }

    this.x += this.velx;
    this.y += this.vely;

    this.shape.x = this.x;
    this.shape.y = this.y;
  }
};