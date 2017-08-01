var HP = 100;
var gold = 0;
var numberDefeated = 0;
function setup() {

    $('body').append('<h1>Welcome to Ogre Fighter</h1>');
    $('body').append('<p>Slay the ogres If you do you get 10 gold. The more gold the harder it gets.</p>');


    // stats
    $('body').append('<h3>STATS<h3><p id="stats"></p>');
    $('body').append('<button onclick="attack()">Attack The Ogre!</button>');

    // Add ogre images
    $('body').append('<div id = "ogres"></div>');
    updateStats();
}
function updateStats() {
    $('#stats').text('HP:' + HP + ' | Gold:' + gold + ' | ogres slain:' + numberDefeated);

}
    function spawnogre(){
        $('#ogres').prepend('<img src = "http://www.52insk.com/wp-content/uploads/2015/08/Shrek.jpg">')
    }

function attack() {
    if (HP > 0) {
        if (Math.random() * 100 > gold) {
            gold += 10
            numberDefeated++
            $('#ogres').prepend('<p>You won +10 gold</p>');
            updateStats();
    spawnogre();
        }
        else {
            gold--;
            hp--;
            $('#ogres').prepend('<p>You Lost! -1 gold.</p>');
            updateStats();
    }
    }
}



$(document).ready(setup);

//add game title
// Add game info
// add stats
// ogre image
// add attack button
// when a button is clicked
// if player has hp they win
// add paragraph saying you win
// + gold to player
// num of ogre defeated
// else 
// you lost
// -gold
// -hp
// add ogre image
//else
// game over