let drawCircle = true;

function setup() {
  createCanvas(400, 400);
}

// FACE
function draw() {
  background(239, 235, 247);
  
  //FACE
  if (drawCircle == true) {
    frameRate(4)
    noStroke();
    fill(255, 237, 36);
    let x = random (80, 350); 
    let y = random (100, 300);
    ellipse(200, 200, mouseX/2, y);
    drawCircle= false;
  }
  
  //EYES
  fill(255, 255, 255);
  strokeWeight(2);
  stroke(36, 36, 36);
  circle(180, 195, 15);
  circle(220, 195, 15);
  
  //MOUTH
  noStroke();
  fill(51);
  arc(200, 220, 30, 30, 0, PI);

}

function mouseMoved() {
  drawCircle = true;
  
}







