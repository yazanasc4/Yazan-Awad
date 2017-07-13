//Rock
var playerchoice = "Rock";

var compchoice = [rock, paper, scissor];
var compchoice = compchoice[Math.floor(Math.random()*3)]

if (compchoice == playerchoice){
    console.log("It's a tie")
}

else if (compchoice == "scissor" && playerchoice == "Rock"){
    console.log('Player wins')
}
else if (compchoice == 'paper' && playerchoice == 'Rock'){
    Console.log('you lose');
}

//Comp= rock and player=scissors
else if (compchoice == 'scissor' && playerchoice == 'paper'){
    Console.log('you lose');
}

