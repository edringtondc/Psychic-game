var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var numGuesses = 10;
var usedArray = [];

function winnerBox() {
    var winBox = document.getElementById("winner-message");
    winBox.style.display = "block";

}



//start:

//function reset array, comp guess, user letter, except wins and losses, winner thing goes away


//computer chooses a random letter from the array
function compGuess(letters) {
    return letters[Math.floor(Math.random() * letters.length)];
}

var computerLetter = compGuess(letters);

//code for a click function
// $("#click-me").on("click", function() {
//     alert("Try to guess the computers letter! You have 10 guesses");

// });
//user chooses letter via the keyboard
// $("#play-button").on("click", function() {
//     console.log("button clicked");
//     var numGuesses = 10;
//     var usedArray = [];
//     compGuess();


//     });


$("#play-button").on("click", function() {
    console.log("button clicked");
    alert("play button pressed");

});


//
//alert("Try to guess the computers letter! You have 10 guesses");
document.onkeyup = function (event) {
    //make sure it is lowercase
    var userLetter = event.key.toLowerCase();
    console.log(userLetter);
    console.log("comp " + computerLetter);



    //Decrease number of guesses
    if (numGuesses > 0) {
        numGuesses--;
        document.getElementById("guesses-text").textContent = numGuesses;

        //make sure its a valid letter
        if (letters.indexOf(userLetter) != -1) {
            //prints valid users letter the to screen
            document.getElementById("user-letter").textContent = userLetter;


            //compare it to the computers letter

            //if guessed correctly 
            if (userLetter === computerLetter) {
                console.log("you win");
                winnerBox();

                //tell user they won


                //reveal computers letter
                document.getElementById("computer-letter").textContent = computerLetter;
                //increase wins by 1
                wins++;






                //reset game

            }
            //if not, but still has guesses
            if (userLetter !== computerLetter) {
                //incorrect, guess again
                alert("Incorrect guess, please choose a new letter!")
                //incorrect guess
                //less than 10 guesses
                //used letter is printed to the screen
                usedArray.push(userLetter);
                document.getElementById("used").textContent = usedArray;
            }


        } else {
            alert("please choose a valid letter");
        }
    }
    //OUT OF GUESSES
    if (numGuesses == 0) {
        //tell user game is over
        alert("Game over!");
        //print computer choice to the screen
        document.getElementById("computer-letter").textContent = computerLetter;
        //increase loses
        losses++;

        //reset game******
    }

    document.getElementById("wins-text").textContent = wins;
    document.getElementById("loss-text").textContent = losses;

}




