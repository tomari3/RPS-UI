// Set variables.
let userScore = 0; //score counter for user.
let computerScore = 0; //score counter for pc.
let currState; // compares user input to pc input, outputs win, tie or lose.
let userInput; // get user input, R P or S.
let computerInput; // random output of R P or S.


// Set listeners
// rock
const rock = document.querySelector('#rock');
rock.addEventListener('click', (e) => {
    rock.classList.add("gradient");
    console_RPS(rock.id);
});
// paper
const paper = document.querySelector('#paper');
paper.addEventListener('click', (e) => {
    console_RPS(paper.id)
});
// scissors
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', (e) => {
    console_RPS(scissors.id)

});
// Const both boolean condition but with three outcomes and feedback for user.
const win = "You win, YEA!"
const lose = "You lose, Awwww."
const tie = "It's a Tie!"

// Start of actual code.

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

const insertText = (currState) => {
    const state = document.querySelector('.info .state');
    state.textContent = `${currState}`
}

const insertScore = (userScore, computerScore) => {
    const scoreOutput = document.querySelector('.info .score')
    scoreOutput.textContent = `${userScore}, ${computerScore}`
}
const insertUserInput = (input) => {
    const userInputHtml = document.querySelector('#user-input');
    userInputHtml.textContent = input;
}
const insertComputerInput = (input) => {
    const computerInputHtml = document.querySelector('#computer-input');
    computerInputHtml.textContent = input;
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
    } else if (outcome[0] == 'scissors' && outcome[1] == 'rock') {
        currState = win
    } else if (outcome[0] == 'scissors' && outcome[1] == 'paper') {
        currState = lose
    }
}

// main function
let console_RPS = (input) => {
    insertUserInput(input);
    getComputerInput();
    console.log(`Computer chose: ${computerInput.toUpperCase()}`)
    insertComputerInput(computerInput)
    getResult(input, computerInput)
    whoWins(outcome)
    if (currState == tie) {
        insertText(currState)
    } else if (currState == win) {
        insertText(currState)
        userScore++
    } else if (currState == lose) {
        insertText(currState)
        computerScore++
    }
    insertScore(userScore, computerScore)
}

const resetButton = document.querySelector('.reset')
resetButton.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    insertScore(userScore, computerScore)
    insertText('Ok, again');
    insertUserInput('You');
    insertComputerInput('Computer');
});
const playText = document.querySelector('#play')
const play = document.querySelector('header');
play.addEventListener('click', (e) => {
    play.classList.toggle('padding');
    if (playText.textContent == 'PLAY') {
        playText.style.fontSize = '0.7em';
        playText.textContent = 'Rock Paper Scissors'
    } else {
        playText.textContent = 'PLAY'
        playText.style.fontSize = '3em';
    }


});


// console_RPS()
// console.log(`The score is you:${userScore} computer:${computerScore} `)