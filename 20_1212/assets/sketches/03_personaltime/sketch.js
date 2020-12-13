/*
Aira Dolfo
Instructor: Ben
*/


let r = 0; 


function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  frameRate(60);
}



function draw() {
  background(55, 126, 240);
  
  
  
  // circle rotating through rings
  let fc = frameCount;
  
  let s = second();
  
  translate(width/2,height/2);
  rotate(r); 
  // r = r + QUARTER_PI * 0.05;
  
  if (s < 60){
    
    r = r + 1;
  
  } else if (s >= 60){
    
    r = r - 1;
  }
  
  let x1 = map(mouseX, 0, width, 25, 400);
  noStroke();
  fill(255, 219, 181);
  let circleX = second() % 10 * (width/10);
  circle(circleX,0,s*3);
  // square(squareX, height/2 - squareSize/2, squareSize); 
  
  // console.log(fc,m);
  
 }
