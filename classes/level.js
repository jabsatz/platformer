function Level(background, platforms, stage) {
  this.background = new createjs.Shape();
  this.background.graphics.beginFill(background).drawRect(0, 0, stage.width, stage.height);
  this.platforms = platforms;
  this.shape = new createjs.Shape();

  for(var i = 0; i < platforms.length; i++){
    pl = platforms[i];
    this.shape.graphics.beginFill(pl.color).drawRect(pl.x, pl.y, pl.width, pl.height);
  }

}