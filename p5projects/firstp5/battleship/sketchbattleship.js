function setup(){
     createCanvas(200,200);
    background(200);
    rect(0, 0, 50, 50);
    rect(0, 50, 50, 50);
    rect(0, 100, 50, 50);
    rect(0, 150, 50, 50);
    rect(50, 0, 50, 50);
    rect(50, 50, 50, 50);
    rect(50, 100, 50, 50);
    rect(50, 150, 50, 50);
    rect(100, 0, 50, 50);
    rect(100, 50, 50, 50);
    rect(100, 100, 50, 50);
    rect(100, 150, 50, 50);
    rect(150, 0, 50, 50);
    rect(150, 50, 50, 50);
    rect(150, 100, 50, 50);
    rect(150, 150, 50, 50);   
}

function mouseClicked(){
    if(mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(0, 0, 50, 50)
    }

    if(mouseX > 0 && mouseX < 50 && mouseY > 50 && mouseY < 100){
fill('blue')
rect(0, 50, 50, 50);
    }

  if(mouseX > 0 && mouseX < 50 && mouseY > 100 && mouseY < 150){
fill('blue')
rect(0, 100, 50, 50);
    }
 if(mouseX > 0 && mouseX < 50 && mouseY > 150 && mouseY < 200){
fill('blue')
rect(0, 150, 50, 50);
    }
 if(mouseX > 50 && mouseX < 100 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(50, 0, 50, 50);
    }
 if(mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 100){
fill('blue')
rect(50, 50, 50, 50);
    }
 if(mouseX > 50 && mouseX < 100 && mouseY > 100 && mouseY < 150){
fill('blue')
rect(50, 100, 50, 50);
    }
 if(mouseX > 50 && mouseX < 100 && mouseY > 150 && mouseY < 200){
fill('red')
rect(50, 150, 50, 50);
textSize(50)
return text('You win', 0, 100);    
}
 if(mouseX > 100 && mouseX < 150 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(100, 0, 50, 50);
        }
        if(mouseX > 100 && mouseX < 150 && mouseY > 50 && mouseY < 100){
fill('blue')
rect(100, 50, 50, 50);
        }
if(mouseX > 100 && mouseX < 150 && mouseY > 100 && mouseY < 150){
fill('blue')
rect(100, 100, 50, 50);
}
if(mouseX > 100 && mouseX < 150 && mouseY > 150 && mouseY < 200){
fill('blue')
rect(100, 150, 50, 50);
}
if(mouseX > 150 && mouseX < 200 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(100, 0, 50, 50);
}

if(mouseX > 150 && mouseX < 200 && mouseY > 0 && mouseY < 50){
fill('blue')
rect(150, 0, 50, 50);
}

if(mouseX > 150 && mouseX < 200 && mouseY > 50 && mouseY < 100){
fill('blue')
rect(150, 50, 50, 50);
}

if(mouseX > 150 && mouseX < 200 && mouseY > 100 && mouseY < 150){
fill('blue')
rect(150, 100, 50, 50);
}

if(mouseX > 150 && mouseX < 200 && mouseY > 150 && mouseY < 200){
fill('blue')
rect(150, 150, 50, 50);
} 

}