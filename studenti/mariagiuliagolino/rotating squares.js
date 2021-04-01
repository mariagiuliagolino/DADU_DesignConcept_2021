
let w = 600;
let t=0 //tempo
let a = 0; // angolo
let

function setup() {
    createCanvas(w, w);
    colorMode(HSB); // R,G,B ---> H(0,360) S (0-100) B (0, 100)
  }
  
  
  function draw() {
      
    background(220);
  
    let d = width*0.1; //dimensione quadrati

    //( let h = map (d, 0, w ,0, 360); // da -1 a +1 ---> voglio tradurre da 0 a 360, valori di H
   //non funziona

    for (let x = d; x < width ; x+= d) {
      for (let  y = d; y < height ; y += d) {
        push();

        rectMode(CENTER);
        translate(x, y);
        rotate(t);
     //   fill(h,80,80) 
     fill(255,30,40)
        rect(0, 0, d, d);
        pop();
      }
    }
    t= t + 0.01 // li fa muovere
  
function keyTyped(){
    console.log(key);

  

  }
}

