function game() {
    let playerScore = 0;
    let enemyScore = 0;
    let movesCount = 0;

    // Handles game logic
    function playGame() {
        
        const rockBtn = document.getElementById("rockBtn");
        const paperBtn = document.getElementById("paperBtn");
        const scissorsBtn = document.getElementById("scissorsBtn");

        const enemyOptions = ["rock", "paper", "scissors"];
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];

        playerOptions.forEach(option => {
            option.addEventListener("click", function () {
                
                const movesLeft = document.getElementById("lives");
                movesCount++
                movesLeft.innerHTML = `&nbsp; ${10 - movesCount}`;
        
                let randomChoice = Math.floor(Math.random() * 3);
                let computerChoice = enemyOptions[randomChoice];

                winner(this.innerText, computerChoice);
                
                if (movesCount == 10) {
                    gameOver(playerOptions, movesCount);
                }
            })
        })
    }
    // Handles logic for deciding a winner, on a round pr. round basis
    function winner(playerMove, enemyMove) {
        
        let result = document.getElementById("result");
        let player = playerMove.toLowerCase();
        let enemy = enemyMove.toLowerCase();

        const playerScoreCount = document.getElementById("yourScoreP");
        const enemyScoreCount = document.getElementById("enemyScoreP");

        if (player === enemy) {
            result.textContent = "Tie."
        }
        else if (player == 'rock') {
            if (enemy == 'paper') {
                result.innerHTML = 'Ghost inside the computer won';
                enemyScore++;
                enemyScoreCount.innerHTML = enemyScore;
 
            } else {
                result.textContent = 'You win!'
                playerScore++;
                playerScoreCount.innerHTML = playerScore;
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

        playerOptions.forEach(option => {
            option.style.display = "none";
            livesLeft.style.display = "none";
        })
        chooseTitle.innerHTML = "GAME OVER"

        if (playerScore < enemyScore) {
            result.innerHTML = "Robots win.";
        }
        else if (playerScore > enemyScore) {
            result.innerHTML = "You've won!";
        }
        else {
            result.innerHTML = "That's a tie.";
        }
        reload.innerHTML = "Restart Game."
        reload.style.display = "flex";
        reload.addEventListener("click", () => {
            window.location.reload();
        })
    }
    playGame();
}
game();
