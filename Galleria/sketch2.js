
let sliderA,sliderB;
let col;
function preload(){
  fontRegular = loadFont('Roboto-Regular.ttf')

}
function setup() {
    createCanvas(windowWidth, windowHeight-1);
    textAlign(CENTER, CENTER);
    
  sliderA = createSlider(150, 320);
  sliderA.position(width*0.05, height*0.45);
  sliderA.size(300);
  sliderB = createSlider(100, 150);
  sliderB.position(width*0.05, height*0.55);
  sliderB.size(300);
  textFont(fontRegular);
  strokeWeight(2);
  col=['#071e22','#D81E5B','#6bbf59','#eff1f3','#ee2e31','#586BA4']

 backArrow(0,0,0.5);
}

function draw() {
    background(col[0]);
    translate(width / 2, height *0.5);
    
    textSize(20);
    fill(col[4]);
    angleMode(DEGREES);
    ellipseMode(RADIUS);

    let a =sliderA.value();
    let b = sliderB.value();
    let c = sqrt(a * a - b * b);
    let d = 15;
    let angolo = frameCount;
    let x = a * cos(angolo);
    let y = b * sin(angolo);
    let xt = (a + d) * cos(angolo); // coordinate testo
    let yt = (b + d) * sin(angolo);
    let px = 400;
    let py=300
    let d1 = dist(x, y, c, 0);
    let d2 = dist(x, y, -c, 0);
    noFill();
    stroke(col[3]);
    ellipse(0, 0, a, b);
    stroke(col[4]);
    line(x, y, c, 0);
    stroke(col[5]); // colore
    line(x, y, -c, 0);
    noStroke();

    fill(col[4]);
    circle(c, 0, 5);
    text("F1", px+20, py);

    text("F2", c-15, -15);
    circle(px, py, 5); // distanze

    fill(col[5]);

    circle(-c, 0, 5);
    text("F1", px+20, -(d1+d2)+py);

    text("F1", -c+15, -15);
    circle(px,-(d1+d2)+py, 5);

    fill(col[2]);
    noStroke();
    circle(x, y, 5);
 
  
    
    stroke(col[4]);
    line(px, 0+py, px, -d1+py);
    stroke(col[5]);
    line(px,-d1+py, px, -(d1+d2)+py);


   
 noStroke();
    
    fill(col[2]);
    text("P", 385, -d1+py);

    text("P", xt, yt);

    circle(px, -d1+py,5);
    fill(col[3]);
    text('a='+a,-width*0.4,- height*0.06)
    text('b='+b,-width*0.4, height*0.04)

    textSize(80);
    text("Ellisse", 0,- height*0.35);
}



