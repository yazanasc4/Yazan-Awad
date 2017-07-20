function setup(){
createCanvas(400, 400);
background(100,200, 50);
}
function mouseDragged() {
  var r = random(50)
  var w = random(50)
  var y = random(500)
  var x = random(500)
  var q = random(500)
  fill(y, x, q)
  ellipse(mouseX, mouseY, r, w);

  // prevent default
  return true;
}
function mousePressed() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return true;
} 

