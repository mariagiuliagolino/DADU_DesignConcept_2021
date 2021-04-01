w=600

function setup() {
  createCanvas(w, w);
  
}

function draw() {
  background(220); 
  
   line(0,300,600,300);
  //line(0,450,600,450);
  
  let n=8 // number of lines
  let m=w/n // distanza linea
  
  for(let fila = 0; fila < n; fila ++){
    // questo e un loop
    // disegna questa linea // draw a line
    
   line(0,fila*m,w,fila*m); // linee orizzontale
    
  line (fila*m,0,fila*m,w) // linee verticale
    for(let col = 0; col < n; col ++){// per ogni fila una colonna
      
      fill(0)
      
      let x=col*m
      let y=fila*m
      let xc= x + m/2 //centro
      let yc= y+ m/2
      let i=(fila*n)+col//indice
      
  
rectMode(CENTER);
let q = map(i,0,n*n, 6, 48); 
square(col*m+m/2,fila*m+m/2,q)
    
      
      //let d=map(i,0,n*n,2,m) //variare circonfernza cierchi
      //a:b=cd
  
     
      //circle(col*m+(m/2),fila*m+(m/2),12+(fila*4))
             
      //circle(col*m+(m/2),fila*m+(m/2),12+(fila*4)+(col*4))
      
      //circle(col*m+(m/2),fila*m+(m/2),12+(i*2))
   // circle(xc+(fila*2),yc,d) 
      
     
    }
  
    
    
    
}
    
    
    
  
  
}