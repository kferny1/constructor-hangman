var letter = require("./letter.js");

var Word = function(wrd){
	this.word = wrd,
	this.lets = [],
	this.found = false,
	this.getLets = function(){
		for(var i = 0; i < word.length; i++){
			this.lets.push(new Letter(this.word[i]));
		}
	}
	this.checkIfLetterFound = function(guessLetter){
		var whatToReturn = 0;
		for(var i = 0; i < this.lets.length; i++){
			if (this.lets[i] === guessLetter) {
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}
		return whatToReturn;
	}
	this.didWeFindTheWord = function(){
	
		if (this.lets.every(function(curLet, index, array){
			return curLet.appear === true;
		})){
			this.found === true;
		}
		return this.found;
	}
	this.wordRender = function(){
		var str = "";
		for(i = 0, i < lets.length; i++){
		return str;
		}
	}
}
module.exports = Word;