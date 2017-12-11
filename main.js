var prompt = require("prompt"); 
var Word = require("./word.js");

prompt.start() 

var game = { /
	wordBank :["Bowling", "Soccer", "Wrestling", "Hockey", "Baseball", "Football", "Basketball"]  
	this.guessRemaining = 10;
	this.currentWrd = null;
	this.startGame = function(wrd){
		var randWord = Math.floor(Math.random() * this.wordBank.length)
		this.currentWrd = new Word(this.wordBank[randWord]);
		this.currentWrd.getLets(); 
		this.keepPromptingUser; 
	}
	this.keepPromptingUser : function(){
		var self = this; 
		prompt.get(["guessLetter"], function(err, result){
			console.log("The letter or space you guessed is " + result.guessLetter);
			var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter)
			if(findHowManyOfUserGuess === 0){
				console.log("Your guess is WRONG!!");
				self.guessRemaining--;
			}
			else{
				console.log("Your guess was RIGHT!!");
				if(self.currentWrd.didWeFindTheWord() === true){
					console.log("YOU WON!!");
					return 1; 
				}
				else{
					console.log("Guesses remaining: " + guessRemaining);
					console.log(this.currentWrd.wordRender());
				}
			}
			if(self.guessRemaining > 0 && self.currentWrd.found === false){
				keepPromptingUser;
			}
			else if(self.guessRemaining === 0){
				console.log("Game Over!" + self.currentWrd.word);
			}
			else{
				console.log(self.currentWrd.wordRender()); /
			}
		});
	}
}

game.startGame()