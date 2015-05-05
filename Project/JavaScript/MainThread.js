function runGame() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    var gameState = 0;                              // 0 = startPanel, 1 = observationPanel, 2 = answerPanel, 3 = endPanel
    var currentScore = 0;
    var highScore = 0;
    var level = 1;
    var answerArray = [];
    
    drawStartPanel(highScore);
    clearCanvas();
    drawObservationPanel();
    /*clearCanvas();
    drawAnswerPanel();
    clearCanvas();
    drawEndPanel(currentScore, highScore);
    */
    // running the game
    /*while (true) {
    
    }
    
    /* State */
    // change the current state to the next one
    /*
    function changeGameState () {
        if (gameState == 0)
            gameState++;
        else if (gameState == 1)
            gameState++;
        else if (gameState == 2)
            gameState++;
        else if (gameState == 3)
            gameState = 0;
    }*/
    
    /* Scores */
    // set currentScore to be 0
    function clearScore() {
        currentScore = 0;
    }
    // set high score to current score if current score is bigger than the high score
    function updateHighScore() {
        if (currentScore > highScore)
            highScore = currentScore;
    }
    // update the current score
    function updateScore() {
        currentScore += level;
    }
    
    /* Answer Array */
    // empty the answer array
    function clearAnswer() {
        answerArray = [];
    }
    // take an answer generated and add to the answerArray
    function addAnswer(answer) {
        answerArray.push(answer);
    }
}