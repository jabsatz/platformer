function Character(x,y,h,w,sx,sy,shape,target) {
  this.pos        = new Victor(x,y);
  this.velocity   = new Victor(0,0);
  this.size       = new Victor(h,w);
  this.shoot      = new Victor(sx,xy);
  this.speed      = new Victor(15,15);
  this.target     = target;
  this.toTarget   = new Victor(0,0);
  this.grounded   = false;
  this.friction   = 0.8;
  this.gravity    = 1;
  this.angle      = 0;
  this.shape      = shape;

  this.phisics = function(platforms){

    this.velocity.x *= this.friction;
    this.velocity.y += this.gravity;

    this.grounded = false;

    this.pos.x += this.velocity.x;
    this.pos.y += this.velocity.y;

    if(this.pos.x + this.size.x > s.width){
      this.pos.x = s.width - this.size.x;
    }
    if(this.pos.y + this.size.y > s.height){
      this.pos.y = s.height - this.size.y;
    }
    if(this.pos.x < 0){
      this.pos.x = 0;
    }
    if(this.pos.y < 0){
      this.pos.y = 0;
      this.velocity.y = 0;
    }


    for(var i = 0; i < platforms.length; i++){
      pl  = platforms[i];
      var dir = collision(this, pl);
      if(dir){
        if(dir === "t" && this.velocity.y > 0){
          this.grounded = true;
        }
        if(dir === "b" && this.velocity.y < 0){
          this.velocity.y = 0;
        }
        if (dir === "l" || dir === "r") {
          this.velocity.x = 0;
        }
      }
    }

    this.toTarget = this.shoot.substract(this.target.pos);

    if(this.grounded){
      this.velocity.y = 0;
    }

    this.shape.x = this.pos.x;
    this.shape.y = this.pos.y;
    this.armshape.x = this.shoot.x;
    this.armshape.y = this.shoot.y;

    for(var i = 0; i < b.length; i++){
      if(simplecollision(this,b[i])){
        console.log(this.hp);
      }
    }

  }
}
