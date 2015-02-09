var camera = {
  x: stage.width/2,
  y: stage.height/2,
  width: stage.width,
  height: stage.height,
  draw: function(stage, level){

    //draw background
    bgShape = new createjs.Shape();
    bgShape.graphics.beginFill(level.background).drawRect(0, 0, stage.width, stage.height);
    stage.addChild(bgShape);

    //draw platforms
    var platforms = level.platforms;
    for(var i = 0; i < platforms.length; i++){
      pl = platforms[i];
      plShape = new createjs.Shape();
      plShape.graphics.beginFill(pl.color).drawRect(pl.x + this.x, pl.y + this.y, pl.width, pl.height);
      stage.addChild(plShape);
    }

    //draw crosshair
    var x = this.x + this.width/2;
    var y = this.y + this.height/2;

    chGraphic = new createjs.Graphics();
    chGraphic.beginStroke("#8f8").drawCircle(x, y, 20);
    chGraphic.moveTo(x, y).lt(x - 20, y).mt(x, y).lt(x + 20, y).mt(x,y).lt(x, y + 20).mt(x,y).lt(x, y - 20);
    chShape = new createjs.Shape(chGraphic);
    stage.addChild(chShape);
  }
};