let w=600
let t=0 //tempo 

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(220);
  
  let n=12
  let m= w/n
  
  for (let fila=0; fila <n; fila++){ // fila = 0,1,2...9// 10 volte
    
    //circle (w/2, fila*m,8)
  
  for (let col=0; col<n; col++){ 
      
     // circle (col*m,w/2,8) // croce di cerchi
    
    let x= col*m; // x dei quadratini
    let y= fila*m // y dei quadratini
    let xc= x+m/2 // coord x centro cerchio
    let yc= y+m/2// coord y centro cerchio
    let i= (fila*n)+ col; //indice
    
    let d= map(i,0,n*n,2,m) //variabile, min, max, min, max // cambia la dimensione a crescere o dimunire dei cerchi
    
    let g= map (col,0,n,0,255) // colore con cui voglio riempire i rettangoli da 0 a 255, scala di grigi
    
    //circle (col*m, fila*m,d)
    // cerchi ad ogni angolo dei quadrati
    
   // random value -> tra 0 e 1
     let v = noise(x/100+t,y/100); 
     let vg = map (v,0,1,0,255); //valore associato a v che crea una scala di grigio
      
     // circle(col*m, fila*m, d);
      rectMode(CENTER);
      fill(vg); // diversi grigi random tra caselle ogni volta che clicco play -- creare animazioni
      square(xc,yc,m);
    
      
      fill(0);
      textAlign(CENTER,CENTER);
      text(i, xc, yc);
    
    }
    
    
  }
  
  t= t + 0.01 // animazione
  
}