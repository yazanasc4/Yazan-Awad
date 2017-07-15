// create array with 4 battle locations
// create another array with 2 numbers
// create array with 2 supersmah brawls charectar
// make function that asks the user how many times you strike and who will they choose


var prompt = require('prompt-sync')();

var masharray = ['beach', 'forest', 'jungle', 'snow'];
var firstquestion = ['1', '2', '3'];
var secondquestion = ['pikachu', 'mario', 'browser'];
for (x = 0; x<1; x++){
// var answer1 = prompt('How many times will you strike');

// if (answer1 = ['1', '2', '3']){
//     prompt('Who will you fight?')
// } else {
//     console.log('pick a number between 1 and 3')
// }
// if (answer2 = ['pikachu', 'mario', 'browser']){
//     console.log('good')
// } else{
//     console.log('your answer is invalid')
// }
// }

// console.log('you fought '+ answer2 + " in the " + masharray + 'and hit them' + answer1 + "times. Too bad, Mewtwon wins.")
firstquestion.push(prompt('How many times will you strike'));
firstquestion.push(prompt('Who will you choose to fight?'));
}

var randarray = function(array){
     return array[Math.floor(Math.random() * array.length)]
}

console.log("You fought" + randarray(secondquestion) + "in the" + randarray(masharray) + "and hit them" + randarray(firstquestion) + 'times. Too bad, Mewtwo wins.'
)
