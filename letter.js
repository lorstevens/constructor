

var wordBankFile = require("./wordbank.js");
var inquirer = require("inquirer");



var Letter = function (letter) {
    this.letter = letter
    this.hideLetters = function (){
        var blankLetters = ""
        for (var i = 0; i < letter.length; i++){
            blankLetters += ("_,");
        }
            
    }


}


module.exports = Letter;

