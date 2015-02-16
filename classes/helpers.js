function collision(a, b){
  return a.x + a.width > b.x && a.x < b.x + b.width && a.y + a.height > b.y && a.y < b.y + b.height;
}

//Input Handler
function inputHandler(){
  this.down = {};
  this.pressed = {};

  var _this = this;
  document.addEventListener("keydown", function(evt){
    _this.down[evt.keyCode] = true;
  });

  document.addEventListener("keyup", function(evt){
    delete _this.down[evt.keyCode];
    delete _this.pressed[evt.keyCode];
  });
};

inputHandler.prototype.isDown = function(code){
  return this.down[code];
};

inputHandler.prototype.isPressed = function(code){
  if (this.pressed[code]){
    return false;
  }
  else if (this.down[code]){
    return this.pressed[code] = true;
  }
  return false;
};