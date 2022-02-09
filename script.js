// Get user input of RPS
let chooseTool = () => prompt('Rock, Paper or Scissors?', 'Rock')
// Check if input is correct
let a = 'Rock'
let checkInput = (input) => {
    // input = input.trim()
    if (input.toLowerCase().trim() == 'rock' ||
        input.toLowerCase().trim() == 'paper' ||
        input.toLowerCase().trim() == 'scissors') {
        return true
    }
    return false
}
console.log(checkInput(a)) //checkpoint

// Generate computer output of random RPS
// Compare the user's input with the computer's output
// If 'Tie', repeat.
// Return the result of the match
// Add score
// End


// Extras
//console.log('Your input is incorrect, please choose Rock, Paper or Scissors.')
//  || 'paper' || 'scissors' 