//Input Handler
function inputHandler(){
  this.down = {};
  this.pressed = {};

  var _this = this;
  //Eventos de teclado (consultar keyCodes)
  document.addEventListener("keydown", function(evt){
    _this.down[evt.keyCode] = true;
  });
  document.addEventListener("keyup", function(evt){
    delete _this.down[evt.keyCode];
    delete _this.pressed[evt.keyCode];
  });

  //Eventos de mouse (0 = left click, 1 = middle click, 2 = right click)
  document.addEventListener("mousedown", function(evt){
    _this.down['m' + evt.button] = true;
  });
  document.addEventListener("mouseup", function(evt){
    delete _this.down['m' + evt.button];
    delete _this.pressed['m' + evt.button];
  });

  //Elimina el context menu del canvas para no joder el click derecho
  canvas.addEventListener("contextmenu", function(evt){
    evt.preventDefault();
    return false;
  }, false);

  this.isDown = function(code){
    return this.down[code];
  }

  this.isPressed = function(code){
    if (this.pressed[code]){
      return false;
    }
    else if (this.down[code]){
      return this.pressed[code] = true;
    }
    return false;
  }

};

function collision(shapeA, shapeB){
  // get the vectors to check against
  var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
      vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
      // add the half widths and half heights of the objects
      hWidths = (shapeA.width / 2) + (shapeB.width / 2),
      hHeights = (shapeA.height / 2) + (shapeB.height / 2),
      colDir = null;

  // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
    // figures out on which side we are colliding (top, bottom, left, or right)         
    var oX = hWidths - Math.abs(vX),
        oY = hHeights - Math.abs(vY);
    if (oX >= oY) {
      if (vY > 0) {
        colDir = "b";
        shapeA.y += oY;
      } else {
        colDir = "t";
        shapeA.y -= oY;
      }
    } else {
      if (vX > 0) {
        colDir = "r";
        shapeA.x += oX;
      } else {
        colDir = "l";
        shapeA.x -= oX;
      }
    }
  }
  return colDir;
}

function simplecollision(shapeA,shapeB){
  return shapeA.x < shapeB.x+shapeB.width && shapeB.x < shapeA.x+shapeA.width && shapeA.y < shapeB.y+shapeB.height && shapeB.y < shapeA.y+shapeA.height;
}