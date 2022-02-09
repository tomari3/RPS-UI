// Get user input of RPS
let chooseTool = () => prompt('Rock, Paper or Scissors?', 'Rock')
// Check if input is correct
let a = 'Rock'
let checkInput = (userInput) => {
    // input = input.trim()
    if (userInput.toLowerCase().trim() == 'rock' ||
        userInput.toLowerCase().trim() == 'paper' ||
        userInput.toLowerCase().trim() == 'scissors') {
        return true
    }
    return false
}
console.log(checkInput(a)) //checkpoint
// Generate computer output of random RPS
// list of options
let tools = ['rock', 'paper', 'scissors']
let computerInput = () => tools[Math.floor(Math.random() * 3)];
// for (let i = 0; i <=3; i++) {
//     console.log(randomTool())
// } check random output
    
// Compare the user's input with the computer's output
// If 'Tie', repeat.
let checkResult = (user, computer) => {
    if (userInput == 'rock' || computerInput == 'scissors' ) {
        return 'user won'
    }
}
// Return the result of the match
// Add score
// End

// Compiled function
// let consoleRPS = () => {
//     chooseTool()
//     checkInput()
// }

// Extras
//console.log('Your input is incorrect, please choose Rock, Paper or Scissors.')
//  || 'paper' || 'scissors' 