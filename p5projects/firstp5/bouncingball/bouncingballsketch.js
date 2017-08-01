
var x = 0;
var speed = 3;
y = 0
var speed2 = 3;
function setup() {
  createCanvas(800, 400);

}
function draw() {
  background(0, 300, 0);
  fill('black')
  rect(mouseX, 380, 100, 20)
  score = 0



  fill(0, 100, 200);
  noStroke();
  var ball = ellipse(x, y, 50, 50);
  textSize(60)
 
 
  text("Score:" + score, 400, 100)
  x = x + speed;
  y = y + speed2;
  score = 0
  q = 0
  score += q



  if (x > width - 25 || x < 0) {
    speed = speed *
      -1;
  }
  if (y < 0) {
    speed2 = speed2 * -1
  }
  if (y > height - 45 && x > mouseX && x < mouseX + 100) {                                   
   
   speed2 += .5 
   speed +=1
   speed2 = speed2 * -1
   q++
}
 
 
  else if(y> height-20){
  text('Issa L', 200, 200)
  
}
}