let f = [7, 3,5,2,4]; 
let A = [80, 0,0,0,0];
let slidersAmpiezza = [];
let slidersFrequenza = [];
let ampiezzaLabels = [];
let frequenzaLabels = [];

function setup() {
  createCanvas(windowWidth - 1, 400);

  // Crea le etichette per le colonne
  createP("Ampiezza").position(60, height + 5);
  createP("Frequenza").position(200, height + 5);

  // Crea gli slider e le etichette per ogni armonica
  for (let i = 0; i < f.length; i++) {
    createP("Armonica " + (i + 1)).position(10, height + 40 + i * 60);

    let sliderA = createSlider(0, 200, A[i]);
    sliderA.position(60, height + 40 + i * 60);
    slidersAmpiezza.push(sliderA);

    let sliderF = createSlider(1, 30, f[i]);
    sliderF.position(200, height + 40 + i * 60);
    slidersFrequenza.push(sliderF);

    // Crea le etichette per mostrare il valore degli slider
    let ampiezzaLabel = createP(A[i].toString());
    ampiezzaLabel.position(110, height + 45 + i * 60); // Centrato sotto lo slider
    ampiezzaLabels.push(ampiezzaLabel);

    let frequenzaLabel = createP(f[i].toString());
    frequenzaLabel.position(250, height + 45 + i * 60); // Centrato sotto lo slider
    frequenzaLabels.push(frequenzaLabel);
  }
  backArrow(0,0,0.5);

}

function draw() {
  let t = frameCount;

  background(255);

  let n = 120;
  let P = 500;
  let ph = (t % P) / P;

  fill(255,0,0);
  noStroke();

  for (let i = 0; i <= n; i++) {
    let atm = i / n;
    let x = lerp(0, width, atm);
    let y = height / 2;

    for (let j = 0; j < f.length; j++) {
      A[j] = slidersAmpiezza[j].value(); // Aggiorna l'ampiezza dall'array degli slider
      f[j] = slidersFrequenza[j].value(); // Aggiorna la frequenza dall'array degli slider

      // Aggiorna le etichette dei valori degli slider
      ampiezzaLabels[j].html(A[j].toString());
      frequenzaLabels[j].html(f[j].toString());

      let dy = A[j] * sin(f[j] * (atm + ph) * TWO_PI);
      y += dy;
    }

    circle(x, y, 10);
  }
  
}
