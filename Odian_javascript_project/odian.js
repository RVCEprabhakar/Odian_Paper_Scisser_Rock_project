
// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['Paper', 'Rock', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return "You win!";
    }

    return "You lose!";
}

// Function for the "Paper" button
function paper() {
    const playerChoice = 'Paper';
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('result').innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}

// Function for the "Rock" button
function rock() {
    const playerChoice = 'Rock';
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('result').innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}

// Function for the "Scissors" button
function scissors() {
    const playerChoice = 'Scissors';
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('result').innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}