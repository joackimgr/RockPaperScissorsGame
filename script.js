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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    h3.textContent = "You lose! Paper beats Rock.";
    res.appendChild(h3);
    return "computer";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    h3.textContent = "You win! Rock beats Scissors."
    res.appendChild(h3);
    return "human";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    h3.textContent = "You win! Paper beats Rock.";
    res.appendChild(h3);
    return "human";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    h3.textContent = "You lose! Scissors beat Paper.";
    res.appendChild(h3);
    return "computer";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    h3.textContent = "You lose! Rock beats Scissors.";
    res.appendChild(h3);
    return "computer";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    h3.textContent = "You win! Scissors beat Paper.";
    res.appendChild(h3);
    return "human";
  } else if (humanChoice === computerChoice) {
    h3.textContent = "Draw!";
    res.appendChild(h3);
    return "draw";
  }
}

let btns = document.querySelectorAll("button");
btns.forEach((button) => button.addEventListener("click", () => {
  let human;
  if (button.id === "rockBtn") {
    human = "rock";
  } else if (button.id === "paperBtn") {
    human = "paper";
  } else {
    human = "scissors";
  }
  let comp = getComputerChoice();
  playRound(human, comp);
}));

let res = document.querySelector(".results");
let h3 = document.createElement("h3");