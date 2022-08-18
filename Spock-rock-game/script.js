
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');
const resultText = document.getElementById('resultText');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';

// Reset all 'Selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'Rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'Paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'Scissors';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'Lizard';
  } else {
    computerChoice = 'Spock';
  }
}

// Add 'selected' styling & computerChoice
function displayComputerChoice() {
  switch (computerChoice) {
    case 'Rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'Paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'Scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'Lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'Spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

// Call functions to process turn
function checkResult() {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
}



// function select(playerChoice) {
//   console.log(playerChoice);
// }

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add selected styling & playerchoice
  switch (playerChoice) {
    case 'Rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '--- Rock';
      break;
    case 'Paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '--- Paper';
      break;
    case 'Scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = '--- Scissors';
      break;
    case 'Lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = '--- Lizard';
      break;
    case 'Spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = '--- Spock';
      break;
    default:
      break;
  }
}
