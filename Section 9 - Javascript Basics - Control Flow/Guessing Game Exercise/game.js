var secretNumber = 4;

var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

if (secretNumber === guess) {
	alert("You guessed it!")
}
else if (guess > secretNumber) { 
	alert("You guessed too high")
}
else {
	alert("You guessed too low")
}
console.log(number)