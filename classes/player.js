var player = {
  x: 0,
  y: 0,
  aim: 0,
  grounded: false,
  vely: 0,
  velx: 0,  
  draw: function(stage,x,y){
    plShape = new createjs.Shape();
    plShape.graphics.beginStroke("#000").beginFill("#fda").drawCircle(x + 10,y + 10, 10);
    plShape.graphics.beginFill("#000").drawRect(x, y + 20, 20, 40);
    stage.addChild(plShape);
  },
  update: function(){

  }
};