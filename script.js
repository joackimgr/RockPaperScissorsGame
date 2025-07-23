function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, Scissors?");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    return "computer";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    return "human";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    return "human";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat Paper");
    return "computer";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors");
    return "computer";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beat Paper");
    return "human";
  } else if (humanChoice === computerChoice) {
    console.log("Draw!");
    return "draw";
  }
}

function playGame(times) {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= times; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++;
    } 
  }
  if (humanScore > computerScore) {
    console.log("Human wins with score: " + humanScore);
  } else if (computerScore > humanScore) {
    console.log("Computer wins with score: " + computerScore);
  } else {
    console.log("The game is draw with human score: " + humanScore + " and computer score: " + computerScore);
  }
}

playGame(5);