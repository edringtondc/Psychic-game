// //declaring my variables

// var letters = "abcdefghijklmnopqrstuvwxyz";
// var wins = 0;
// var losses = 0;
// var numGuesses = 0;
// var usedArray = [];


// //defines the function
// function computerGuess() {
//     var computerChoice = letters[Math.floor(Math.random() * letters.length)];
//     console.log(computerChoice);

// }




// document.onkeyup = function (event) {
//     var userLetter = event.key;
//     console.log(userLetter);



//     //if user does guess correctly
//     computerGuess(); {
//         if (userLetter === computerChoice) {
//             won++;
//             numGuesses = 10;
//             usedArray = [];

//         }

//         if (userLetter !== computerChoice) {
//             numGuesses--;

//         }

//         //when remaining attempts equals zero, lost is incremented by 1; attempts is reset to 10, and used letters array is cleared
//         if (numGuesses == 0) {
//             lost++;
//             usedArray = []
//             numGuesses = 10;
//         }


//         //handling INCORRECT GUESSES - OUTPUT
//         //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
//         if (usedArray.indexOf(userLetter) >= 0) {

//         } else {
//             //this pushes the players incorrect guess to the usedArray and writes it to the HTML
//             usedArray.push(userLetter);
//             document.getElementById('userLetterText').innerHTML = usedArray;
//             console.log(usedArray);

//         }
//     }
// }

// // Changes the text in the HTML
