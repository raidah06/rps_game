const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame(){
    winners=[]
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}

function game() {

    let imgs=document.querySelectorAll('img')
    imgs.forEach((img)=> 
    img.addEventListener(('click'),()=>{
        if(img.id){
            playRound(img.id);
        }
    }))

}

function playRound(playerChoice) {
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
  tallyWins()
  displayRound(playerChoice,computerChoice,winner);
}

function tallyWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent='Score: ${pWincount}';
    document.querySelector('.computerScore').textContent='Score: ${cWincount}';
    document.querySelector('.ties').textContent='Ties: ${ties}';
}

function displayRound(playerChoice,computerChoice,winner){
    document.querySelector('.playerChoice').textcontent='You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}'
    document.querySelector('.computerChoice').textcontent='The Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}'
    document.querySelector('.winner').textcontent='Winner: ${winner}'
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}



function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;

}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round");
  console.log("-------------------------------");
}
game()