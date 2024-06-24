const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    getPlayerChoice("rock");
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    getPlayerChoice("paper");
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
    getPlayerChoice("scissors");
});

function getPlayerChoice(choice) {
    let outcome = playRound(choice);
    updateScore(outcome);
};

function playRound(humanChoice) {
   let list = document.querySelector("#texth3");
    let computerChoice = getComputerChoice();

    let listItem = document.createElement("li");

    const humanDisplay = document.createElement("span");
    humanDisplay.textContent = `Player choses ${humanChoice} | `;
       
    const computerDisplay = document.createElement("span");
    computerDisplay.textContent = `Computer choses ${computerChoice}`;

    list.appendChild(listItem);
    listItem.appendChild(humanDisplay);
    listItem.appendChild(computerDisplay);
    

    if (humanChoice === computerChoice) {
        const list = document.querySelector("#list");
        const choiceTie = document.createElement("li");
        choiceTie.textContent = `It's a tie! You both chose ${humanChoice}.`;
        return 'tie';
        
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        const list = document.querySelector("#list");
        const choiceWin = document.createElement("li");
        choiceWin.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`;
        return 'win';
        
    }
    else {
        const list = document.querySelector("#list");
        const choiceLose = document.createElement("li");
        choiceLose.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        return 'lose';
       
} 
}



function updateScore(outcome) {
    let playerScoreElement = document.querySelector("#player-score");
    let computerScoreElement = document.querySelector("#computer-score");

    if (outcome === "win") {
        playerScore++;
    }
    else if (outcome === "lose") {
        computerScore++;
    }
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    if (playerScore +computerScore === 5){
        endGame();
    }
}

function endGame() {
    const scoreMessage = document.querySelector("#score-message");

    if (playerScore > computerScore) {
        scoreMessage.textContent = "Congratulations! You win the game!";
    } else if (computerScore > playerScore) {
        scoreMessage.textContent = "Computer wins the game!";
    } else {
        scoreMessage.textContent = "It's a tie game!";
    }

    playerScore = 0;
    computerScore = 0;
}




const scoreh2 = document.querySelector("#score");
scoreh2.appendChild(playerScoreElement);
scoreh2.appendChild(computerScoreElement);




function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let outcome = playRound();

        if (outcome === 'tie') {
       
        }
        else if (outcome === 'win') {
        playerScore ++;
        
        }
        else if (outcome === 'lose') {
        computerScore ++;
        
        }
        console.log(`Current Score: Player ${playerScore} Computer ${computerScore}`)
        }
        if (playerScore > computerScore) {
        console.log("Player Wins the Game!")
        }
        else {
        console.log("Computer Wins the Game!")
        }

} 




console.log(playGame())
