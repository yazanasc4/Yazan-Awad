function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = (300, 0, 0);
  g = (0, 300, 0);
  b = (0, 0, 300);
}

function draw() {
  background(127);
  // Draw a circle
  strokeWeight(2);
  fill(r);
  rect(0, 0, 500, 10);
  fill(g);
  rect(0, 10, 500, 10);
  fill(b);
  rect(0, 20, 500, 10);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(rect(0, 0, 500, 10));
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
