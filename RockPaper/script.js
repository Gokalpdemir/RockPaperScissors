const playerChoices = document.getElementById("playerChoice");
const playerScore = document.getElementById("playerScore");
const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerChoice = document.getElementById("computerChoice");
const computerScore = document.getElementById("computerScore");
const computerRock = document.getElementById("computerRock");
const computerScissors = document.getElementById("computerScissors");
const computerPaper = document.getElementById("computerPaper");
const resetIcon = document.getElementById("resetIcon");
const resultText = document.getElementById("resultText");
const allGameİcons = document.querySelectorAll(".icon");

let computerChoiceName = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let choices = {
  rock: { name: "Rock", win: ["scissors"] },
  paper: { name: "Paper", win: ["rock"] },
  scissors: { name: "Scissors", win: ["paper"] },
};

function updateScore(playerChoice) {
  if (playerChoice == computerChoiceName) {
    resultText.textContent = "Berabere";
  } else {
    const choice = choices[playerChoice];
    console.log(choice);

    if (choice.win.indexOf(computerChoiceName) === 0) {
      playerScoreNumber++;
      resultText.textContent = "Gökalp Kazandı";
      console.log(playerScoreNumber);

      playerScore.textContent = playerScoreNumber;
    } else {
      computerScoreNumber++;
      resultText.textContent = "Bilgisayar Kazandı";
      computerScore.textContent = computerScoreNumber;
    }
  }
  if (playerScoreNumber == 3 || computerScoreNumber == 3) {
    startConfetti();

    allGameİcons.forEach((item) => {
      item.style.pointerEvents = "none";
    });
    setTimeout(() => {
      resetAll();
    }, 3000);
  }
}
function checkResult(playerChoice) {
  resetChoice();
  computerSelect();
  displayComputerChoice();
  updateScore(playerChoice);
}

function computerSelect() {
  const computerRandomChoice = Math.random();
  if (computerRandomChoice < 0.3) {
    computerChoiceName = "rock";
  } else if (computerRandomChoice <= 0.65) {
    computerChoiceName = "paper";
  } else if (computerRandomChoice <= 1) {
    computerChoiceName = "scissors";
  }
}
function displayComputerChoice() {
  switch (computerChoiceName) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoice.textContent = `--- Rock`;
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoice.textContent = `--- Paper`;

      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoice.textContent = `--- Scissors`;

      break;
  }
}
function resetChoice() {
  stopConfetti();
  allGameİcons.forEach((item) => {
    item.classList.remove("selected");
  });
}

function select(playerChoice) {
  checkResult(playerChoice);

  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoices.textContent = `--- Rock`;
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoices.textContent = `--- Paper`;

      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoices.textContent = `--- Scissors`;

      break;
  }
}

function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScore.textContent = playerScoreNumber;
  computerScore.textContent = computerScoreNumber;
  playerChoices.textContent = "";
  computerChoice.textContent = "";
  resultText.textContent = "";
  resetChoice();
  allGameİcons.forEach((item) => {
    item.style.pointerEvents = "auto";
  });
}
