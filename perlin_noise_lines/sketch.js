let xoff = 0;
let yoff = 0;
let kav = [];

//parameters to play with------------------
let margin = 4; //space between lines
let scl = 0.01; //the noise scale (use small numbers)
let weight = 0.7; //the stroke weight
let amp = 100; //maximum amplitude
//-----------------------------------------

function setup() {
  const sketch = createCanvas(400 - 45, 550 - 45);
  sketch.parent("myCanvas");
}

function draw() {
  initLine();
  background(backgroundColor);
  drawStroke();
  stroke(mainColor);

  margin = values[0];
  scl = values[1];
  weight = values[2];
  amp = values[3];

  noFill();
  for (let row = 0; row < kav.length; row++) {
    push();
    strokeWeight(weight);
    beginShape();
    for (let x = 0; x < kav[row].length; x++) {
      vertex(x, row * margin + kav[row][x]);
    }
    endShape();
    pop();
  }

  noLoop();
}

function initLine() {
  xoff = 0;
  yoff = 0;
  kav = [];
  let i = 0;
  for (let y = 0; y < height; y++) {
    kav.push([]);
    xoff = 0;
    for (let x = 0; x < width; x++) {
      let val = noise(xoff, yoff) * amp;
      xoff += scl;
      kav[i].push(val);
    }
    yoff += scl;
    i++;
  }
}

function drawStroke() {
  stroke(0, 50);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width, 0, width, height);
  line(0, height, width, height);
}
