function Bullet(x, y, x2, y2){
  this.x = x;
  this.y = y;
  this.velx = (x2 - x)/50;
  this.vely = (y2 - y)/50;
  this.width = 5;
  this.height = 5;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("#f00").drawRect(0, 0, 5, 5);
}

Bullet.prototype.update = function(s,b,i){
  if(this.x > s.width || this.y > s.height || this.x < 0 || this. y < 0){
    b.splice(i,1);
  }
  else{
    this.y += this.vely;
    this.x += this.velx;
    this.shape.x = this.x;
    this.shape.y = this.y;  
  }
}