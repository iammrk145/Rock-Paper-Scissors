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


