

//Have computer randomly select a choice between rock, paper, and scissors

const rpsArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    
    const random = Math.floor(Math.random() * rpsArray.length);
    let choice = rpsArray[random];
    return choice;

}

//Play round of Rock, Paper, Scissors

function playRound(playerSelection, computerSelection) {
    //format input consistently
    

    const formatPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    //console.log(formatPlayerSelection);

    //Determine a winner

    if (rpsArray.includes(formatPlayerSelection)){
        //console.log("You entered valid input.");
        if(formatPlayerSelection === 'Rock' && computerSelection === 'Scissors' || formatPlayerSelection === 'Paper' && computerSelection === 'Rock' || formatPlayerSelection === 'Scissors' && computerSelection === 'Paper'){
            return "You Win! " + String(formatPlayerSelection) + " beats " + String(computerSelection);
        } else if( formatPlayerSelection === computerSelection) {
            return "Tie!";
        }
        else { return "You lose! " + String(computerSelection) + " beats " + String(formatPlayerSelection); }
    } else { alert("Improper Input!"); }
    
}

//Play a game of Rock Paper Scissors
function game() {
    for (let i = 0; i < 5; i++){
        let playerSelection = String(prompt("Rock, Paper, Scissors?"));
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection)
        console.log(result);
        if (result.includes("Win")) {
            playerWins++;
            //console.log("Playerwins:"+playerWins);
        } else if (result.includes("lose")) {
            computerWins++;
            //console.log("Computerwins:" + computerWins)
        } else {ties++};
         
    }
    if (computerWins > playerWins) {
        console.log("You lost the game!");
    } 
    else if (playerWins > computerWins) {
        console.log("You won the game!");
    } else {console.log("It's a tie!")};
}



let playerWins = 0 ;
let computerWins = 0;
let ties = 0;

game();
