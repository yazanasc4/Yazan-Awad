// Create a rand() function
// Takes a number
// Returns a number between 0 and that number

// Psuedocode
// multiply the math.random by the given number
// remove decimal
// return remaining integer

function rand(num) {
// returns random integer between 0 and num
    var randomnum = num * Math.random();
    var result = Math.floor(randomnum);
    return result;
}   
