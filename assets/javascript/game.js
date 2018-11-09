
$(document).ready(function () {

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var numGuesses = 10;
    var usedArray = [];


    function compGuess(letters) {
        console.log(letters);
        return letters[Math.floor(Math.random() * letters.length)];
    }

    //computer chooses a random letter from the array
    var computerLetter = compGuess(letters);

    function winnerBox() {
        var winBox = document.getElementById("winner-message");
        winBox.style.display = "block";
    }

    function reset() {
        console.log("game reset");

        var winBox = document.getElementById("winner-message");
        winBox.style.display = "none";


        computerLetter = compGuess(letters);
        document.getElementById("computer-letter").textContent = "?";
        

        var numGuesses = 10;
        document.getElementById("guesses-text").textContent = numGuesses;

        var usedArray = [];
        document.getElementById("used").textContent = usedArray.join(", ");

        var userLetter = "?"
        document.getElementById("user-letter").textContent = userLetter;


    }

    $("#play-button").on("click", function () {
        console.log("button clicked");
        reset();

    });

    //alert("Try to guess the computers letter! You have 10 guesses");
    document.onkeyup = function (event) {

        //make sure it is lowercase
        var userLetter = event.key.toLowerCase();
        console.log(userLetter);
        
        console.log("comp " + computerLetter);
        compGuess(letters);

        //Decrease number of guesses
        if (numGuesses > 0) {
            numGuesses--;
            document.getElementById("guesses-text").textContent = numGuesses;

            //make sure its a valid letter
            if (letters.indexOf(userLetter) != -1) {
                //prints valid users letter the to screen
                document.getElementById("user-letter").textContent = userLetter;

                //compare it to the computers letter, 

                //if guessed correctly 
                if (userLetter === computerLetter) {
                    //tell user they won
                    console.log("you win");
                    winnerBox();

                    //reveal computers letter
                    document.getElementById("computer-letter").textContent = computerLetter;
                    //increase wins by 1
                    wins++;

                }
                //if not = tp computerLetter, but still has guesses
                if (userLetter !== computerLetter) {

                    //tell user to guess again
                    alert("Incorrect guess, please choose a new letter!")

                    //prints used letter to the screen
                    usedArray.push(userLetter);
                    document.getElementById("used").textContent = usedArray.join(", ");

                  
                }

                //if in used array
                //alert("You've already guessed "userLetter");


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


});