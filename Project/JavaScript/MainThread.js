function runGame() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    var gameState = 0;                              // 0 = startPanel, 1 = observationPanel, 2 = answerPanel, 3 = endPanel
    var currentScore = 0;
    var highScore = 0;
    var level = 1;
    var answerArray = [];
    var life = 3;
    var subLvl;
    var answer;
    
    drawStartPanel(highScore);
    /*clearCanvas();
    drawObservationPanel(1);*/
    /*clearCanvas();
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
   
   /**
    * This function controls the difficulty,
    * the game will only terminate if life has reached zero
    * @param answer The struct to be passed into answer panel
    */ 
    function activateAnswerPage(answer) {
        subLvl = 1;
        //increment the slide every 3 levels have been passed
        while(refreshAnswerPage()) {
            if(level % 3 == 0) {
                subLvl++;
            }
        }
        drawEndPanel();
    }

    /**
    * This function will continue to refresh answer panel until
    * each levels desinated amount of execution has been reached
    * if life has reached zero, the function will return false, else true
    */
    function refreshAnswerPage(answer) {
        //If the user has guessed the correct answer. 
        var correct;
        //The amount of slides a level has
        var subLvlCounter = subLvl;
        //While not all slides have been displayed
        while(subLvlCounter > 0) {
            //if life = 0, end the game
            if(life <= 0) {
                return false;
            }
            //Detect the users guess, if wrong, deduct a life
            correct = drawAnswerPanel();
            if(!correct) {
                life--;
            }
            //decrement the slide number
            subLvlCounter--;
        }
        //increment a level after all slides have been displayed
        level++;
        //assign the new struct to be used
        answer = drawObservationPanel();
        return true;
    }

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