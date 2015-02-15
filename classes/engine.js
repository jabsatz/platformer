function Engine(stage,level,player){
  this.width  = stage.width;
  this.height = stage.height;
  this.x      = this.width/2;
  this.y      = this.height/2;
  this.xvar   = 0;
  this.yvar   = 0;
  this.level  = level;
  this.player = player;
  this.stage  = stage;

  this.crosshair = new createjs.Shape();
  this.crosshair.graphics.beginStroke("#3f3").drawCircle(0, 0, 20);
  this.crosshair.graphics.moveTo(0, 0).lt(-20, 0).mt(0, 0).lt(20, 0).mt(0,0).lt(0, 20).mt(0,0).lt(0, -20);
};

Engine.prototype.update = function(){
  var prevX = this.x;
  var prevY = this.y;
  this.x = stage.mouseX;
  this.y = stage.mouseY;
  this.xvar = this.x - prevX;
  this.yvar = this.y - prevY;
};

Engine.prototype.draw = function() {
  this.stage.addChild(this.level.background);

  this.level.shape.x += this.xvar;
  this.level.shape.y += this.yvar;
  this.stage.addChild(this.level.shape);


  this.crosshair.x = this.x;
  this.crosshair.y = this.y;
  this.stage.addChild(this.crosshair);

  this.player.shape.x += this.xvar;
  this.player.shape.y += this.yvar;  
  this.stage.addChild(this.player.shape);
};