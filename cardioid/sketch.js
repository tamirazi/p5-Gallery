let totalPoints = 100;
let radius;
let delta;
let factor;

function setup() {
  const sketch = createCanvas(400 - 45, 550 - 45);
  sketch.parent("myCanvas");

  delta = TWO_PI / totalPoints;
  radius = width / 2 - 30;
  factor = 0.7;
}

function draw() {
  background(backgroundColor);
  drawStroke();
  stroke(mainColor);
  factor = values[0];
  totalPoints = values[1];
  push();
  translate(width / 2, height / 2);
  noFill();
  circle(0, 0, radius * 2);
  for (let p = 0; p < totalPoints; p++) {
    let v = getVector(p);
    let b = getVector(p * factor);
    // drawPoints(v);
    strokeWeight(0.8);
    line(v.x, v.y, b.x, b.y);
  }
  pop();
  noLoop();
}

function getVector(index) {
  let angle = map(index % totalPoints, 0, totalPoints, 0, TWO_PI);
  let vector = p5.Vector.fromAngle(angle + PI);
  vector.mult(radius);
  return vector;
}

function drawStroke() {
  stroke(0, 50);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width, 0, width, height);
  line(0, height, width, height);
}
