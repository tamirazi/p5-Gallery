let sketch;

function setup() {
  sketch = createCanvas(400 - 45, 550 - 45);
  sketch.parent("myCanvas");
}

function draw() {
  background(backgroundColor);
  drawStroke();
  noLoop();
}

function drawStroke() {
  stroke(0, 50);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width, 0, width, height);
  line(0, height, width, height);
}

