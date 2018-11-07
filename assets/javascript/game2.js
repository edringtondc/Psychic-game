var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var numGuesses = 0;
var usedArray = [];

var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("loss-text");


// the computer chooses a letter from alphabet

function randLetter(letters) {
    return letters[Math.floor(Math.random() * letters.length)];

    
}

var computerLetter = randLetter(letters);

document.onkeyup = function (event) {
    var userLetter = event.key;
    console.log("user: " + userLetter);
    console.log("computer: " + computerLetter);


    if (userLetter !== computerLetter) {

        console.log("you lose");
        losses++;
    }
    else {
        console.log("you win")
        wins++;

       
    }
    console.log(wins);
    console.log(document.getElementById("wins-text"));

    
    document.getElementById("wins-text").textContent = wins;
    document.getElementById("loss-text").textContent = losses;


    
}


//user chooses a letter with a key stroke


//if the same letter, user wins

//if a different letter, user chooses again, until they have guessed 10 times

//if the guess wrong 10 times, they lose

//screen prints the letters already used.  push to an array

//screen counts losses and wins

