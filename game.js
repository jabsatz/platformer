// creating the canvas-element
canvas = document.createElement('canvas');
canvas.width = 1080;
canvas.height = 720;
document.body.appendChild(canvas);

// initializing the stage
var stage = new createjs.Stage(canvas);
stage.width = canvas.width;
stage.height = canvas.height;

var platforms = [
  {"x": 0  , "y": 640, "width": 1080, "height": 100, "color":"#393"},
  {"x": 500, "y": 400, "width": 300, "height": 50, "color":"#000"}
];

var level = new Level("#09c", platforms, stage);
var player = new Player(0,0,0);
var engine = new Engine(stage, level, player);

// updating the stage at 30 fps
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", update);

function update(event) {
  engine.update();
  engine.draw();
};
