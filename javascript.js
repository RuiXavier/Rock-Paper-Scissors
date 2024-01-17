function play(playerChoice) {

    let pcChoice = computerChoice();

    let playerDiv = document.getElementById("p-score");
    let pcDiv = document.getElementById("c-score");
    let playerMoveDiv = document.getElementById("p-move");
    let pcMoveDiv = document.getElementById("c-move");

    let playerPoints = parseInt(playerDiv.textContent, 10);
    let pcPoints = parseInt(pcDiv.textContent, 10);

    if(playerPoints === 5 || pcPoints === 5){
        return;
    }

    playerMoveDiv.textContent = playerChoice;
    pcMoveDiv.textContent = pcChoice;

    switch (playerChoice) {
        case 'rock':
            if(pcChoice == 'paper'){
                pcPoints++;
                pcDiv.textContent = pcPoints;
            }
            if(pcChoice == 'scissors'){
                playerPoints++;
                playerDiv.textContent = playerPoints;
            }
            break;
        case 'paper':
            if(pcChoice == 'scissors'){
                pcPoints++;
                pcDiv.textContent = pcPoints;
            }
            if(pcChoice == 'rock'){
                playerPoints++;
                playerDiv.textContent = playerPoints;
            }
            break;
        
        case 'scissors':
            if(pcChoice == 'rock'){
                pcPoints++;
                pcDiv.textContent = pcPoints;
            }
            if(pcChoice == 'paper'){
                playerPoints++;
                playerDiv.textContent = playerPoints;
            }
            break;
        
        default:
            break;
    }
    
    if(playerPoints == 5){
        let div = document.getElementById('celebration');
        div.textContent = "Congratulations!! You Won!";
    }

    if(pcPoints == 5){
        let div = document.getElementById('celebration');
        div.textContent = "Better Luck Next Time!";
    }

    if(playerPoints === 5 || pcPoints === 5){
        let resetButton = document.getElementById("try-again");
        resetButton.style.display = "flex";
    }
}

function computerChoice(){
    let number = Math.floor(Math.random() * 3 + 1);
    let choice;
    switch (number) {
        case 1:
            choice = "rock";
            break;
        
        case 2:
            choice = "paper";
            break;

        case 3:
            choice = "scissors";
            break;

        default:
            break;
    }

    return choice;
}

function reset() {
    let playerDiv = document.getElementById("p-score");
    let pcDiv = document.getElementById("c-score");
    let div = document.getElementById("celebration");
    let resetButton = document.getElementById("try-again");
    let playerMoveDiv = document.getElementById("p-move");
    let pcMoveDiv = document.getElementById("c-move");

    playerDiv.textContent = 0;
    pcDiv.textContent = 0;
    div.textContent = '';
    resetButton.style.display = "none";
    playerMoveDiv.textContent = '';
    pcMoveDiv.textContent = '';
}