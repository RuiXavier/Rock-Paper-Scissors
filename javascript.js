function play(playerChoice) {

    let pcChoice = computerChoice();

    let playerDiv = document.getElementById("p-score");
    let pcDiv = document.getElementById("c-score");
    let playerMoveDiv = document.getElementById("p-move");
    let pcMoveDiv = document.getElementById("c-move");

    let playerPoints = parseInt(playerDiv.innerHTML, 10);
    let pcPoints = parseInt(pcDiv.innerHTML, 10);

    if(playerPoints === 5 || pcPoints === 5){
        return;
    }

    playerMoveDiv.innerHTML = playerChoice;
    pcMoveDiv.innerHTML = pcChoice;

    switch (playerChoice) {
        case 'rock':
            if(pcChoice == 'paper'){
                pcPoints++;
                pcDiv.innerHTML = pcPoints;
            }
            if(pcChoice == 'scissors'){
                playerPoints++;
                playerDiv.innerHTML = playerPoints;
            }
            break;
        case 'paper':
            if(pcChoice == 'scissors'){
                pcPoints++;
                pcDiv.innerHTML = pcPoints;
            }
            if(pcChoice == 'rock'){
                playerPoints++;
                playerDiv.innerHTML = playerPoints;
            }
            break;
        
        case 'scissors':
            if(pcChoice == 'rock'){
                pcPoints++;
                pcDiv.innerHTML = pcPoints;
            }
            if(pcChoice == 'paper'){
                playerPoints++;
                playerDiv.innerHTML = playerPoints;
            }
            break;
        
        default:
            break;
    }
    
    if(playerPoints == 5){
        let div = document.getElementById('celebration');
        div.innerHTML = "Congratulations!! You Won!";
    }

    if(pcPoints == 5){
        let div = document.getElementById('celebration');
        div.innerHTML = "Better Luck Next Time!";
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

    playerDiv.innerHTML = 0;
    pcDiv.innerHTML = 0;
    div.innerHTML = '';
    resetButton.style.display = "none";
    playerMoveDiv.innerHTML = '';
    pcMoveDiv.innerHTML = '';
}