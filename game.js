// creating the canvas-element
canvas = document.createElement('canvas');
canvas.width = 1080;
canvas.height = 720;
document.body.appendChild(canvas);

// preloading files
queue = new createjs.LoadQueue();
queue.setMaxConnections(8);
queue.loadManifest([
    {src:"helpers.js"},
    {src:"level.js"},
    {src:"camera.js"},
    {src:"player.js"}
  ], true, "classes/");


// initializing the stage
var stage = new createjs.Stage(canvas);
stage.width = canvas.width;
stage.height = canvas.height;

// updating the stage at 30 fps
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", update);

function update(event) {
  camera.update(stage);
  camera.draw(stage, level, player);
  stage.update();
};
