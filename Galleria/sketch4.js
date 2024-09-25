let l=[];
let p=[];
let sliderA,sliderB;
function preload(){
  fontRegular = loadFont('Roboto-Regular.ttf')

}

function setup() {
  createCanvas(windowWidth-1, windowHeight-1);
  sliderA = createSlider(0, 30);
  sliderA.position(width*0.72, height*0.85);
  sliderA.size(100);
  sliderB = createSlider(0, 30);
  sliderB.position(width*0.72, height*0.90);
  sliderB.size(100);

  textFont(fontRegular);
  textAlign(CENTER);
let nx=6;
let ny=6;
let lato=windowHeight/(ny+1);

let r=lato*0.4;

   p=gridPoints(lato/2,lato/2,nx,ny,lato);
   for (let i = 0; i < p.length; i++) {
    let b=i%nx;
    let a=int(i/ny);
    l[i]=new lissajou(a,b,p[i].x,p[i].y,r);


   }
   backArrow(0,0,0.5);

}

function draw() {
  textFont(fontRegular);


  background(255);
  
  for (let i = 0; i < p.length; i++) {
    l[i].show();
    l[i].movingDot()
    
  }
  fill(255,0,0);
  noStroke();
  textSize(80);

  text('Figure di Lissajous',width*0.75, height*0.15)
  let a =sliderA.value();
  let b = sliderB.value();
  textSize(20);

  text('a='+a,width*0.75, height*0.85)
  text('b='+b,width*0.75, height*0.95)
  dynamicLissajou(a,b,width*0.75,height/2,height/5)

} 
function gridPoints(x, y, nx, ny, latoCasella) {
  let points = [];

  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      // Calcola la posizione del centro della casella corrente
      let centerX = x + (i * latoCasella) + (latoCasella / 2);
      let centerY = y + (j * latoCasella) + (latoCasella / 2);
      
      // Aggiungi il vettore alla lista dei punti
      points.push(createVector(centerX, centerY));
    }
  }

  return points;
}
class lissajou{
  constructor(a,b,xi,yi,r){
    this.a=a;
    this.b=b;
    this.xi=xi;
    this.yi=yi;
    this.r=r;
    this.img = createGraphics(r*2.5,r*2.5);;
    this.drawImg();
  }
  drawImg(){
    this.img.beginShape();
    this.img.strokeWeight(2);

    this.img.stroke(0);
    this.img.noFill();
    let pN=800;
    let offsetX = this.img.width / 2; 
    let offsetY = this.img.height / 2;
    for (let i = 0; i <= pN; i++) {
      let theta = map(i, 0, pN, 0, TWO_PI);
      let x = this.r * cos(theta * this.a) + offsetX; // Coordinate locali
      let y = this.r * sin(theta * this.b) + offsetY; // Coordinate locali
      this.img.vertex(x, y);
    }
    this.img.endShape()
  }
  
  show(){
    imageMode(CENTER);
    image(this.img,this.xi,this.yi);
  }
  movingDot(){
    let thetaT=(frameCount/100)%TWO_PI;
    let xp=this.r*cos(thetaT*this.a)+this.xi;
    let yp=this.r*sin(thetaT*this.b)+this.yi;   
    fill(255,0,0);
    noStroke();
    circle(xp,yp,10);
  }
}

function dynamicLissajou(a,b,offsetX,offsetY,r){
  beginShape();
 strokeWeight(2);
  stroke(0);
  noFill();
  let pN=800;

  for (let i = 0; i <= pN; i++) {
    let theta = map(i, 0, pN, 0, TWO_PI);
    let x = r * cos(theta *a) + offsetX; // Coordinate locali
    let y = r * sin(theta * b) + offsetY; // Coordinate locali
    vertex(x, y);
  }
 endShape()
}