/* 
Aira Dolfo
Instructor: Ben
Assignment 9: Interaction Poster

SPIRAL

*/

//background slider
let sizeColor = 0;
let sizeSlider;

//type slider
let typeColor = 0;
let typeSlider;

var angle = 5; 
var offset = 400; 
var scalar = 40; 
var speed = 0.6;
let ts = 20;

function setup(){
  createCanvas(800, 800);
  background(0, 0, 0);
  
  const labelSpace = 30;
  const labelStartY = 20;
  const labelStartX = 820;
  
  const typeLabel = createDiv("Color");
  const sizeLabel = createDiv("Size");
  
  typeLabel.position(labelStartX, labelStartY);
  sizeLabel.position(labelStartX, labelStartY + labelSpace);
  
  const sliderSpace = 50;
  typeSlider = createSlider(0, 255, 30, 1);
  sizeSlider = createSlider(0, 100, 30, 1);
  
  typeSlider.position(labelStartX + sliderSpace, labelStartY)
  sizeSlider.position(labelStartX + sliderSpace, labelStartY + labelSpace);
}


function draw(){
  
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  
  rotate(PI/6);
  fill(typeSlider.value());
  type = typeSlider.value();

  textSize(sizeSlider.value());
  
  text('SPIRAL', x, y)

  angle += speed;
  scalar += speed;
  
}






