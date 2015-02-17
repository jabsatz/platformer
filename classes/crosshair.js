function Crosshair(x,y){
  this.x = x;
  this.y = y;
  this.size = 1;
  this.enabled = true;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("#3f3").drawCircle(0, 0, 20);
  this.shape.graphics.moveTo(0, 0).lt(-20, 0).mt(0, 0).lt(20, 0).mt(0,0).lt(0, 20).mt(0,0).lt(0, -20);
}

Crosshair.prototype.update = function(s, b, p) {
  var x = s.mouseX
  var y = s.mouseY
  this.x = x;
  this.y = y;
  this.shape.x = x;
  this.shape.y = y;
  this.shape.rotation++;
  this.shape.scaleX = this.size;
  this.shape.scaleY = this.size;

  if(this.size > 1){
    this.enabled = false;
    this.size -= 0.1;
  }
  else{
    this.enabled = true;
  }

  if(this.enabled){
    if(input.isPressed('m0')){
      b.push(new Bullet(p.x + p.width/2, p.y + p.height/2, this.x, this.y))
      this.size++;
      console.log(p.x)
    }
    if(input.isPressed('m2')){
      console.log('right click');
    }
  }
};