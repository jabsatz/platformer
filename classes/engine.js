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
  this.bullets   = [];

  /*
  this.debug    = new createjs.Text();
  this.debug.x  = 800;
  this.debug.text = 'acá va el texto de debugeo'
  */
};

Engine.prototype.update = function(){
  this.player.update(this.level);
  this.crosshair.update(this.stage, this.bullets, this.player);
  for(var i = 0; i < this.bullets.length; i++){
    this.bullets[i].update(this.stage, this.bullets, i);
  }
};

Engine.prototype.draw = function() {
  this.stage.addChild(this.level.background);

  this.stage.addChild(this.level.shape);

  this.stage.addChild(this.player.shape);

  for (var i = 0; i < this.bullets.length; i++) {
    this.stage.addChild(this.bullets[i].shape);
  };

  this.stage.addChild(this.crosshair.shape);

  this.stage.addChild(this.debug);

  this.stage.update();
};