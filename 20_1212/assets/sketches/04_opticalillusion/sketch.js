/*
Aira Dolfo
Instructor: Ben
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 255, 255);
  
  noFill();
  stroke(0, 0, 0);
  for (let i = 0; i < 100; i++){
    ellipse(width/2, height/2, i*10);
  }
    
  translate(width/2,width/2); 
  rotate(radians(frameCount));
  for (let i = 0; i < 100; i++){
    ellipse(20, 20, i*10);
  }
  

  
}