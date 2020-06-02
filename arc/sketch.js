let radius = 300;

function setup() {
  const sketch = createCanvas(400 - 45, 550 - 45);
  sketch.parent("myCanvas");

  let step = (TWO_PI / radius) * 2;

  randomSeed(99);
  let stratPoint = random(100);
  radius = 300;
  background(backgroundColor);
  drawStroke();
  stroke(mainColor);
  step = (TWO_PI / radius) * values[0];
  let margin = values[1];

  noFill();

  for (let i = radius; i > 0; i -= margin) {
    push();
    arc(width / 2, height / 2, radius, radius, stratPoint, random(PI, TWO_PI));
    stratPoint += step;
    radius -= margin;
    pop();
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
