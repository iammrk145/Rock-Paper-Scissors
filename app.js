function getComputerChoice(){

    let computerSelect = Math.random();

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