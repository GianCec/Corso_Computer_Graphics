function backArrow(x,y,scaleFactor){
  
    // Crea un link a una pagina dello stesso sito
    let link = createA('../index.html', '');
  
    // Crea una freccia verso sinistra e la disegna su un grafico
    let arrowGraphic = createGraphics(100 * scaleFactor, 100 * scaleFactor);
    arrowGraphic.stroke(0);
    arrowGraphic.strokeWeight(4 * scaleFactor);
    arrowGraphic.fill('#d83c01');
    
    arrowGraphic.beginShape();
    arrowGraphic.vertex(70 * scaleFactor, 20 * scaleFactor);
    arrowGraphic.vertex(30 * scaleFactor, 50 * scaleFactor);
    arrowGraphic.vertex(70 * scaleFactor, 80 * scaleFactor);
    arrowGraphic.vertex(70 * scaleFactor, 60 * scaleFactor);
    arrowGraphic.vertex(100 * scaleFactor, 60 * scaleFactor);
    arrowGraphic.vertex(100 * scaleFactor, 40 * scaleFactor);
    arrowGraphic.vertex(70 * scaleFactor, 40 * scaleFactor);
    arrowGraphic.endShape(CLOSE);
  
    // Crea un'immagine dall'elemento grafico e la aggiunge come figlio del link
    let img = createImg(arrowGraphic.elt.toDataURL(), 'Freccia verso sinistra');
    img.parent(link); // Associa l'immagine al link
  
    // Posiziona l'immagine (e quindi il link) nel canvas
  
    link.position(x, y);
  }