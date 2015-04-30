function runGame() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    var currentScore = 0;
    var highScore = 0;
    var level = 1;
    var answerArray = [];
    
    drawStartPanel(highScore);
    ctx.clearRect(0, 0, 300, 300);
    drawObservationPanel();
    ctx.clearRect(0, 0, 300, 300);
    drawAnswerPanel();
    ctx.clearRect(0, 0, 300, 300);
    drawEndPanel();
    
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
    // add an answer to the answerArray
    function addAnswer(answer) {
        answerArray.push(answer);
    }
}