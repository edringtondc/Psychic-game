



//start:

//function reset array, comp guess, user letter, except wins and losses, winner thing goes away




var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var wins = 0;
    var losses = 0;
    var numGuesses = 10;
    var usedArray = [];


function compGuess(letters) {
    return letters[Math.floor(Math.random() * letters.length)];

}
//computer chooses a random letter from the array
var computerLetter = compGuess(letters);




$(document).ready(function () {

    
    

   

   

    function winnerBox() {
        var winBox = document.getElementById("winner-message");
        winBox.style.display = "block";

    }

    // $("#play-button").on("click", function () {
    //     console.log("button clicked");
    //     var numGuesses = 10;
    //     var usedArray = [];
    //     compGuess();


    // });

    function reset() {
        console.log("game reset");
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var numGuesses = 10;
        var usedArray = [];
        compGuess();

    }
    
   
    



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

                    // reset();
                }
                //if not, but still has guesses
                if (userLetter !== computerLetter) {
                    //incorrect, guess again
                    alert("Incorrect guess, please choose a new letter!")
                    document.getElementById("guess-again").textContent = ("Guess Again!")
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
            reset();
           
        }

        document.getElementById("wins-text").textContent = wins;
        document.getElementById("loss-text").textContent = losses;

    }


});