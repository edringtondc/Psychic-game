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


document.onkeyup = function (event) {
    
    var userLetter = event.key.toLowerCase();
    if (letters.indexOf(userLetter) != -1) {
        console.log("user: " + userLetter);
        console.log("computer: " + computerLetter);



        //if a different letter
        if (userLetter !== computerLetter) {
            
            if (numGuesses = 0) { //out of 
                console.log("Out of guesses, you lose!");
                computerLetter = compGuess(letters);
                losses++;

            } else { //not equal to 10
                console.log("Guess Again");
                numGuesses--;
                console.log(numGuesses);
                alert("Wrong Letter! Guess again!");
                document.getElementById("used").textContent = usedArray;

            }
        }

        //if the same letter, user wins
        else if (userLetter === computerLetter) {
            console.log("you win")
            wins++;
            usedArray = [];
            numGuesses = 10;
            computerLetter = compGuess(letters);
            document.getElementById("computer-letter").textContent = computerLetter;
        }

        document.getElementById("wins-text").textContent = wins;
        document.getElementById("loss-text").textContent = losses;
        document.getElementById("guesses-text").textContent = numGuesses;


    }
    else {
        alert("Pick a valid letter");
    }

}



















//Restart game when you win or lose

//if the guess wrong 10 times, they lose


//screen counts losses and wins

