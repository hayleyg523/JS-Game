//Create set variables
let playerScore = 0;
let computerScore = 0;
let compChoice;
let playerChoice;

//Store DOM elements as JS variables
let playerScoreboard = document.querySelector('.p-count');
let computerScoreboard = document.querySelector('.c-count');
let whoWon = document.querySelector('.result');

//function to randomly generate a choice for the computerScore
function computerChoice(){
  const computerOptions = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random()* 3);
  compChoice = computerOptions[randomNum];
};

function throwRock(){
  playerChoice = "rock";
  computerChoice();
  console.log(playerChoice);
  console.log(compChoice);
  playGame(playerChoice, compChoice);
}

function throwPaper(){
  playerChoice = "paper";
  computerChoice();
  console.log(playerChoice);
  console.log(compChoice);
  playGame(playerChoice, compChoice);
}

function throwScissors(){
  playerChoice = "scissors";
  computerChoice();
  console.log(playerChoice);
  console.log(compChoice);
  playGame(playerChoice, compChoice);
}

function playerWin(){
  playerScore++;
  playerScoreboard.innerHTML = playerScore;
  whoWon.innerHTML = "You win!!";
}

function playerLose(){
  computerScore++;
  computerScoreboard.innerHTML = computerScore;
  whoWon.innerHTML = "You lost!!";
}

function playGame(player, computer){
  if (player === computer){
      whoWon.innerHTML = "Its a Tie";
  } else if (player === "rock" && computer === "scissors"){
    playerWin();
  } else if (player === "paper" && computer === "rock"){
    playerWin();
  } else if (player === "scissors" && computer === "paper"){
    playerWin();
  } else if (player === "rock" && computer === "paper"){
    playerLose();
  } else if (player === "paper" && computer === "scissors"){
    playerLose();
  } else if (player === "scissors" && computer === "rock"){
    playerLose();
  }
}



function reset(){
  playerScoreboard.innerHTML = "0";
  computerScoreboard.innerHTML = "0";
  whoWon.innerHTML = "";
}
