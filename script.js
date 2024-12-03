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

function getHumanChoice(e){
    return e.target.id;
}

function playRound(humanChoice, computerChoice){
        if (humanChoice == "rock"){
            if (computerChoice == "rock"){
                return "Tie! both played Rock";
            }else if(computerChoice == "paper"){
                return "You lose! Paper beats Rock";
            }else if(computerChoice == "scissor"){
                console.log("You win! Rock beats Scissor")
            }
        }else if (humanChoice == "paper"){
            if (computerChoice == "rock"){
                return "You win! Paper beats Rock";
            }else if(computerChoice == "paper"){
                return "Tie! both played Paper";
            }else if(computerChoice == "scissor"){
                return "You lose! Scissor beats Paper";
            }
        }else if (humanChoice == "scissor"){
            if (computerChoice == "rock"){
                return "You lose! Rock beats Scissor";
            }else if(computerChoice == "paper"){
                return "You win! Scissor beats Paper";
            }else if(computerChoice == "scissor"){
                return "Tie! both played Scissor";
            }
        }

}

function playGame(e){
    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();
    let round = playRound(humanChoice, computerChoice);

    const humanResult = document.querySelector("#human-choice");
    const computerResult = document.querySelector("#computer-choice");
    const roundResult = document.querySelector("#round-result");

    humanResult.textContent = `You chose ${humanChoice}`;
    computerResult.textContent = `The computer chose ${computerChoice}`;
    roundResult.textContent = `${round}`;


}

const listener = document.querySelector("#options");

listener.addEventListener("click", playGame);



