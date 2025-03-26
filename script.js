let humanScore = 0;
let computerScore = 0;


/* Already Made */
function getComputerChoice()
{
    const choices = ["rock", "paper", "scissor"];

    let choice = Math.random();
    let index = choice * choices.length;
    index = Math.floor(index);
    let variable = choices[index];

    return variable;
}


/* Human Choice */
function getHumanChoice() {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissor = document.querySelector("#scissor");

    console.log("human choice is called");

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    scissor.addEventListener("click", () => {
        playRound("scissor", getComputerChoice());
    });

}



function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    const divAnswer = document.querySelector("#answer");

    if (humanChoice === "rock" && computerChoice === "paper")
    {
       divAnswer.textContent = "You lose!Paper beats Rock";
       computerScore++;
       displayComputerScore();
       
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        divAnswer.textContent = "You win!Paper beats Rock";
        humanScore++;
        displayScore();
    }
    else if (humanChoice === "rock" && computerChoice === "scissor")
    {
        divAnswer.textContent = "You win!Rock beats Scissor";
        humanScore++;
        displayScore();
    }
    else if (humanChoice === "scissor" && computerChoice === "rock")
    {
        divAnswer.textContent = "You lose!Rock beats Scissor";
        computerScore++;
        displayComputerScore();
        
    }
    else if (humanChoice === "paper" && computerChoice === "scissor")
    {
        divAnswer.textContent = "You lose!Scissor beats paper";
        computerScore++;
        displayComputerScore();
        
    }
    else if (humanChoice === "scissor" && computerChoice === "paper")
    {
        divAnswer.textContent = "You win!Scissor beats paper";
        humanScore++;
        displayScore();
    }
    else if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissor" && computerChoice === "scissor"))
    {
        divAnswer.textContent = "It's a Tie!";
        displayScore();
    }

    /*
    ===============
    NEEDS WORK
    =============
    */

    const winner = document.querySelector("#winner");
    if (humanScore === 5)
    {
        divAnswer.textContent = "";
        winner.textContent = "Congratulations! You are the winner";
        setTimeout(resetScore, 3000);
    }
    else if(computerScore === 5)
    {
        divAnswer.textContent = "";
        winner.textContent = "You lost!";
        setTimeout(resetScore, 3000);
    }

    
  
    
    
}


function displayScore() {
    const score = document.querySelector("#humanscore");
    score.textContent = humanScore;
}


function displayComputerScore() {
    const score = document.querySelector("#computerscore");
    score.textContent = computerScore;
}

function resetScore() {
  
       
        
        setTimeout(function () {
            const originComputerScore = document.querySelector("#computerscore");
            originComputerScore.textContent = "0";

            const originHumanScore = document.querySelector("#humanscore");
            originHumanScore.textContent = "0";

            const buttons = document.querySelectorAll("button");
            buttons.forEach(button => button.disabled = true);

            const divAnswer = document.querySelector("#answer");
            divAnswer.textContent = "Reload to play Again";
            
            const winner = document.querySelector("#winner");
            winner.textContent = "";
        }, 250);
   


}


function playGame() {
    getHumanChoice();
}

playGame();