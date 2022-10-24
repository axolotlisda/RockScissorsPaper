let playerScore = 0;
let AIScore = 0;


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
    

    let playerSelectionContainer = prompt("choose your weapon: Rock, Scissors or Paper");
    let playerSelectionContainerSmall = playerSelectionContainer.toLowerCase();
    playerSelection = playerSelectionContainerSmall;
    
    if(playerSelection === computerSelection){
        console.log("Tie!");
        
    }

    else if(playerSelection==="rock"){
        if(computerSelection==="scissor"){
            console.log("Rock beats Scissor! You Win!");
            playerScore++;
            
        }
        else{
            console.log("Paper Beats Rock! You Lose!");
            AIScore++;
            
        }
    }
    else if(playerSelection==="scissor"){
        if(computerSelection==="paper"){
            console.log("Scissor Beats Paper! You Win!");
            playerScore++;
            
        }
        else{
            console.log("Rock beats Paper! You Lose");
            AIScore++;
            
        }
    }
    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){
            console.log("Paper beats Rock! You Win");
            playerScore++;
    
        }
        else{
            console.log("Scissor beats Paper! You Lose!");
            AIScore++;


        }
    }
    else{
        console.log("not in the selection");
        
    }
    console.log("\n \n");
    console.log("You chose:" +playerSelectionContainer);
    console.log("AI chose:" +computerSelection);
    console.log("\n \n");

    return playRound(playerSelection,computerSelection);


    

} //end of playRound();

function game(){

for(let i = 0; i < 5; i++){
    console.log("\n \n "+`Round: ${i}`+"\n \n")
    playRound();
    
    console.log("Player's Score: "+ playerScore);
    console.log("AI's Score: "+ AIScore);
    }
    if(playerScore > AIScore){
        console.log("Game Over: CONGRATULATIONS! YOU WIN")
    }
    else if(AIScore > playerScore){
        console.log("Game Over: You Lose!")
    }
    else{
        console.log("Game Over: TIE")
    }
}


