function setup(){
    createCanvas(600, 400)
    

}
rectx = 290
bally = 360
var shoot = 2
var xMove = -1
var x = 0;
var x = x
rect1x = 400
y1 = 50
y2 = 100
// function alien(alien1, alien2, alien3, alien4, alien5, alien6, alien7, alien8){
//     this.alien1 = rect(400 + x, 50, 25, 25);
//     this.alien2 = rect(450 + x, 50, 25, 25);
//     this.alien3 = rect(500 + x, 50, 25, 25);
//     this.alien4 = rect(550 + x, 50, 25, 25);
//     this.alien5 = rect(400 + x, 100, 25, 25);
//     this.alien6 = rect(450 + x, 100, 25, 25);
//     this.alien7 = rect(500 + x, 100, 25, 25);
//     this.alien8 = rect(550 + x, 100, 25, 25);

// }
function draw(){
    background('blue')
    x--
    if(x < -350){
        x++
    }

    rect(400 + x, y1, 25, 25);
    rect(450 + x, y1, 25, 25);
    rect(500 + x, y1, 25, 25);
    rect(550 + x, y1, 25, 25);
    rect(400 + x, y2, 25, 25);
    rect(450 + x, y2, 25, 25);
    rect(500 + x, y2, 25, 25);
    rect(550 + x, y2, 25, 25);
    fill('green')
    rect(rectx, 350, 20, 40)
    fill('red')
    ball = ellipse(rectx + 11, bally, 10)
    
    if (shoot == 1){
        bally -=10
    }
    if (bally <= 0){
        bally = 380
        shoot = 2
    }
    if (keyIsDown(LEFT_ARROW)){
       rectx -= 5 
    }
    if (keyIsDown(RIGHT_ARROW)){
       rectx += 5
    }
    if (rectx <= 0 || rectx > 560){
        if (keyIsDown(LEFT_ARROW)){
       rectx += 5 
    }
    if (keyIsDown(RIGHT_ARROW)){
       rectx -= 5 
    }
         
    }

    
}
function mousePressed(){
       shoot = 1
}
