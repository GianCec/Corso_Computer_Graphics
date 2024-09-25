const l = 7;
const w = 3;
const scale = 0.9;
const a = 0.1;
const wCoeffChange = 0.01;
const startHeading = -90;
let s = 1;
let inc = 500;
let startPos;


function setup() {
  let canvas = createCanvas(windowWidth*0.4, windowHeight*0.9);
  canvas.parent('sketch-holder');  stroke("#2e8b5630");
  noFill();
  strokeWeight(w * scale);
  startPos = createVector(width*0.9, height*0.9);
  background(0);
  stroke('#d83c01');
}

function draw() {
  let sequence = [];
  let n = s;
  do {
    sequence.push(n);
    n = collatz(n);
  } while (n != 1);
  sequence.push(1);
  sequence.reverse();
  
  let pos = startPos.copy();
  let h = startHeading;
  let wCoeff = 1;
  for (let j = 0; j < sequence.length; j++) {
    let value = sequence[j];
    if (value % 2 == 0) {
      h += a;
    } else {
      h -= a;
    }
    strokeWeight(w * wCoeff);
    wCoeff -= wCoeffChange;
    beginShape();
    vertex(pos.x, pos.y);
    pos.add(createVector(l * scale, 0).rotate(h));
    vertex(pos.x, pos.y);
    endShape();
  }
  s++;
  if (s > 50000) {
    s = 1;
  }
}

function collatz(n) {
  // even
  if (n % 2 == 0) {
    return n / 2;
    // odd
  } else {
    return (n * 3 + 1) / 2;
  }
}