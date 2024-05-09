
function getComputerChoice(){
    let choice=Math.floor(Math.random()*3)
    if (choice==0){
        return "rock";
    } else if(choice== 1){
        return "paper";
    }else if(choice==2){
        return "scissors";
    }
}
function getHumanChoice(){
    let humanChoice=prompt("Type Your Choice Out");
    let Choice=humanChoice.toLowerCase();
    return Choice;
}
function playGame(){
    let HumanScore=0;
    let ComputerScore=0;
    function playRound(playerSelection,computerSelection){
        if (playerSelection === computerSelection) {
            return "it's a tie replay this round";
        } else if ((playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "rock")) {
            HumanScore +=1;
            return `You lose! ${playerSelection} loses to ${computerSelection}`;
        } else if (playerSelection === "rock" && computerSelection === "scissors"||(playerSelection === "scissors" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "rock")) {
            ComputerScore+=1;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    
    }
    for(let i=0;i<5;i++){
        console.log(playRound(getHumanChoice(),getComputerChoice()))
    }
    if (HumanScore>ComputerScore){
        return "you win"
    }else if(HumanScore<ComputerScore){
        return "you lost"
    }else{
        return "it's a tie"
    }
}
console.log(playGame())
