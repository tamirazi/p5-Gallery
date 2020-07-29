let sketch;

function setup() {
  sketch = createCanvas(400 - 45, 550 - 45);
  sketch.parent('myCanvas');
  background(backgroundColor);
  stroke(mainColor);
  drawStroke();

  let amp = 200;
  let maxNoise = values[3];
  let margins = values[0];
  let numOfShapes = values[1];
  strokeWeight(values[2]);
  translate(width / 2, height / 2);
  for (let shape = 0; shape < numOfShapes; shape++) {
    beginShape();
    stroke(mainColor);
    for (let d = 0; d <= TWO_PI; d += 0.01) {
      let v = p5.Vector.fromAngle(d, 1);
      let xo = map(sin(d), -1, 1, 0.1, maxNoise);
      let yo = map(cos(d), -1, 1, 0.1, maxNoise);
      v.setMag(noise(xo, yo) * amp);

      noFill();
      vertex(v.x, v.y);
    }
    endShape();
    amp -= margins;
    maxNoise += 0.005;
  }
}

function draw() {}

function drawStroke() {
  stroke(0, 50);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width, 0, width, height);
  line(0, height, width, height);
}
