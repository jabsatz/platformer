function Player(x,y,aim) {
  this.x        = x;
  this.y        = y;
  this.aim      = aim;
  this.grounded = false;
  this.vely     = 0;
  this.velx     = 0;

  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("#000").beginFill("#fda").drawCircle(this.x + 10,this.y + 10, 10);
  this.shape.graphics.beginFill("#000").drawRect(this.x, this.y + 20, 20, 40);
}
