function Monster(x,y) {
  this.hp         = 10;
  this.x          = x;
  this.y          = y;
  this.velx       = 0;
  this.vely       = 0;
  this.speed      = 15;
  this.height     = 60;
  this.width      = 20;
  this.grounded   = false;
  this.friction   = 0.8;
  this.gravity    = 1;
  this.angle      = 0;
  this.shootx     = 0;
  this.shooty     = 0;

  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("#000").beginFill("#aaa").drawCircle(10, 10, 10);
  this.shape.graphics.beginStroke("#000").beginFill("#777").drawRect(0, 20, 20, 40);

  this.armshape = new createjs.Shape();
  this.armshape.graphics.beginStroke("#000").beginFill("#333").drawRect(0, 0, 10, 20);
  this.armshape.graphics.beginStroke("#000").beginFill("#aaa").drawRect(0, 15, 10, 5);
  this.armshape.regX = 5;

  this.update = function(l,s,b){

    this.velx *= this.friction;
    this.vely += this.gravity;

    this.grounded = false;

    this.x += this.velx;
    this.y += this.vely;

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

    for(var i = 0; i < l.platforms.length; i++){
      pl  = platforms[i];
      var dir = collision(this, pl);
      if(dir){
        if(dir === "t" && this.vely > 0){
          this.grounded = true;
        }
        if(dir === "b" && this.vely < 0){
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

    this.shape.x = this.x;
    this.shape.y = this.y;
    this.armshape.x = this.x + 5;
    this.armshape.y = this.y + 25;

    for(var i = 0; i < b.length; i++){
      if(simplecollision(this,b[i])){
        this.hp --;
        if(this.hp <= 0){
          console.log("dead");
        }
        else{
          console.log(this.hp);
        }
        b.splice(i,1);
      }
    }

  }
}
