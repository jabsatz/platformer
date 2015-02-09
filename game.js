// creating the canvas-element
canvas = document.createElement('canvas');
canvas.width = 1080;
canvas.height = 720;
document.body.appendChild(canvas);

// preloading files
queue = new createjs.LoadQueue();
queue.setMaxConnections(8);

queue.loadManifest([
    {src:"level.js"},
    {src:"camera.js"},
    {src:"player.js"}
  ], true);


// initializing the stage
var stage = new createjs.Stage(canvas);
stage.width = canvas.width;
stage.height = canvas.height;

// updating the stage at 60 fps
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", update);

stage.on("stagemousemove",function(evt) {
  camera.x = evt.stageX - camera.width/2;
  camera.y = evt.stageY - camera.height/2;
});

function update(event) {
  camera.draw(stage, level);
  stage.update();
};
