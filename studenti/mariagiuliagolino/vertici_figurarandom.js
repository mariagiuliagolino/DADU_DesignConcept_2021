
   let w= 600
   let vertici = [];

   function setup() {
      createCanvas(w, w);

      for (var i=0;  i<10;  ++i) {

         let vec = createVector(random(width), random(height));
         vertici.push(vec);
      }
   }

   function draw() {
      background(200);
      
      beginShape();

         for (let i=0;  i<vertici.length;  ++i) {
            vertex( vertici[i].x, vertici[i].y );
         }


      endShape(CLOSE);

}

function keyTyped(){
   console.log(key);
   vertici.push(random(w));
 }