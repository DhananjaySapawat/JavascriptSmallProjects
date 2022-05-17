/**
 * Guess The Number Game
 */

// Variable to store the list of guesses 
// Variable for store the correct random number 
let Random = Math.floor(Math.random() * 101);
let SaveGuess = [];
window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

function playGame(){
    let NumberGuess = document.getElementById("number-guess").value;
    saveGuessHistory(NumberGuess);
    displayResult(NumberGuess);
    displayHistory();
}

// Initialize a new game by resetting all values and content on the page
function initGame(){
  getRandomNumber();
  resetResultContent();
  document.getElementById("result").innerHTML = "";
  document.getElementById("history").innerHTML = "";
}

// Reset the results list display
function resetResultContent(){
      SaveGuess = [];
}

// Return random number between 1 and 100
function getRandomNumber(){
  /**
   * Math.random returns a number between 0 and 1,
   * and that's why we multiply it by 100
  */
  Random = Math.floor(Math.random() * 101);
  
}

// Save the user guess entered from the input
function saveGuessHistory(guess) {
    SaveGuess.push(guess);
}

// Display history in HTML 
function displayHistory() {
    let list =  "<ul class = 'list-group'>";
    for (let i=SaveGuess.length-1;i>-1;i--){
      list = list + "<li class = 'list-group-item'> you guessed " + SaveGuess[i] + "</li>";
    }
    list = list + "</ul>";
    document.getElementById("history").innerHTML = list;
}

// Display the result in HTML
function displayResult(numberGuess){
    if(numberGuess > Random) {
        showNumberAbove();
    } 
    else if (numberGuess < Random){
        showNumberBelow();
    } 
    else {
        showYouWon();
    }
}


// Retrieve the dialog based on if the guess is wrong or correct 
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}
