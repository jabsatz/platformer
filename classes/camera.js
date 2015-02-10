var camera = {
  x: stage.mouseX,
  y: stage.mouseY,
  width: stage.width,
  height: stage.height,
  update: function(stage){
    this.x = stage.mouseX;
    this.y = stage.mouseY;
  },
  draw: function(stage, level, player){

    //draw background
    bgShape = new createjs.Shape();
    bgShape.graphics.beginFill(level.background).drawRect(0, 0, this.width, this.height);
    stage.addChild(bgShape);

    var centerx = this.x - this.width/2;
    var centery = this.y - this.height/2;

    //draw platforms
    var platforms = level.platforms;
    for(var i = 0; i < platforms.length; i++){
      pl = platforms[i];
      plShape = new createjs.Shape();
      plShape.graphics.beginFill(pl.color).drawRect(pl.x + centerx, pl.y + centery, pl.width, pl.height);
      stage.addChild(plShape);
    }

    //draw crosshair
    var x = this.x;
    var y = this.y;

    chShape = new createjs.Shape();
    chShape.graphics.beginStroke("#8f8").drawCircle(x, y, 20);
    chShape.graphics.moveTo(x, y).lt(x - 20, y).mt(x, y).lt(x + 20, y).mt(x,y).lt(x, y + 20).mt(x,y).lt(x, y - 20);
    stage.addChild(chShape);

    player.draw(stage, player.x + centerx, player.y + centery);
  }
};