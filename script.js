// Set variables.
let userScore = 0; //score counter for user.
let computerScore = 0; //score counter for pc.
let currState; // compares user input to pc input, outputs win, tie or lose.
let userInput; // get user input, R P or S.
let computerInput; // random output of R P or S.

// Const both boolean condition but with three outcomes and feedback for user.
const win = 'You win! Congrats.' 
const lose = 'You lose, Awwww.'
const tie = "It's a Tie!"

// Start of actual code.

let getUserInput = () => {
    userInput = prompt('Rock, Paper or Scissors?', 'Rock');
    return userInput.toLowerCase()
}

// Check if input is valid.
let checkInput = (userInput) => {
    if (userInput.toLowerCase().trim() == 'rock' ||
        userInput.toLowerCase().trim() == 'paper' ||
        userInput.toLowerCase().trim() == 'scissors') {
        return true
    }
    return false
}

// Generate computer output of random RPS.
const RPS = ['rock', 'paper', 'scissors']
let getComputerInput = () => {
    computerInput = RPS[Math.floor(Math.random() * 3)]
    return computerInput
} 

// Place result in array called outcome = [user, pc].
let getResult = (userInput, computerInput) => {
    outcome = [userInput.toLowerCase(), computerInput]
    return outcome;
}

// Game rules table.
let whoWins = (outcome) => {
    if (outcome[0] == outcome[1]) {
        currState = tie
    } else if (outcome[0] == 'rock' && outcome[1] == 'scissors') {
        currState = win
    } else if (outcome[0] == 'rock' && outcome[1] == 'paper') {
        currState = lose
    } else if (outcome[0] == 'paper' && outcome[1] == 'rock') {
        currState = win
    } else if (outcome[0] == 'paper' && outcome[1] == 'scissors') {
        currState = lose
    } else if (outcome[0] == 'scissors' && outcome[1] == 'paper') {
        currState = win
    } else if (outcome[0] == 'scissors' && outcome[1] == 'rock') {
        currState = win
    }
}

// main function
let console_RPS = () => {
    getUserInput() 
    console.log(`You chose: ${userInput.toUpperCase()}`)
    if (!checkInput(userInput)) {
        console.log('invalid, try again')
        console_RPS()
    } else {
        getComputerInput();
        console.log(`Computer chose: ${computerInput.toUpperCase()}`)
        getResult(userInput, computerInput)
        whoWins(outcome)
        if (currState == tie) {
            console.log(currState)
        } else if (currState == win) {
            console.log(currState)
            userScore++
        } else if (currState == lose) {
            console.log(currState)
            computerScore++
        } 

    } console_RPS() // repeat for fun!
    
} 

console_RPS()
console.log(`The score is you:${userScore} computer:${computerScore} `)
