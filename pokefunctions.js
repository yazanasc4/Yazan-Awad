function randletter() {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'I', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']
    var random = Math.floor(alphabet.length * Math.random());
    return alphabet[random];
   
}

randletter();
 
function randword(){
        var word = ""
        var lengthofword = Math.floor(5 * Math.random())
        for (var i = 0; i < lengthofword; i++) {
       
        word = word + randletter();
    }
    return word;
}

randword();

function randsentence(){
           
           var lengthofsentence = Math.floor(10 * Math.random()) //sets the number of words in the sentence
           var complete_sentence_array = []
           for (var q = 0; q < lengthofsentence; q++){
                var sentence = randword(); //value of each word
                complete_sentence_array.push(sentence)
        }
            var final_sentence = ""
           for (var q=0; q < lengthofsentence; q++)
           {
                final_sentence = final_sentence + " " + complete_sentence_array[q];
           }
           return(final_sentence)
}