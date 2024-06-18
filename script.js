// define choices
// get random choice
// return choice

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
console.log("Computer", getComputerChoice())

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
console.log("PLayer", getHumanChoice())

