let A=50;
let B=50;
let C;
let circleRadius = 10;
let d1,d2;
let colBG,colF1,colF2, colP;
let sliderA,sliderB;

function preload(){
  fontRegular = loadFont('Roboto-Regular.ttf')

}

function setup() {
  createCanvas(windowWidth, windowHeight-1);
  //textWidth(25);
  textAlign(CENTER,CENTER);

  colBG='#332E3C';
  colF1='#DE541E';
  colF2='#169873';
  colP=color(255);
  sliderA = createSlider(25, 100);
  sliderA.position(width*0.05, height*0.45);
  sliderA.size(100);
  sliderB = createSlider(25, 100);
  sliderB.position(width*0.05, height*0.55);
  sliderB.size(100);
  textFont(fontRegular);
  backArrow(0,0,0.5);

}

function draw() {

  background(colBG);
  fill(colP);

  A=   sliderA.value();
  text('A='+A,width*0.10, height*0.425)
  B=   sliderB.value();
  text('B='+B,width*0.10, height*0.525)

  C=sqrt(A*A+B*B);
  text('C='+round(C,0),width*0.10, height*0.6)




  translate(width / 2, height / 2);
 // rotate(PI/2)
 // Traslazione al centro della pagina
 textSize(80);
noStroke();
fill(colP);
 text('Iperbole',0,-height*0.4)
  // Disegna l'iperbole
  drawHyperbola(A, B);
  textSize(20);
  fill(colF1);

  circle(0,C,circleRadius);
  text('F1',0,C+20)

  circle(0,-C,circleRadius);
  fill(colF2)
  text('F2',0,-C-20)

  circle(0,-C,circleRadius);

  drawCircleOnHyperbola(A, B);
  stroke(colF1)
  line(width*0.3,0,width*0.3,-d1)
  noStroke()
  fill(colF1)
  text('F1',width*0.3,0+20)
  circle(width*0.3,0,circleRadius)
  fill(colP);
  text('P',width*0.3,-d1-20)
  circle(width*0.3,-d1,circleRadius)

  stroke(colF2)
line(width*0.35,0,width*0.35,-d2)
noStroke()
fill(colF2)
text('F2',width*0.35,0+20)
circle(width*0.35,0,circleRadius)

fill(colP);

text('P',width*0.35,-d2-20)
circle(width*0.35,-d2,circleRadius)

stroke('#E27396')
  line(width*0.4,-d1,width*0.4,-d2)
  fill('#E27396')
  noStroke();

  text('Differenza',width*0.4+50,(-d2-d1)/2)


}

function drawHyperbola(a, b) {
  beginShape();
  noFill();
  stroke(255);
  strokeWeight(2);
  // Disegna il ramo sinistro dell'iperbole
  for (let x = -width / 2; x < width / 2; x += 0.1) {
    let y = b * sqrt(1 + (x * x) / (a * a));
    vertex(x, y);
  }
  endShape();
  beginShape();

  // Disegna il ramo destro dell'iperbole
  for (let x = -width / 2; x < width / 2; x += 0.1) {
    let y = -b * sqrt(1 + (x * x) / (a * a));
    vertex(x, y);
  }
  endShape();
  noStroke();
}

function drawCircleOnHyperbola(a, b) {
  let t=frameCount%1600;
  let angle=t*0.01;
 
  let x = height*0.2*sin(angle);
  let side=int((angle/TWO_PI))%2;
  let y;
  if(side==0){
   y =  b * sqrt(1 + (x * x) / (a * a));
  }else{
    y = - b * sqrt(1 + (x * x) / (a * a));

  }
  // Trasla il sistema di coordinate al centro della canvas
 // translate(width / 2, height / 2);
  // Disegna il cerchio sul punto dell'iperbole
  fill(colP);
  noStroke()

  circle(x, y, 10);
  text('P',x,y-20)

  // Incrementa l'angolo per far muovere il cerchio lungo l'iperbole
  stroke(colF1) 
  line(x, y,0,C);
  stroke(colF2)
  line(x, y,0,-C);
  d1=  dist(x, y,0,C);
  d2=dist(x, y,0,-C);

}


