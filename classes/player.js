function Player(x,y) {
  this.x          = x;
  this.y          = y;
  this.velx       = 0;
  this.vely       = 0;
  this.speed      = 15;
  this.height     = 60;
  this.width      = 20;
  this.grounded   = false;
  this.friction   = 0.8;
  this.gravity    = 0.5;
  this.crosshair  = new Crosshair();
  this.angle      = 0;
  this.shootx     = 0;
  this.shooty     = 0;

  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("#000").beginFill("#fda").drawCircle(10, 10, 10);
  this.shape.graphics.beginFill("#000").drawRect(0, 20, 20, 40);

  this.armshape = new createjs.Shape();
  this.armshape.graphics.beginFill("#600").drawRect(0, 0, 10, 20);
  this.armshape.graphics.beginFill("#fda").drawRect(0, 15, 10, 5);
  this.armshape.graphics.beginFill("#000").drawRect(10, 15, 5, 10);
  this.armshape.regX = 5;

  this.update = function(l,s,b,p){
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
    if(input.isPressed(32)){
      if(this.grounded) {
        this.grounded = false;
        this.vely = -this.speed;
      } 
    }
    if(this.velx < 1 && this.velx > -1){
      this.velx = 0;
    }

    this.velx *= this.friction;
    this.vely += this.gravity;

    this.grounded = false;

    this.x += this.velx;
    this.y += this.vely;

    for(var i = 0; i < l.platforms.length; i++){
      pl  = platforms[i];
      var dir = collision(this, pl);
      if(dir){
        if(dir === "t" && this.vely > 0){
          this.grounded = true;
        }
        if(dir === "b"){
          this.vely = 0;
        }
        if (dir === "l" || dir === "r") {
          this.velx = 0;
        }
      }
    }

    if(this.grounded){
      this.vely = 0;
    }

    if(this.x + this.width > s.width){
      this.x = s.width - this.width;
    }
    if(this.y + this.height > s.height){
      this.y = s.height - this.width;
    }
    if(this.x < 0){
      this.x = 0;
    }
    if(this.y < 0){
      this.y = 0;
      this.vely = 0;
    }

    var sidex = (this.crosshair.x - this.x - 5);
    var sidey = (this.crosshair.y - this.y - 25);
    this.angle = Math.atan(sidex/sidey);
    if(this.x + 5 < this.crosshair.x && this.y + 25 > this.crosshair.y){
      this.angle = Math.PI - (this.angle * -1);
    }
    if(this.x + 5 > this.crosshair.x && this.y + 25 > this.crosshair.y){
      this.angle += Math.PI;
    }
    if(this.x + 5 > this.crosshair.x && this.y + 25 < this.crosshair.y){
      this.angle = 2*Math.PI - (this.angle * -1);
    }
    this.shootx = this.x + 5;
    this.shooty = this.y + 25;

    this.armshape.x = this.x + 5;
    this.armshape.y = this.y + 25;
    this.armshape.rotation = -this.angle*180/Math.PI;
    this.shape.x = this.x;
    this.shape.y = this.y;



    this.crosshair.update(s,b,p);


  }
};