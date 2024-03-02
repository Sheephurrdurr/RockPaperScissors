function game() {
    let playerScore = 0;
    let enemyScore = 0;
    let movesCount = 0;

    // Handles game logic
    function playGame() {

        // Get some buttons
        const rockBtn = document.getElementById("rockBtn");
        const paperBtn = document.getElementById("paperBtn");
        const scissorsBtn = document.getElementById("scissorsBtn");

        const enemyOptions = ["rock", "paper", "scissors"];
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];

       // Loop through objects in playerOptions array (gestureBtns)
        playerOptions.forEach(option => {
            // Attach on-click event handler to each btn, that calls function
            option.addEventListener("click", function () {

                const movesLeft = document.getElementById("lives");
                // +1 to movesCount pr. click of a button
                movesCount++
                // Display movesLeft. Use string interpolation, to dynamically display remaining moves
                movesLeft.innerHTML = `&nbsp; ${10 - movesCount}`;
                
                // Store random number between 0 and 3 in variable
                let randomChoice = Math.floor(Math.random() * 3);
                // Use random number to pick object in enemyOptions array
                let computerChoice = enemyOptions[randomChoice];

                // .this (clicked btn) holds the player's move, computerChoice holds the computer's move
                // Give these as parameters to winner function
                winner(this.innerText, computerChoice);
                
                // Checks remaining moves and if they exceed 10, runs gameOver function
                if (movesCount == 10) {
                    gameOver(playerOptions, movesCount);
                }
            })
        })
    }
    // Handles logic for deciding a winner, on a round pr. round basis
    function winner(playerMove, enemyMove) {
        
        let result = document.getElementById("result");

        // store player -& enemy moves in variable and displays the value as lower case letters (important for the if-else statements)
        let player = playerMove.toLowerCase();
        let enemy = enemyMove.toLowerCase();

        const playerScoreCount = document.getElementById("yourScoreP");
        const enemyScoreCount = document.getElementById("enemyScoreP");

        // If player and enemy move is the same it's a tie
        if (player === enemy) {
            result.textContent = "Tie."
        }
        // If you get rock
        else if (player == 'rock') {
            // And enemy gets paper
            if (enemy == 'paper') {
                // Display your defeat
                result.innerHTML = 'Ghost inside the computer won';
                // Add 1 to computer's score
                enemyScore++;
                // Display new score
                enemyScoreCount.innerHTML = enemyScore;
 
            } else {
                // If not, that means you win. 200IQ
                result.textContent = 'You win!'
                // Add 1 to your score
                playerScore++;
                // Display new score
                playerScoreCount.innerHTML = playerScore;
                // Yea, you get it now
            }
        }

        else if (player == "scissors") {
            if (enemy == "rock") {
                result.innerHTML = 'SkyNet Won';
                enemyScore++;
                enemyScoreCount.innerHTML = enemyScore;
            } else {
                result.innerHTML = 'Crazy Ultra Mega Victory';
                playerScore++;
                playerScoreCount.innerHTML = playerScore;
            }
        }

        else if (player == "paper") {
            if (enemy == "scissors") {
                result.innerHTML = 'Defeat';
                enemyScore++;
                enemyScoreCount.innerHTML = enemyScore;
            } else {
                result.innerHTML = 'Take everything from them';
                playerScore++;
                playerScoreCount.innerHTML = playerScore;
            }
        }
    }  
    // Determine final winner and restart game
    function gameOver(playerOptions) {
        const chooseTitle = document.getElementById("chooseTitle");
        const result = document.getElementById("result");
        const reload = document.getElementById("reloadBtn");
        const livesLeft = document.getElementById("livesLeft");

        // OUT WITH ALL THE BUTTONS!!
        playerOptions.forEach(option => {
            option.style.display = "none";
            livesLeft.style.display = "none";
        })
        
        // Change title to display game over
        chooseTitle.innerHTML = "GAME OVER"

        // I'm not gonna' explain this
        if (playerScore < enemyScore) {
            result.innerHTML = "Robots win.";
        }
        else if (playerScore > enemyScore) {
            result.innerHTML = "You've won!";
        }
        else {
            result.innerHTML = "That's a tie.";
        }
        // Display button to reset game,
        // Add on click event handler and reset game when reload button is clicked
        reload.innerHTML = "Restart Game."
        reload.style.display = "flex";
        reload.addEventListener("click", () => {
            window.location.reload();
        })
    }
    // Call playGame() function
    playGame();
}
// Call game() function
game();
