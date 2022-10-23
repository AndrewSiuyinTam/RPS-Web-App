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


function playRound(playerSelection) {
    const result_div = document.querySelector('.result_div');
    const result_p = document.querySelector('.result');

    let result = '';
    let roundWinner = 'draw';
    let computerSelection = getComputerChoice();
    if(playerSelection.toLowerCase() == 'rock'){
        if(computerSelection == 'rock'){
            result = "It's a Draw! Rock ties Rock";
            roundWinner = 'draw';
            result_p.textContent = result;
        }
        if(computerSelection == 'paper'){
            result = "You Lose! Paper beats Rock";
            roundWinner = 'computer';
            result_p.textContent = result;
            
        }
        if(computerSelection == 'scissors'){
            result = "You Win! Rock beats Scissors";
            roundWinner = 'user';
            result_p.textContent = result;
        }
    }
    else if(playerSelection.toLowerCase() == 'paper'){
        if(computerSelection == 'rock'){
            result = "You Win! Paper beats Rock";
            roundWinner = 'user';
            result_p.textContent = result;
        }
        if(computerSelection == 'paper'){
            result = "It's a Draw! Paper ties Paper";
            roundWinner = 'draw';
            result_p.textContent = result;
        }
        if(computerSelection == 'scissors'){
            result = "You Lose! Scissors beats Paper";
            roundWinner = 'computer';
            result_p.textContent = result;
        }
    }
    else if(playerSelection.toLowerCase() == 'scissors'){
        if(computerSelection == 'rock'){
            result = "You Lose! Rock beats Scissors";
            roundWinner = 'computer';
            result_p.textContent = result;
        }
        if(computerSelection == 'paper'){
            result = "You Win! Scissors beats Paper";
            roundWinner = 'user';
            result_p.textContent = result;
        }
        if(computerSelection == 'scissors'){
            result = "It's a Draw! Scissors ties Scissors";
            result_p.textContent = result;
        }
    }
    
    return roundWinner;
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    const userScore_display = document.querySelector('.user_score');
    const computerScore_display = document.querySelector('.computer_score');
    computerScore_display.textContent = computerScore;
    userScore_display.textContent = userScore;
    const rock_btn = document.querySelector('#rock_btn');
    const paper_btn = document.querySelector('#paper_btn');
    const scissors_btn = document.querySelector('#scissors_btn');
    const winner_tag = document.querySelector('.winner');
    const reset_btn = document.querySelector('#reset_btn');
    rock_btn.addEventListener('click',() =>{
        let res = playRound('rock');
        if(res === 'computer'){
            computerScore++;
            computerScore_display.textContent = computerScore;
            if(computerScore == 5) winner_tag.textContent = 'Computer has Won the Game!';
            
            
        }
        else if(res === 'user'){
            userScore++;
            userScore_display.textContent = userScore;
            if(userScore == 5) winner_tag.textContent = 'User has Won the Game!';
        }
    });
    paper_btn.addEventListener('click',() =>{
        let res = playRound('paper');
        if(res === 'computer'){
            computerScore++;
            computerScore_display.textContent = computerScore;
            if(computerScore == 5) winner_tag.textContent = 'Computer has Won the Game!';
        
        }
        else if(res === 'user'){
            userScore++;
            userScore_display.textContent = userScore;
            if(userScore == 5) winner_tag.textContent = 'User has Won the Game!';
        }
    });
    scissors_btn.addEventListener('click',() =>{
        let res = playRound('scissors');
        if(res === 'computer'){
            computerScore++;
            computerScore_display.textContent = computerScore;
            if(computerScore == 5) winner_tag.textContent = 'Computer has Won the Game!';
        
        }
        else if(res === 'user'){
            userScore++;
            userScore_display.textContent = userScore;
            if(userScore == 5) winner_tag.textContent = 'User has Won the Game!';
        }
    });
    reset_btn.addEventListener('click',()=>{
        userScore = 0;
        computerScore = 0;
        winner_tag.textContent = '';
        userScore_display.textContent = userScore;
        computerScore_display.textContent = computerScore;
    });
    // for(let i = 0; i < 5 ; i++){
    //     console.log('i is: ' + i);
    //     let res = playRound();
    
       

    // }
    // console.log(userScore);
    // console.log(computerScore);
    // if(userScore > computerScore){
    //     console.log(`You Win! ${userScore} to ${computerScore}`);
    // }    
    // else if(userScore < computerScore){
    //     console.log(`You Lose! ${userScore} to ${computerScore}`);
    // }    
    // else if(userScore == computerScore){
    //     console.log(`Draw! ${userScore} to ${computerScore}`);
    // }    
    
}
game();