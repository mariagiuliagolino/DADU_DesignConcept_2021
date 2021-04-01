let w = 600;
let r=w/2 // radius
let a=0 // angle

function setup() {
  createCanvas(w, w);
  colorMode(HSB); // R,G,B ---> H(0,360) S (0-100) B (0, 100)
}

function draw() {
  background(0,0,90);

  // noFill()

  let h = map (sin(a), -1, 1 ,0, 360); // da -1 a +1 ---> voglio tradurre da 0 a 360, valori di H
fill(h,80,80)

  circle(w/2,w/2,r*2)
 
  let x= w/2 + cos(a) * r;
  let y= w/2 + sin(a) * r;

  fill(0)
  circle (x,y,36)

  a= a + 0.01

  let xp= x + cos(a*2) * r/4; // r/4 is the distance between the planets
  let yp= y + sin(a*2) * r/4;

  circle (xp,yp,36/2)

  
}

function keyTyped(){
  console.log(key);

}