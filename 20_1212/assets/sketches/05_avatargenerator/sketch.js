/* Aira Dolfo
Instructor: Ben
*/

//body
let avatarBody1;
let avatarBody2;
let avatarBody3;
let avatarBody4;


//head
let avatarHead1;
let avatarHead2;
let avatarHead3;
let avatarHead4;


function preload() {
  let avatarBody1 = loadImage("assets/01_Avatar_Body.png");
  let avatarBody2 = loadImage("assets/02_Avatar_Body.png");
  let avatarBody3 = loadImage("assets/03_Avatar_Body.png");
  let avatarBody4 = loadImage("assets/04_Avatar_Body.png");
  body = [ avatarBody1, avatarBody2, avatarBody3, avatarBody4 ]
  
  let avatarHead1 = loadImage("assets/01_Avatar_Head.png");
  let avatarHead2 = loadImage("assets/02_Avatar_Head.png");
  let avatarHead3 = loadImage("assets/03_Avatar_Head.png");
  let avatarHead4 = loadImage("assets/04_Avatar_Head.png");
  head = [ avatarHead1, avatarHead2, avatarHead3, avatarHead4 ]
}


function setup(){
  createCanvas(500, 500);
  background(237, 244, 245);
  noLoop();
  
  //instructions
  textAlign(CENTER);
  textSize(26)
  text('Click canvas to generate an avatar!', 240, 200)

}


function mousePressed(){
   background(237, 244, 245);
  
  let randomBody = random(body);
  let randomHead = random(head);
  
  //image(img, x, y, [width], [height])
  image(randomBody, 143.5, 180, 213, 276);
  image(randomHead, 187, 60, 126, 126);
  
 
  
}