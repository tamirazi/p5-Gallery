let maxRadius;
let minRadius;
let numPoints;
let numOfShapes;
let xoff = 0;
let inc = 0.005;

function setup() {
  const sketch = createCanvas(400 - 45, 550 - 45);
  sketch.parent("myCanvas");
  numPoints = 3;
  numOfShapes = 20;
  maxRadius = 150;
  minRadius = 5;

  xoff = 0;
  background(backgroundColor);
  drawStroke();
  stroke(mainColor);

  numPoints = values[0];
  numOfShapes = values[1];
  strokeWeight(values[2]);
  inc = values[3];

  for (let i = 0; i < numOfShapes; i++) {
    polygon(numPoints, map(i, 0, numOfShapes - 1, minRadius, maxRadius));
  }
}

function draw() {}

function polygon(nbPoints, radius) {
  push();
  noFill();
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < nbPoints; i++) {
    rotate(noise(xoff));
    xoff += inc;
    let angle = -PI / 2 + (i * TWO_PI) / nbPoints;
    vertex(radius * cos(angle + 0.03), radius * sin(angle));
  }
  endShape(CLOSE);
  pop();
}

function drawStroke() {
  stroke(0, 50);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width, 0, width, height);
  line(0, height, width, height);
}
