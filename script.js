// define choices
// get random choice
// return choice

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}


// prompt a choice
// validate choice
// return choice

function getHumanChoice() {
    let choice = prompt("Please pick rock, paper, or scissors").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Please pick rock, paper, or scissors").toLowerCase();
    }
    return choice;
}


function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log("Player choses", humanChoice);
    console.log("Computer choses", computerChoice);
    

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
       
} 
}
console.log(playRound())
