function setup() {
  const sketch = createCanvas(500, 650);
  sketch.parent('myCanvas');
}

function draw() {
  background(backgroundColor);
  stroke(mainColor);
  circle(100, 100, 50, 50);
  noLoop();
}
