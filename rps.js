

//Have computer randomly select a choice between rock, paper, and scissors

const rpsArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    
    const random = Math.floor(Math.random() * rpsArray.length);
    let choice = rpsArray[random];
    return choice;

}
computerPlay();

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
        } else { return "You lose! " + String(computerSelection) + " beats " + String(formatPlayerSelection); }
    } else { alert("Improper Input!"); }
    

}

const playerSelection = String(prompt("Rock, Paper, Scissors?"));
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));