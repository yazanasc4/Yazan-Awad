var word = ['eat', 'swim', 'run', 'jump']
var typed = ""

function setup(){
    createCanvas(800, 400);
    background(300, 0, 0)
    
     text("type word below", 50, 200)
    }


function keyTyped(){
    background(300, 0, 0)
    textSize(30)
    text(random(word), 100, 200)
    console.log(typed);
    typed = typed + key
    if(typed == random(word)){
        alert('you win')
    }}
    