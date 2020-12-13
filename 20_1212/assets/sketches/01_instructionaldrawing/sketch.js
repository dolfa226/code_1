/*
Aira Dolfo
Instructor: Ben

INSTRUCTIONS
1. Begin with the p5 Canvas set in 400px by 400px 
2. Fill the background of the canvas in dark blue
3. Create at the center of the canvas a circle that is 300 px in width 
4. Call this Circle1
5. Keep the fill of the circle bright orange and remove the stroke 
6. Create in the top left corner a circle(that goes outside of grid intersecting the (x,y) axis) in 300 px
7. Call this Circle2
8. Remove stroke
9. Fill with a light purple color
10. Create same circle size in bottom left corner in bright yellow
11. Call this Circle3 
12. Remove stroke 
13. Make a long rectangle with dimensions (30, -10, 55, 550, 20); and repeat 5 times
14. on each repeat change the 30px value so it increases by 100 each time 
15. Fill the rectangle with bright pink color 
*/



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(21, 8, 145);
  
  //circle1
  noStroke();
  fill(245, 184, 19);
  circle(200, 200, 300);
  
  //circle2
  noStroke();
  fill(221, 204, 235);
  circle(0, 0, 300);
  
  //circle3
  noStroke();
  fill(255, 232, 1);
  circle(0, 400, 300);
  
  //rect1
  fill(255, 97, 214);
  rect(30, -10, 55, 550, 20);
  
  //rect2
  fill(255, 97, 214);
  rect(130, -10, 55, 550, 20);
  
  //rect3
  fill(255, 97, 214);
  rect(230, -10, 55, 550, 20);
  
  //rect4
  fill(255, 97, 214);
  rect(330, -10, 55, 550, 20);
  
  //rect5
  fill(255, 97, 214);
  rect(430, -10, 55, 550, 20);
  
}