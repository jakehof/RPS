

//Have computer randomly select a choice between rock, paper, and scissors
let playerWins = 0 ;
let computerWins = 0;
let ties = 0;

const rpsArray = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll('button');
const resultSection = document.getElementById('roundLog')

function computerPlay() {
    
    const random = Math.floor(Math.random() * rpsArray.length);
    let choice = rpsArray[random];
    return choice;

}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    window.location.reload();
}
//Play round of Rock, Paper, Scissors

function playRound(playerSelection) {
    //format input consistently
    
        let computerSelection = computerPlay();
        
        const formatPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        

        //Determine a winner

        if (rpsArray.includes(formatPlayerSelection)){
            if(formatPlayerSelection === 'Rock' && computerSelection === 'Scissors' || formatPlayerSelection === 'Paper' && computerSelection === 'Rock' || formatPlayerSelection === 'Scissors' && computerSelection === 'Paper'){
                playerWins += 1;
                if(playerWins === 5){
                    alert("YOU WIN THE WHOLE GAME!");
                    resetGame();
                }
                else {return "You Win! " + String(formatPlayerSelection) + " beats " + String(computerSelection);}
            } else if( formatPlayerSelection === computerSelection) {
                ties =+ 1;
                return "Tie!";
            }
            else {
                computerWins += 1;
                if(computerWins === 5){
                    alert("YOU LOSE THE WHOLE GAME!");
                    resetGame();
                } 
                return "You lose! " + String(computerSelection) + " beats " + String(formatPlayerSelection); }
        } else { 
            alert("Improper Input!"); }

}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        resultSection.innerHTML += playRound(button.id) + "<br />";
        document.getElementById("plyr").textContent = playerWins;
        document.getElementById("cmp").textContent = computerWins;
    });
});


