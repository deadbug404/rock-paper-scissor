function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * (4 - 1)) + 1
    
    switch(randomNum){
        case 1 :
            return "rock"
        case 2 :
            return "paper"
        case 3 :
            return "scissor"
    }
}

function getHumanChoice(){
    playerChoice = prompt("Rock, Paper or Scissor")
    return playerChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice){
        if (humanChoice == "rock"){
            if (computerChoice == "rock"){
                console.log("Tie! both played Rock")
            }else if(computerChoice == "paper"){
                console.log("You lose! Paper beats Rock")
                computerScore++
            }else if(computerChoice == "scissor"){
                console.log("You win! Rock beats Scissor")
                humanScore++
            }
        }else if (humanChoice == "paper"){
            if (computerChoice == "rock"){
                console.log("You win! Paper beats Rock")
                humanScore++
            }else if(computerChoice == "paper"){
                console.log("Tie! both played Paper")
            }else if(computerChoice == "scissor"){
                console.log("You lose! Scissor beats Paper")
                computerScore++
            }
        }else if (humanChoice == "scissor"){
            if (computerChoice == "rock"){
                console.log("You lose! Rock beats Scissor")
                computerScore++
            }else if(computerChoice == "paper"){
                console.log("You win! Scissor beats Paper")
                humanScore++
            }else if(computerChoice == "scissor"){
                console.log("Tie! both played Scissor")
            }
        }

}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let index = 0; index < 5; index++) {
        human = getHumanChoice()
        computer = getComputerChoice()
        playRound(human, computer)
    }

    console.log(`Total score: Human=${humanScore} Computer=${computerScore}`)
}

