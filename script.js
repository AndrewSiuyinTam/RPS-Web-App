// console.log('test');

function getComputerChoice() {
    let randomNumber1To3 = Math.floor(Math.random() * 3);
    
    let computerChoice = '';
    switch(randomNumber1To3){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
            
        case 2:
            computerChoice = 'scissors';
            break;
    }
    
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    let result = '';
    let roundWinner = 'draw';
    computerSelection = getComputerChoice();
    playerSelection = prompt('Enter your choice!');
    if(playerSelection.toLowerCase() == 'rock'){
        if(computerSelection == 'rock'){
            result = "It's a Draw! Rock ties Rock";
            roundWinner = 'draw';
            console.log(result);
        }
        if(computerSelection == 'paper'){
            result = "You Lose! Paper beats Rock";
            roundWinner = 'computer';
            console.log(result);
            
        }
        if(computerSelection == 'scissors'){
            result = "You Win! Rock beats Scissors";
            roundWinner = 'user';
            console.log(result);
        }
    }
    else if(playerSelection.toLowerCase() == 'paper'){
        if(computerSelection == 'rock'){
            result = "You Win! Paper beats Rock";
            roundWinner = 'user';
            console.log(result);
        }
        if(computerSelection == 'paper'){
            result = "It's a Draw! Paper ties Paper";
            roundWinner = 'draw';
            console.log(result);
        }
        if(computerSelection == 'scissors'){
            result = "You Lose! Scissors beats Paper";
            roundWinner = 'computer';
            console.log(result);
        }
    }
    else if(playerSelection.toLowerCase() == 'scissors'){
        if(computerSelection == 'rock'){
            result = "You Lose! Rock beats Scissors";
            roundWinner = 'computer';
            console.log(result);
        }
        if(computerSelection == 'paper'){
            result = "You Win! Scissors beats Paper";
            roundWinner = 'user';
            console.log(result);
        }
        if(computerSelection == 'scissors'){
            result = "It's a Draw! Scissors ties Scissors";
            roundWinner = 'draw';
        }
    }
    console.log(roundWinner);
    return roundWinner;
}
function game(){
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5 ; i++){
        console.log('i is: ' + i);
        let res = playRound();
        if(res === 'computer'){
            computerScore++;
            continue;
            
        }
        else if(res === 'user'){
            userScore++;
            continue;
        }
        else if(res === 'draw'){
            continue;
        }
       

    }
    console.log(userScore);
    console.log(computerScore);
    if(userScore > computerScore){
        console.log(`You Win! ${userScore} to ${computerScore}`);
    }    
    else if(userScore < computerScore){
        console.log(`You Lose! ${userScore} to ${computerScore}`);
    }    
    else if(userScore == computerScore){
        console.log(`Draw! ${userScore} to ${computerScore}`);
    }    
    
}
game();