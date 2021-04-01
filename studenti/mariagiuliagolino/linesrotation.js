w=600
let t=0
function setup() {
  createCanvas(w, w);
  
}

function draw() {
  line(0,300,600,300);
  
  let n=8 // number of lines
  let m=w/n // distanza linea
  
  for(let fila = 0; fila < n; fila ++){
    // questo e un loop
    // disegna questa linea // draw a line
    
   line(0,fila*m,w,fila*m); // linee orizzontale
    
  line (fila*m,0,fila*m,w) // linee verticale
    for(let col = 0; col < n; col ++){// per ogni fila una colonna
      
      
      let x=col*m
      let y=fila*m
      let i=(fila*n)+col//indice
      
  
rectMode(CENTER);
// let q = map(i,0,n*n, 6, 48);  
translate(x, y);
rotate(t);
fill(255,30,40);
//square(col*m+m/2,fila*m+m/2,q);
pop();
    
 }
  
    

    
}
    
    
    t=t+0.001
  
  
}