let playerScore = 0;
let AIScore = 0;

const button1 = document.querySelector('#rock');
const button2 = document.querySelector('#paper');
const button3 = document.querySelector('#scissors');

const header2 = document.querySelector('.header2');
header2.setAttribute('style','color:crimson','background: black');
header2.textContent = "Choose Your Weapon!";

const winOrLose = document.querySelector('#winOrLose');
const choose = document.querySelector('.choose');
const score = document.querySelector('.score');
const result = document.querySelector('.result');





button1.addEventListener('click',() => {
    playRound("rock");
    
    
});
button2.addEventListener('click',() => {
    playRound("paper");
    
});
button3.addEventListener('click',() => {
    playRound("scissor");
});




function playRound(playerSelection,computerSelection){

    let attack = Math.floor(Math.random()*3);


    
    
    //computerAI
     //computer selection container
    if(attack === 0){
        computerSelection = "rock";
    }
    else if(attack === 1){
        computerSelection = "scissor";
    }
    else if(attack === 2){
        computerSelection = "paper"
    }
    

   /* let playerSelectionContainer = prompt("choose your weapon: Rock, Scissors or Paper");
    let playerSelectionContainerSmall = playerSelectionContainer.toLowerCase();
    playerSelection = playerSelectionContainerSmall;*/
    
    if(playerSelection === computerSelection){
        console.log("Tie!");
        winOrLose.textContent = "It's a Tie! You have the same weapon";
        
    }

    else if(playerSelection==="rock"){
        if(computerSelection==="scissor"){
            console.log("Rock beats Scissor! You Win!");
            winOrLose.textContent = "Rock beats Scissor! You Win!";
            playerScore++;
            
        }
        else{
            console.log("Paper Beats Rock! You Lose!");
            winOrLose.textContent = "Paper Beats Rock! You Lose!";
            AIScore++;
            
        }
    }
    else if(playerSelection==="scissor"){
        if(computerSelection==="paper"){
            console.log("Scissor Beats Paper! You Win!");
            winOrLose.textContent = "Scissor Beats Paper! You Win!";
            playerScore++;
            
        }
        else{
            console.log("Rock beats Paper! You Lose");
            winOrLose.textContent = "Rock beats Paper! You Lose!";
            AIScore++;
            
        }
    }
    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){
            console.log("Paper beats Rock! You Win");
            winOrLose.textContent = "Paper beats Rock! You Win!";
            playerScore++;
    
        }
        else{
            console.log("Scissor beats Paper! You Lose!");
            winOrLose.textContent = "Scissor beats Paper! You Lose!";
            AIScore++;


        }
    }
    else{
        console.log("not in the selection");
        winOrLose.textContent="are you cheating?";
        
    }
    console.log("\n \n");
    console.log("You chose:" +playerSelection);
    console.log("AI chose:" +computerSelection);
    console.log("\n \n");

    choose.textContent = `You chose: ${playerSelection} Your enemy chose: ${computerSelection}`;

    /*
    console.log("AIScore: " +AIScore)
    console.log("PLayerScore: "+playerScore)*/
    score.textContent ="You : "+playerScore +" Enemy: "+AIScore;
    winOrLose.appendChild(choose);
    winOrLose.appendChild(score);



    if(playerScore === 5){
        console.log("Game Over: CONGRATULATIONS! YOU WIN");
        result.textContent="Game Over: CONGRATULATIONS! YOU WIN";
        result.setAttribute('style','color:gold; background:grey;');
        winOrLose.appendChild(result);
        playerScore = 0;
        AIScore = 0;

    }
    else if(AIScore ===5){
        console.log("Game Over: You Lose!");
        result.textContent="Game Over: You Lose!";
        result.setAttribute('style', 'color: blue; background: black;');
        winOrLose.appendChild(result);
        playerScore = 0;
        AIScore = 0;
    }
    /*else if(){
        console.log("Game Over: TIE");
        result.textContent="Game Over: TIE";
    }*/

    

    //return playRound(playerSelection,computerSelection);


    

} //end of playRound();

function game(){

}



