var prompt = require('prompt-sync')();

//player starts with $1000
//they're buying items at a store
//they have to spemd all there money

//psuedocode
//save $1000 in variable
//create an array to store the items the player bought
//until the player runs out of money they should be asked to buy an item
// subtract the price from the money they buy
// put bought item in array

var playermoney = 1000;
var items = [];
while (playermoney > 99) {
    console.log('You still $' + playermoney + "left. A tent is $100. Used yeezys are $500");
    var answer = prompt('which item do you want to buy?')
    if (answer == "tent") {
        playermoney = playermoney - 100
        items.push('tent');
        console.log('you bought a tent');
    } else if (answer == "used yeezys") {
        playermoney = playermoney - 500;
        items.push("used yeezys");
        console.log('you bought used yeezys');

    }
    else {
        console.log("put item in all lowercase");
    }
}
