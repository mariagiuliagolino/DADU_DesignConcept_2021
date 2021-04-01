let w=500
let o=40 // spessore random 
let p=40 // spessore random 

let P=300 // variabile movimento G diagonale
let M=250 // variabile movimento G diagonale
let T=200 // variabile movimento M


function setup() {
  createCanvas(w, w);
  colorPicker = createColorPicker('#255255255');
  colorPicker.position(0, height + 5);
}

function draw() {
   background(colorPicker.color());
  
  // M
  
  stroke(0,130,200,70);
  strokeWeight(o); 
  noFill();
 
  
  beginShape(); // first half M
  vertex(T+T*1/4,T)
  vertex(T/2,T/2)
  vertex(T/2,2*T)
  endShape();
  
  beginShape(); // second half M
  vertex(2*T,2*T)
  vertex(2*T,T/2)
  vertex(T+T*1/4,T)
  endShape();
  
  // G 
  
  
   stroke(0,130,200)
  strokeWeight(p);
  
  arc(M,M,P,P,PI,-PI/4) // C shape arc = x,y centro largheza, altezza start angolo end angolo
  arc(M,M,P,P,PI/4, PI)
  
line(M+P/3-P/8,M,M+P/3+P/8,M) // T shape orizzonatale
  line (M+P/3,M,M+P/3,M+P/2)

  
  
}

function keyTyped(){
  
  // when I stroke a key on my keyboard random goes
  
  console.log(key);
  p = random(1,40)
  o = random(1,40)
  P= random(80,250)
  M=random(80,250)
T=random (80,250)
}

