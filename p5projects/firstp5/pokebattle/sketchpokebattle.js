function setup() {

    createCanvas(500, 500)

    fill('green')
    fill('red')
    rect(50, 100, 100, 100)
    fill(200)
    rect(350, 100, 100, 100)
    fill('white')
    rect(50, 225, 100, 25)
    rect(50, 260, 100, 25)
    rect(50, 295, 100, 25)
    rect(350, 225, 100, 25)
    rect(350, 260, 100, 25)
    rect(350, 295, 100, 25)
    fill('blue')
    text('Flamethrower', 60, 240)
    text('Ember', 75, 275)
    text("Fire Punch", 70, 310)
    text('Barrage', 380, 240)
    text('Constrict', 375, 275)
    text('Dizzy Punch', 365, 310)
    color('green')

}
var pokemon1 = {
    atk1: 20,
    atk2: 25,
    atk3: 30,
    HP: 80
}
var pokemon2 = {
    atk1: 10,
    atk2: 15,
    atk3: 20,
    HP: 100
}
var speed = 5
var x = 150
x = x + speed
var pokemon1atk = [pokemon1.atk1, pokemon1.atk2, pokemon1.atk3]
var pokemon2atk = [pokemon2.atk1, pokemon2.atk2, pokemon2.atk3]
var ball;
var ballX = 100;
var shouldShootBall = false;
function draw() {
    background('purple')
    if (shouldShootBall) {
        ellipse(ballX, 150, 20, 20);
        ballX = ballX + 10;

        if (ballX > 400) {
            shouldShootBall = false;
            ballX = 100;
            
        }
    }
    fill(0, 200, 0)
    rect(50, 70, pokemon1.HP, 10);
    fill(0, 200, 0)
    rect(350, 70, pokemon2.HP, 10);
    fill('red')
    rect(50, 100, 100, 100)
    fill(200)
    rect(350, 100, 100, 100)
    fill('white')
    rect(50, 225, 100, 25)
    rect(50, 260, 100, 25)
    rect(50, 295, 100, 25)
    rect(350, 225, 100, 25)
    rect(350, 260, 100, 25)
    rect(350, 295, 100, 25)
    fill('blue')
    textSize(13)
    text('Flamethrower', 60, 240)
    text('Ember', 75, 275)
    text("Fire Punch", 70, 310)
    text('Barrage', 380, 240)
    text('Constrict', 375, 275)
    text('Dizzy Punch', 365, 310)

}

function mouseClicked() {
    // if(mouseX > 350 && mouseX < 450 && mouseY > 225 && mouseY < 250){
    //     background('purple')
    //     pokemon1.HP = pokemon1.HP - pokemon2.atk1

    // }
    //     if(mouseX > 350 && mouseX < 450 && mouseY > 260 && mouseY < 285){
    //     background('purple')
    //     pokemon1.HP = pokemon1.HP - pokemon2.atk2
    // }
    //     if(mouseX > 350 && mouseX < 450 && mouseY > 295 && mouseY < 320){
    //     background('purple')
    //     pokemon1.HP = pokemon1.HP - pokemon2.atk3
    // }
    if (mouseX > 50 && mouseX < 150 && mouseY > 225 && mouseY < 250) {
        shouldShootBall = true;
        pokemon2.HP = pokemon2.HP - pokemon1.atk1
        background('purple')
        pokemon1.HP = pokemon1.HP - random([pokemon2.atk1, pokemon2.atk2, pokemon2.atk3])
    }
    if (mouseX > 50 && mouseX < 150 && mouseY > 260 && mouseY < 285) {
          shouldShootBall = true;
        background('purple')
        pokemon2.HP = pokemon2.HP - pokemon1.atk2
        pokemon1.HP = pokemon1.HP - random([pokemon2.atk1, pokemon2.atk2, pokemon2.atk3])
    }
    if (mouseX > 50 && mouseX < 150 && mouseY > 295 && mouseY < 320) {
          shouldShootBall = true;
        background('purple')
        pokemon2.HP = pokemon2.HP - pokemon1.atk3
        pokemon1.HP = pokemon1.HP - random([pokemon2.atk1, pokemon2.atk2, pokemon2.atk3])
    }
    return text("GAME OVER", 100, 200)

}

