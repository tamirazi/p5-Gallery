let sketch;
console.log(main.options.default);
main.options.default += '20';
mainColor += '20';
function setup() {
  sketch = createCanvas(400 - 45, 550 - 45);
  sketch.parent('myCanvas');
  background(backgroundColor);
  stroke(mainColor);
  drawStroke();

  noFill();

  xoff = 0;
  yoff = 0;
  scl = values[3];
  let frames = values[0];
  mul1 = values[1];
  mul2 = values[2];
  for (let i = 0; i < frames; i++) {
    myBezier();
  }
}

function draw() {}

function myBezier() {
  let x1 = width * noise(xoff + 10) * mul2;
  let x2 = width * noise(xoff + 20);
  let x3 = width * noise(xoff + 30);
  let x4 = width * noise(xoff + 40) * mul1;
  let y1 = height * noise(yoff + 50) * mul2;
  let y2 = height * noise(yoff + 60);
  let y3 = height * noise(yoff + 70);
  let y4 = height * noise(yoff + 80) * mul1;

  yoff += scl;
  xoff += scl;
  stroke(mainColor);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}

function drawStroke() {
  stroke(0, 50);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width, 0, width, height);
  line(0, height, width, height);
}
