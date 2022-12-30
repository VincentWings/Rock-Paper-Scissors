let playerScore = 0; // Initialize player score
let computerScore = 0; // Initialize computer score
const maximumScore = 10; // Initialize maximum score for the game

// Get DOM elements for the score, result title and subtitle, and images for player and computer choice
const playerScore_span = document.querySelector('#player-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const resultTitle = document.querySelector('.result-title');
const resultSubtitle = document.querySelector('.result-subtitle');
const resultPlayer = document.querySelector('.section-result .playerchoice');
const resultComputer = document.querySelector('.section-result .computerchoice');
let circleClass = "";

// Get DOM element for the game choices and buttons for rock, paper, and scissors
const gameChoices = document.querySelector('.section-game__choices');
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const btnAll = document.querySelectorAll('.section-game__choices .btn');

// Initialize messages for different game outcomes
const message_rs = "Rock crushes scissors.";
const message_pr = "Paper covers rock.";
const message_sp = "Scissors cut paper.";
const message_draw = "The game is a draw";

// Function to randomly generate a choice for the computer
const computerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']; // Initialize array of choices
    const randomNumber = Math.floor(Math.random() * choices.length); // Generate a random number
    const choice = choices[randomNumber]; // Get choice from array based on the random number
    return choice;
};

// Function to determine the result of the game once the maximum score has been reached
const endGame = () => {
    if (playerScore === maximumScore) { // If player score equals maximum score
        resultSubtitle.innerHTML = "You win!"; // Update result subtitle
        playerScore_span.classList.add("win"); // Add "win" class to player score span
        computerScore_span.classList.add("lose"); // Add "lose" class to computer score span
    } else if (computerScore === maximumScore) { // If computer score equals maximum score
        resultSubtitle.innerHTML = "You lose!"; // Update result subtitle
        playerScore_span.classList.add("lose"); // Add "lose" class to player score span
        computerScore_span.classList.add("win"); // Add "win" class to computer score span
    }
};

// Function to update score and result title/subtitle when player wins
const win = (message, userChoiceValue) => {
    playerScore += 1; // Increment player score by 1
    resultTitle.textContent = "You win!"; // Update the text of the element with class "result-title" to "You win!"
    resultSubtitle.textContent = message; // Update the text of the element with class "result-subtitle" with the value of the parameter "message"
    playerScore_span.textContent = playerScore; // Update the text of the element with id "player-score" with the value of the variable "playerScore"
    addBtnClass(userChoiceValue, 'circle-green'); // Call the function "addBtnClass" with the arguments "userChoiceValue" and "circle-green"
};

// Function to update score and result title/subtitle when player loses
const lose = (message, userChoiceValue) => {
    computerScore += 1; // Increment computer score by 1
    resultTitle.textContent = "You lose!"; // Update the text of the element with class "result-title" to "You lose!"
    resultSubtitle.textContent = message; // Update the text of the element with class "result-subtitle" with the value of the parameter "message"
    computerScore_span.textContent = computerScore; // Update the text of the element with id "computer-score" with the value of the variable "computerScore"
    addBtnClass(userChoiceValue, 'circle-red'); // Call the function "addBtnClass" with the arguments "userChoiceValue" and "circle-red"
};

// Function to update result title/subtitle when there is no winner
const noWinner = (message, userChoiceValue) => {
    // Update result title to "No winner"
    resultTitle.textContent = "No winner";
    // Update result subtitle to the provided message
    resultSubtitle.textContent = message;
    // Add the "circle-grey" class to the button that represents the user's choice
    addBtnClass(userChoiceValue, 'circle-grey');
};

// Function to update resultPlayer and resultComputer images
const showResults = (userChoiceValue, computerChoiceValue) => {
    // Update the resultPlayer image to the user's choice
    resultPlayer.innerHTML = `<img src="img/${userChoiceValue}.png" alt="${userChoiceValue}">`;
    // Update the resultComputer image to the computer's choice
    resultComputer.innerHTML = `<img src="img/${computerChoiceValue}.png" alt="${computerChoiceValue}">`;
};

// Function to remove the "circle-green", "circle-red", and "circle-grey" classes from all buttons
const removeBtnClass = () => {
    // Loop through all buttons
    btnAll.forEach((btn) => {
        // After a delay of 300 milliseconds, remove the "circle-green", "circle-red", and "circle-grey" classes from the button
        setTimeout(() => btn.classList.remove('circle-green', 'circle-red', 'circle-grey'), 300);
    });
};

const addBtnClass = (userChoice, btnClassName) => {
    // Select the button element based on the user's choice
    btnChosen = `.btn-${userChoice}`;
    // Add the specified class to the button element
    document.querySelector(btnChosen).classList.add(btnClassName);
}

// Function to play game and update result title/subtitle, resultPlayer and resultComputer images, and scores
const playGame = (userChoiceValue) => {
    removeBtnClass();

    const computerChoiceValue = computerChoice(); // Generate computer choice

    showResults(userChoiceValue, computerChoiceValue); // Update resultPlayer and resultComputer images

    // Update result title/subtitle and scores based on user and computer choices
    switch (userChoiceValue + computerChoiceValue) {
        case "rockscissors":
            win(message_rs, userChoiceValue);
            break;
        case "paperrock":
            win(message_pr, userChoiceValue);
            break;
        case "scissorspaper":
            win(message_sp, userChoiceValue);
            break;
        case "rockpaper":
            lose(message_pr, userChoiceValue);
            break;
        case "paperscissors":
            lose(message_sp, userChoiceValue);
            break;
        case "scissorsrock":
            lose(message_rs, userChoiceValue);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            noWinner(message_draw, userChoiceValue);
            break;
        default:
            break;
    }

    // If either player or computer has reached maximum score, end game
    if (playerScore === maximumScore || computerScore === maximumScore) {
        // Hide game choices and update result title
        gameChoices.style.display = "none";
        resultTitle.innerHTML = "Game over";
        // Call endGame function to determine game result and update scores
        endGame();
    }
}

// Add event listeners for game buttons
function main() {
    btnRock.addEventListener('click', () => playGame('rock')); // When "Rock" button is clicked, call playGame function with 'rock' argument
    btnPaper.addEventListener('click', () => playGame('paper')); // When "Paper" button is clicked, call playGame function with 'paper' argument
    btnScissors.addEventListener('click', () => playGame('scissors')); // When "Scissors" button is clicked, call playGame function with 'scissors' argument
}

main();