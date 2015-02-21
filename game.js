// creating the canvas-element
canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 700;
document.body.appendChild(canvas);

// initializing the stage
var stage = new createjs.Stage(canvas);
stage.width = canvas.width;
stage.height = canvas.height;

var platforms = [
  {"x": 0  , "y": 650, "width": 1000, "height": 100, "color":"#393"},
  {"x": 200, "y": 500, "width": 100, "height": 50, "color":"#444"},
  {"x": 700, "y": 500, "width": 100, "height": 50, "color":"#444"},
  {"x": 375, "y": 400, "width": 250, "height": 50, "color":"#444"},
  {"x": 0, "y": 200, "width": 300, "height": 50, "color":"#444"},
  {"x": 700, "y": 200, "width": 300, "height": 50, "color":"#444"},
];

var input  = new inputHandler();
var level  = new Level("#09c", platforms, stage);
var player = new Player(0,0,0);
var engine = new Engine(stage, level, player);

// updating the stage at 30 fps
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", update);

function update(event) {
  engine.update();
  engine.draw();
};