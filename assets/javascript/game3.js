var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var numGuesses = 10;
var usedArray = [];

//variables to write to html doc
var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("loss-text");


// function to choose a random letter from alphabet array
function compGuess(letters) {
    return letters[Math.floor(Math.random() * letters.length)];
}

var computerLetter = compGuess(letters);

//user chooses a letter with a key stroke


//indexof - check to see if its in the letters array

document.onkeyup = function (event) {
    var userLetter = event.key;
    console.log("user: " + userLetter);
    console.log("computer: " + computerLetter);
    //find a way to only enter a letter and a string

    
    









    document.getElementById("wins-text").textContent = wins;
    document.getElementById("guesses-text").textContent = numGuesses;
   
}
console.log(wins);
console.log(document.getElementById("wins-text"));
console.log(usedArray);


















//Restart game when you win or lose

//if the guess wrong 10 times, they lose


//screen counts losses and wins

