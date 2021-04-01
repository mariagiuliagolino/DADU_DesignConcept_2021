w=600
let t=0
function setup() {
  createCanvas(w, w);
  
}

function draw() {
  
  let n=8 // number of lines
  let m=w/n // distanza linea
  
  for(let fila = 0; fila < n; fila ++){
    // questo e un loop
    
    
    for(let col = 0; col < n; col ++){// per ogni fila una colonna
      
      
      let x=col*m
      let y=fila*m
      let i=(fila*n)+col//indice
      
  
rectMode(CENTER);
let q = map(i,0,n*n, 50, 5);  
translate(0,w);
rotate(t);
fill(255,30,40);
square(col*m+m/2,fila*m+m/2,q);
pop();


}
  
    

    
}
    
    
    t=t+0.001
  
  
}