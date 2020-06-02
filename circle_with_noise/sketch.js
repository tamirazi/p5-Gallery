let sketch;

function setup() {
  sketch = createCanvas(400 - 45, 550 - 45);
  sketch.parent("myCanvas");
  background(backgroundColor);
  stroke(mainColor);
  drawStroke();

  let xoff = 0;
  let yoff = 0;
  let scl = 0.01;
  let amp = 200;
  for (let d = 0; d < 360; d += 1) {
    let v = p5.Vector.fromAngle(radians(d), 1);
    let xo = map(sin(xoff), -1, 1, 1, 2);
    let yo = map(cos(yoff), -1, 1, 1, 2);
    v.setMag(noise(xo, yo) * amp);

    push();
    translate(width / 2, height / 2);
    stroke(0);
    line(0, 0, v.x, v.y);
    pop();
    xoff += scl;
    yoff += scl;
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
