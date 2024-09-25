let noiseScale = 0.01; // Scala del rumore
let posCasa=[];
let img;
let t=0;

function setup() {
  createCanvas(windowWidth, windowHeight-1);
   img = createImage(windowWidth, windowHeight-1);

  generateMap(img);
  backArrow(0,0,0.5);

}

function draw(){
  t++;
  image(img,0,0);
  for(let i=0; i<posCasa.length; i++){
    casa(posCasa[i].x,posCasa[i].y)
}
stroke(0);
strokeWeight(3);
if(posCasa.length==2){
 line(posCasa[0].x,posCasa[0].y,posCasa[1].x,posCasa[1].y)
 carovana(posCasa[0].x,posCasa[0].y,posCasa[1].x,posCasa[1].y)

}else if(posCasa.length>2){
  for(let i=1; i<posCasa.length; i++){
    line(posCasa[i-1].x,posCasa[i-1].y,posCasa[i].x,posCasa[i].y)
    carovana(posCasa[i-1].x,posCasa[i-1].y,posCasa[i].x,posCasa[i].y)

  if(i==posCasa.length-1){
    line(posCasa[i].x,posCasa[i].y,posCasa[0].x,posCasa[0].y)
    carovana(posCasa[i].x,posCasa[i].y,posCasa[0].x,posCasa[0].y)



  }
  }
}
}
function carovana(xi,yi,xf,yf){
  let xt,yt;
  let T=dist(xi,yi,xf,yf);
  xt=lerp(xi,xf,(t/T)%1);
  yt=lerp(yi,yf,(t/T)%1);
  fill(255,0,0);
  circle(xt,yt,5);
}


function casa(x,y){
  rectMode(CENTER)
  fill(255);
  noStroke();
 rect(x,y,10,10)

 }




function generateMap(image) {
  image.loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let noiseValue = noise(x * noiseScale, y * noiseScale);
      let colorValue = map(noiseValue, 0, 1, 0, 255);

      let c;
      if (noiseValue < 0.35) {

        // Intervallo di colore blu
        c = color(0, 0, colorValue);
      } else if (noiseValue < 0.45) {
        // Intervallo di colore marrone
        c = color(colorValue*1.2, colorValue * 1.2, 0);

      } else if (noiseValue < 0.6) {
                // Intervallo di colore verde

        c = color(0, colorValue, 0);
      } else {
                // Intervallo di colore marrone

        c = color(colorValue, colorValue * 0.5, 0);

      }

      // Imposta il colore del pixel
      image.set(x, y, c);
    }
  }
  image.updatePixels();
}

function mouseClicked() {
  let posT = createVector(mouseX,mouseY);
  append(posCasa, posT)

}