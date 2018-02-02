var letterFile = require('./letter.js');
var wordBankFile = require("./wordbank.js");
// var hangman = require("./hangman.js");



var Word = function (word) {
    this.word = word
    this.arrayLetters = [];
    this.showLetters = function (){
        var displayLetters = ""
        for (var i = 0; i < word.length; i++){
           this.arrayLetters.push(word[i]);
        }  
    }

 console.log(arrayLetters);    
}

    this.checkLetter = function (ltr) {
        var array2 = wordBankFile.randomWord.length;
        for (var i = 0; i < array2.length; i++) {
            this.arrayLetters.push(array2[i]);
            if (ltr === array2[i]){
                return true;
                console.log("hurray" + array2[i]);
            }
            // console.log(arrayLetters);
            }
       }     
            // console.log(arrayLetters); 
  



Word();


module.exports = Word;

