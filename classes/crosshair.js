function Crosshair(x,y){
  this.x = x;
  this.y = y;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("#3f3").drawCircle(0, 0, 20);
  this.shape.graphics.moveTo(0, 0).lt(-20, 0).mt(0, 0).lt(20, 0).mt(0,0).lt(0, 20).mt(0,0).lt(0, -20);
}

Crosshair.prototype.update = function(s) {
  var x = s.mouseX
  var y = s.mouseY
  this.x = x;
  this.y = y;
  this.shape.x = x;
  this.shape.y = y;
};