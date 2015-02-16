function Engine(stage,level,player){
  this.width     = stage.width;
  this.height    = stage.height;
  this.xvar      = 0;
  this.yvar      = 0;
  this.level     = level;
  this.player    = player;
  this.stage     = stage;
  this.crosshair = new Crosshair(0, 0);
  this.x         = 0;
  this.y         = 0;
};

Engine.prototype.update = function(){
  this.player.update(this.level);
  this.crosshair.update(this.stage);
};

Engine.prototype.draw = function() {
  this.stage.addChild(this.level.background);

  this.stage.addChild(this.level.shape);

  this.stage.addChild(this.crosshair.shape);

  this.stage.addChild(this.player.shape);

  this.stage.update();
};