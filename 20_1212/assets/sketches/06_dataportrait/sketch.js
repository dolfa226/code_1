/*
Aira Dolfo
Instructor: Ben


Data from Partner: 
thursday: I washed my Face at 9:17 am & 8:57 pm
friday: I washed my Face at 6:13 am & 9:13 pm
saturday: I washed my Face at 8:26 am & 10:11 pm
sunday: I washed my Face at 9:41 am & 10:56 pm
monday: I washed my Face at 7:11 am & 11:06 pm

List Form: 
[0917, 0857, 0613, 0913, 0826, 1011, 0941, 1056, 0711, 1106]
*/



// Space Horizontally
let mySpaceHoriz = [400, 500, 600, 700, 800, 900, 1000, 1100, 1200];


// Space Vertically
let mySpaceVert = [300, 400, 500, 600, 700, 800, 900, 1000, 1100];

// AM
let countTimesAM = [0917, 0613, 0826, 0941, 0711];

// PM
let countTimesPM = [0857, 0913, 1011, 1056, 1106];

function setup() {
  createCanvas(1200, 1200);
  noStroke();
  noLoop();
  blendMode(MULTIPLY);
  
  
}

function draw() {
  background('#f2fffc');
  
    fill('#80bdff');
  // AM – Horizontal
  for (i = 0; i < 5; i++){
    rect(100, mySpaceHoriz[i], countTimesAM[i], 30, 20);
  }
  textSize(24);
  text('AM', 100, 350)
  
    fill('#9c6eff');
  // PM – Vertical
  for (i = 0; i < 5; i++){
    rect(mySpaceVert[i], 100, 30, countTimesPM[i], 20);
  }
  textSize(24);
  text('PM', 220, 150)
   
  

}
