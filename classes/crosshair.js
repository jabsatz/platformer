function Crosshair(){
  this.x = 0;
  this.y = 0;
  this.size = 1;
  this.enabled = true;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("#3f3").drawCircle(0, 0, 20);
  this.shape.graphics.moveTo(0, 0).lt(-20, 0).mt(0, 0).lt(20, 0).mt(0,0).lt(0, 20).mt(0,0).lt(0, -20);

  this.update = function(s,b,p){
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
        b.push(new Bullet(p.shootx,p.shooty,p.angle))
        this.size++;
      }
      if(input.isPressed('m2')){
        console.log('right click');
      }
    }
  }
};