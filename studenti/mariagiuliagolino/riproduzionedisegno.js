let w = 600;
let n=5; // n*n quadrati
let dati=[]; // array vuoto
let numero=[1,2,3,4
]
function setup() {
  createCanvas(w, w);

// lancia la moneta 25 volte 
// regista il risultato

  
  for(let i = 0; i< (n*n); i++){
    //dati.push(numero()); // aggiunge un elemento alla fine
}
console.log(dati);

}


function draw() {
  background(200);

  m=w/n // spazio tra le linee

  
for(let fila=0; fila < n; fila++){
    strokeWeight(0)
line(0,fila*m,w,fila*m);
line(fila*m,0,fila*m,w);

for(let col=0; col<n; col++){
// angolo, spigolo

let x= col*m;
let y= fila*m;
let xc= x + m/2;
let yc= y + m/2;
let i= fila*n + col; // da 0 --> 24 , 25 valori, n*n


strokeWeight(8);


if(dati[i] == 0){
    // fai una cosa
    square(col*m+m/2,fila*m+m/2,20)
} else {
    // fai una cosa diversa
    square(col*m+m,fila*m+m,20)
}


}

}

}

function keyTyped(){
  console.log(key);
  numero();
  creaDati();
}

// funzione inventata flip the coin function

function numero(){ 

    let risultato= random(numero);
    if(risultato<2){ 
        console.log(" quadrato piccolo");
        return 1;
    }
    else{
        console.log("quadrato grande");
        return 0;
    }

    function numero(){ 

        let risultato= random(numero);
        if(risultato<4){ 
            console.log(" quadrato piccolo");
            return 1;
        }
        else{
            console.log("quadrato grande");
            return 0;
        }

}
}