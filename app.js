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

console.log(getComputerChoice());


function getHumanChoice(){

    let humanSelect = prompt("Enter Rock, Paper or Scissors");

    if (humanSelect.toLowerCase() === "rock"){

        humanSelect = 'Rock';
    } else if (humanSelect.toLowerCase() === "paper"){

        humanSelect = 'Paper';
    } else if (humanSelect.toLowerCase() === "scissors"){

        humanSelect = 'Scissors';
    } else {
        console.log(null);
    }

    return humanSelect;
}

console.log(getHumanChoice());


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

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

        result = "oh no! You lost";
        computerScore += 1;

    } else if (humanChoice === "Scissors" && computerChoice === "Rock"){

        result = "oh no! You lost";
        computerScore += 1;

    } else {
        result = "its a tie!"
    }

    console.log(result);
    console.log("Your Score: " + humanScore + ", Computer Score: " + computerScore);
    return result;
}