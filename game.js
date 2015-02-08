// creating the canvas-element
canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;
document.body.appendChild(canvas);
 
// initializing the stage
stage = new createjs.Stage(canvas);

// updating the stage at 60 fps
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener(tick);
function tick(e){
  stage.update();
}

// preloading image
var img = new Image();
img.onload = onImageLoaded;
img.src = 'asset/char.png';
 
// create displayObject and add it to stage
function onImageLoaded(e) {
    var myBitmap = new Bitmap(img);
    stage.addChild(myBitmap);
}