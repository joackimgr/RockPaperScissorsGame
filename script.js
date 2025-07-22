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
        return "You lose! Paper beats Rock";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beat Paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beat Paper";
    } else if (humanChoice === computerChoice) {
        return "Draw!";
    }

    
}

let humanScore = 0;
let computerScore = 0;
console.log(playRound(getHumanChoice(), getComputerChoice()));