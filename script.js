let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Function generate the new secret target number.
const generateTarget = () => Math.floor(Math.random() * 10);

// Function to determine which guess is closest to the target number.
const compareGuesses = (user, cpu, targetNum) => {

    if(user < 0 || user > 9){
        alert('Number out of range! You have been penalized with a lost \
            for this round. Please enter a number between 0 and 9.')
    }

    if(user === targetNum && cpu === targetNum || 
        getAbsoluteDistance(user, targetNum) === getAbsoluteDistance(cpu, targetNum) || 
        getAbsoluteDistance(user, targetNum) < getAbsoluteDistance(cpu, targetNum)){
        return true
    } else if(getAbsoluteDistance(user, targetNum) > getAbsoluteDistance(cpu, targetNum)){
        return false
    }
}

// Function to correctly increase the winner’s score after each round.
const updateScore = winner => {
    
    if(winner === 'human'){
        humanScore++
    } else {
        computerScore++
    }
}

// Function to update the round number after each round.
const advanceRound = () => {
    currentRoundNumber++
}


// Function to return the calculated distance between user/cpu guess 
// and the target number
const getAbsoluteDistance = (playerPick, targetNumber) => Math.abs(playerPick - targetNumber);
