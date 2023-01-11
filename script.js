"use strict";

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    let roundCount = i + 1;
    console.clear();
    console.log(`Round: ${roundCount} P1: ${playerScore} P2: ${computerScore}`);
    game();
    
}

function game () {

    let playerSelection = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
    let getComputerChoice =  Math.floor(Math.random() * 3) + 1;
       
    if (playerSelection == undefined || playerSelection == null || playerSelection == "" ) {
        console.log("Enter something into the prompt");
    } else {
        // Converts computer answer to one of the three
        if (getComputerChoice === 1) {
            getComputerChoice = "Rock";
        } else if (getComputerChoice === 2) {
            getComputerChoice = "Paper";
        } else if (getComputerChoice === 3) {
            getComputerChoice = "Scissors";
        };
    
        function playRound (p1, p2) {
            if (p1 != "Rock" && p1 != "Paper" && p1 != "Scissors" ) {
                console.log("An error has occured, incorrect inputs...");
                game();
    
            } else if ((p1 == "Rock" && p2 === "Rock") || (p1 == "Paper" && p2 === "Paper") || (p1 == "Scissors" && p2 === "Scissors")) {
                console.log("Draw!!! Another Round!");
            } else if ((p1 == "Rock" && p2 === "Scissors") || (p1 == "Paper" && p2 === "Rock") || (p1 == "Scissors" && p2 === "Paper")) {
                console.log(`${playerSelection} beats ${getComputerChoice}, Player WINS!!!`);
                playerScore++;
            } else if ((p1 == "Rock" && p2 === "Paper") || (p1 == "Paper" && p2 === "Scissors") || (p1 == "Scissors" && p2 === "Rock")) {
                console.log(`${getComputerChoice} beats ${playerSelection}, Computer WINS!!!`);
                computerScore++;
            } else {
                console.log("another error")
            };
        }
         
        
    
    
    playerSelection = (playerSelection[0].toUpperCase()+playerSelection.substring(1));
    
    console.log(`Player: ${playerSelection}, Computer: ${getComputerChoice} `);
    
    playRound(playerSelection, getComputerChoice);
    }
    
    }




