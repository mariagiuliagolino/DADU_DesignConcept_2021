
let w = 600;
let n=5; // n*n quadrati
let dati=[]; // array vuoto

function setup() {
  createCanvas(w, w);

// lancia la moneta 25 volte 
// regista il risultato

  
  for(let i = 0; i< (n*n); i++){
    dati.push(moneta()); // aggiunge un elemento alla fine
}
console.log(dati);

}


function draw() {
  background(200);

  m=w/n // spazio tra le linee

  
for(let fila=0; fila < n; fila++){
    strokeWeight(1)
line(0,fila*m,w,fila*m);
line(fila*m,0,fila*m,w);

for(let col=0; col<n; col++){
// angolo, spigolo

let x= col*m;
let y= fila*m;
let xc= x + m/2;
let yc= y + m/2;
let i= fila*n + col; // da 0 --> 24 , 25 valori, n*n


//circle(xc,yc,20);
text (dati[i],xc,yc); // indice dentro l'array

strokeWeight(8);


if(dati[i] == 0){
    // fai una cosa
    line(x+m/2,y,x+m/2,y+m);
} else {
    // fai una cosa diversa
    line(x,y+m/2,x+m,y+m/2);
}


}

}

}

function keyTyped(){
  console.log(key);
  moneta();
  creaDati();
}

// funzione inventata flip the coin function

function moneta(){ 

    let risultato= random(1);
    if(risultato<0.5){ 
        console.log("testa");
        return 1;
    }
    else{
        console.log("croce");
        return 0;
    }

}


function creaDati(){
    // cancella i dati  // clear existing data
    dati = [];
    // crea n*n dati nuovi // create a new sequence of 0 and 1
    for(let i = 0; i< (n*n); i++){
        dati.push(moneta()); // add 1 element at the end of the array // + 1 elemento alla fine
    }
    console.log(dati);
}
