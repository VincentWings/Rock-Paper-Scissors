# Rock Paper Scissors

https://vincentwings.github.io/Rock-Paper-Scissors/

Rock Paper Scissors is a simple game that has been played for generations. It is a two-player game where each player chooses one of three options: rock, paper, or scissors. The game works as follows:

- Rock beats scissors
- Scissors beats paper
- Paper beats rock

This JavaScript code creates a digital version of the game that allows a player to play against the computer. The player can choose rock, paper, or scissors by clicking on the corresponding button. The computer will then make its own choice at random. The result of the game is determined by the rules listed above, and the player's and computer's scores are updated accordingly. The game continues until one player reaches a maximum score of 10 points. At that point, the game ends and a winner is declared.

The game of Rock Paper Scissors is implemented in JavaScript using the following steps:

- Initialize the player's score and the computer's score to 0, and set the maximum score for the game to 10.
- Select DOM elements for the score, result title and subtitle, and images for the player's and computer's choices.
- Get DOM elements for the game choices and buttons for rock, paper, and scissors.
- Initialize messages for the different game outcomes and define a function to randomly generate a choice for the computer.
- Define a function to determine the result of the game once the maximum score has been reached, and separate functions to update the score and result title/subtitle when the player wins or loses.
- Define a function to add a class to the button for the player's choice to indicate whether the player won or lost the round.
- Define an event listener for each of the buttons that calls a function to play the game when the button is clicked.
- Compare the player's choice and the computer's choice to determine the result of the game, and call the appropriate function to update the score and result title/subtitle.
- Call the function to add a class to the button for the player's choice.
- Continue the game until one player reaches the maximum score, at which point the game ends and a winner is declared.
