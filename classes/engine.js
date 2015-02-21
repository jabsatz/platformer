function Engine(stage,level,player){
  this.width     = stage.width;
  this.height    = stage.height;
  this.xvar      = 0;
  this.yvar      = 0;
  this.level     = level;
  this.player    = player;
  this.stage     = stage;
  this.x         = 0;
  this.y         = 0;
  this.bullets   = [];

  this.debug     = new createjs.Text();
  this.debug.x   = 800;

  this.update    = function(){
    this.player.update(this.level, this.stage, this.bullets, this.player);
    for(var i = 0; i < this.bullets.length; i++){
      this.bullets[i].update(this.stage, this.bullets, i, this.level);
    }

  }

  this.draw = function() {
    this.stage.addChild(this.level.background);

    this.stage.addChild(this.level.shape);

    for (var i = 0; i < this.bullets.length; i++) {
      this.stage.addChild(this.bullets[i].shape);
    };

    this.stage.addChild(this.player.shape);
    this.stage.addChild(this.player.armshape);

    this.stage.addChild(this.player.crosshair.shape);

    this.stage.addChild(this.debug);

    this.stage.update();
  }

};