let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    const choices = ["rock", "paper", "scissor"];

    let choice = Math.random();
    let index = choice * choices.length;
    index = Math.floor(index);
    let variable = choices[index];

    return variable;
}


function getHumanChoice() {
    let input = prompt("Enter either 'rock', 'paper' or 'scissor'");

    return input;

}

function playRound(humanChoice, computerChoice) {

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper")
    {
        console.log("You lose!Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        console.log("You win!Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissor")
    {
        console.log("You win!Rock beats Scissor");
        humanScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "rock")
    {
        console.log("You lose!Rock beats Scissor");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissor")
    {
        console.log("You lose!Scissor beats paper");
        computerScore++;
    }
    else if (humanChoice === "scissor" && humanChoice === "paper")
    {
        console.log("You win!Scissor beats paper");
        humanScore++;
    }
    else if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissor" && computerChoice === "scissors"))
    {
        console.log("It's a Tie!");
    }
    
}


function playGame() {
    debugger;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore)
    {
        alert("Great Congratulations!You won the match");
    }
    else
    {
        alert("Oh!You lost the match. Retry")
    }

}

playGame();