var inquirer = require("inquirer");
var word = require("./word.js");
var letterConstructor = require("./letter.js");
var wordBankFile = require("./wordbank.js");

var remainingGuesses = 2;

var randomNewWord = wordBankFile.randomWord;
var blankRandom = new letterConstructor(randomNewWord);

// var letterArray = word.[this.arrayLetters];
// console.log(letterArray);

console.log('Hey! Play Hangman!');

inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Want to play?",
    }
    ])
    .then (function(answer){
      if (answer.play === true){
        console.log(blankRandom.hideLetters());
        letsPlay();
      }
      else {
        console.log ("Okay, weird");
     }
  });
  
      
function letsPlay(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'letter',
      message: 'Please type a letter.'
    }
  ])
.then(function (answers){
   var userGuess = answers.letter;

//PSEUDOCODE: FIGURE OUT HOW TO LINK USERGUESS TO LETTERARRAY IN WORD.JS FILE
   if (userGuess === true){
      console.log ("ahhhhh yes!");
    }
    else {
      console.log("Nah, try again") 
      letsPlay();
      remainingGuesses--;
    }
        if (remainingGuesses === 0){
          console.log("Sorry, you lost")
          playAgain ();
        }
    });
  
}


//PSEDOCODE: FIGURE OUT HOW TO STOP GAME WHEN USER DOESNT WANT TO PLAY AGAIN
function playAgain() {
  inquirer.prompt([
    {
      type: "confirm",
      message: "Do you want to play again?",
      name: "again"
    }
    ]).then(function (user) {
      if(user.again === true) {
        letsPlay();
      } else {
        stopGame();
      }
  });

}


function stopGame (){
  console.log("Bye bye!")
}


