/* 
Aira Dolfo
Instructor: Ben
Assignment 8: Motion Poster

SPIRAL

*/

var angle = 5; 
var offset = 400; 
var scalar = 40; 
var speed = 0.6;
let ts = 20;

function setup(){
  createCanvas(800, 800);
  background(0, 0, 0);
  
}


function draw(){
    
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  
  rotate(PI/6);
  fill(255, 255, 255, 110);
  textSize(ts);
  text('SPIRAL', x, y)

  angle += speed;
  scalar += speed;
  

  
}