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
                return "You win! Rock beats Scissor";
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

function checkWinner(humanScore, computerScore, roundResult){
    if (humanScore > computerScore){
        roundResult.textContent = "YOU WON THE GAME, CONGRATULATIONS!";
        roundResult.style.color = "green";
    }else if(computerScore > humanScore){  
        roundResult.textContent = "YOU LOST THE GAME, BETTER LUCK NEXT TIME!";
        roundResult.style.color = "red";
    }else{
        roundResult.textContent = "YOU TIED, NICE TRY!";
        roundResult.style.color = "brown";
    }
}

function disableButtons(){
    buttons = document.querySelectorAll(".button");
    buttons.forEach(button => button.disabled = true);
}

function reset(){
    window.location.reload();
}


function playGame(e){
    if(e.target.id === "options"){
        return;
    }


    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();
    let round = playRound(humanChoice, computerChoice);

    const humanResult = document.querySelector("#human-choice");
    const computerResult = document.querySelector("#computer-choice");
    const roundResult = document.querySelector("#round-result");
    const humanScore = document.querySelector("#human-score");
    const computerScore = document.querySelector("#computer-score");
    const roundCount = document.querySelector("#round");

    humanResult.src= `images/${humanChoice}.svg`;
    computerResult.src = `images/${computerChoice}.svg`;
    roundResult.textContent = `${round}`;

    const resultArray = round.split(" ");
    if(resultArray.includes("win!")){
        currScore = parseInt(humanScore.textContent)+1;
        humanScore.textContent = currScore;
    }else if(resultArray.includes("lose!")){
        currScore = parseInt(computerScore.textContent)+1;
        computerScore.textContent = currScore;
    }
    roundCount.textContent = parseInt(roundCount.textContent)+1;   
    
    if(roundCount.textContent === "5"){
        checkWinner(humanScore.textContent, computerScore.textContent, roundResult);
        disableButtons();
    }
}

const listener = document.querySelector("#options");
const resetButton = document.querySelector("#reset");

listener.addEventListener("click", playGame);
resetButton.addEventListener("click", reset);



