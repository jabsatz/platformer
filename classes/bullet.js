function Bullet(x,y,angle){
  this.x = x;
  this.y = y;
  this.angle = angle
  this.speed = 20;
  this.velx = Math.sin(this.angle)*this.speed;
  this.vely = Math.cos(this.angle)*this.speed;
  this.width = 5;
  this.height = 5;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("#000").beginFill("#ff0").drawCircle(0, 0, 5);

  this.update = function(s,b,i,l){
    if(this.x > s.width || this.y > s.height || this.x < 0 || this. y < 0){
      b.splice(i,1);
    }
    else{
      this.y += this.vely;
      this.x += this.velx;

      for(var j = 0; j < l.platforms.length; j++){
        pl  = platforms[j];
        if(simplecollision(this,pl) === true){
          b.splice(i,1);
          break;
        }
      }
      this.shape.x = this.x;
      this.shape.y = this.y;  
    }
  }
}