
let w = 600;

let x=120;
let y=300

// array
let xx=[120,90,400,6,90]
let yy=[1,2,3,4,5]

function setup() {
  createCanvas(w, w);
 // array operators

 xx.push(500); // aggiungere un elemento a xx
 yy.push(500) // aggiungere elemento a yy

 console.log(xx); // quali elementi dentro xx
 console.log(xx.length);  // quanti elementi dentro xx
 console.log(xx[0]); // primo elemento

}

function draw() {
  background(200);
  circle(x,y,24);

  //un cerchio per ogni elemento

 fill(0,32)
 noStroke()

  for(let i=0; i<xx.length; i++){
let d= map(i,0,xx.length,2,64)
    circle(xx[i],yy[i],d);


  }

  if(xx.length < 500){ // dopo 500 pallini la smette
  xx.push(mouseX);
  yy.push(mouseY);
} 

  // x=mouseX
}

function keyTyped(){
  console.log(key);
  xx.push(random(w));
}