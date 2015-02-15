function Engine(stage,level,player){
  this.width     = stage.width;
  this.height    = stage.height;
  this.xvar      = 0;
  this.yvar      = 0;
  this.level     = level;
  this.player    = player;
  this.stage     = stage;
  this.crosshair = new Crosshair(0, 0);
  this.x         = this.player.x - this.width/4;
  this.y         = this.player.y - this.height/4;
};

Engine.prototype.update = function(){
  var prevX = this.x;
  var prevY = this.y;
  this.crosshair.update(stage.mouseX, stage.mouseY);
  this.x = ( this.crosshair.x + this.player.x ) / 2;
  this.y = ( this.crosshair.y + this.player.y ) / 2;
  this.xvar = this.x - prevX;
  this.yvar = this.y - prevY;
};

Engine.prototype.draw = function() {
  this.stage.addChild(this.level.background);

  this.level.shape.x += this.xvar;
  this.level.shape.y += this.yvar;
  this.stage.addChild(this.level.shape);

  this.stage.addChild(this.crosshair.shape);

  this.player.shape.x += this.xvar;
  this.player.shape.y += this.yvar;  
  this.stage.addChild(this.player.shape);

  this.stage.update();
};