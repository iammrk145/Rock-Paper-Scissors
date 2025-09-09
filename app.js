const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const resetbtn = document.querySelector('#reset');
const choiceDIv = document.querySelector('#choiceresults');
const fResults = document.querySelector('#fresults');


function getComputerChoice(){

    let computerSelect = Math.random();  // math.random() generate a random number betweeen 0 to 1

    if (computerSelect <= 0.3333){

        return 'Rock';

    } else if (computerSelect <= 0.6666){

        return 'Paper';

    } else {

        return 'Scissors';
    }
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    let result = '';

    choiceDIv.textContent = `You choose ${humanChoice}, computer choose ${computerChoice}.`

     if (humanChoice === "Rock" && computerChoice === "Scissors"){


        result = "Congrats You won!";
        humanScore += 1;

    } else if (humanChoice === "Paper" && computerChoice === "Rock"){


        result = "Congrats You won!";
        humanScore += 1;

    } else if (humanChoice === "Scissors" && computerChoice === "Paper"){


        result = "Congrats You won!";
        humanScore += 1;

    } else if (humanChoice === "Rock" && computerChoice === "Paper"){


        result = "oh no! You lost";
        computerScore += 1;

    } else if (humanChoice === "Paper" && computerChoice === "Scissors"){

        choiceDIv.textContent = `You choose ${humanChoice}, computer choose ${computerChoice}.`
        result = "oh no! You lost";
        computerScore += 1;

    } else if (humanChoice === "Scissors" && computerChoice === "Rock"){


        result = "oh no! You lost";
        computerScore += 1;

    } else {
                
        choiceDIv.textContent = `both choose ${computerChoice}.`
        result = "its a tie!"
    }

    resultsDiv.textContent = result + " " + "Your Score: " + humanScore + ", Computer Score: " + computerScore;


    if (humanScore === 5){

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        fResults.textContent = "You have won the game🎉😎";

    } else if (computerScore === 5){

        
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;


        fResults.textContent = "oh no! You lost the game😭💀";

    };

 
}



// UI and DOM


console.log('Buttons connected:', rockBtn, paperBtn, scissorsBtn);
console.log('Results div:', resultsDiv);

rockBtn.addEventListener('click', () => {
   playRound('Rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
});


// to reset the game

resetbtn.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        resultsDiv.textContent = "Game reset! Let's play again 🎮";
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        choiceDIv.textContent = "";
        fResults.textContent = "";
});

