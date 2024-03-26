let score = 0;
let timer;

// increase the score
function increaseScore() {
  score++;
  document.getElementById('score').textContent = score;
}

// start the game
function startGame() {
  score = 0;
  document.getElementById('score').textContent = score;
  document.getElementById('clickButton').disabled = false;
  document.getElementById('popup').style.display = 'none';
  
  // Timer for 10 seconds
  timer = setTimeout(function() {
    endGame();
  }, 10000);
}

// end the game
function endGame() {
  clearTimeout(timer);
  document.getElementById('clickButton').disabled = true;
  document.getElementById('finalScore').textContent = score;
  document.getElementById('popup').style.display = 'block';
}

// play again
function playAgain() {
  startGame();
}

// Start the game
startGame();
