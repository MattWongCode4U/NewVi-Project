/*
*   Main game function that runs the whole game
*/
function runGame() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    var currentSlide = 1;
    var currentScore = 0;
    var highScore = 0;
    var level = 1;
    var life = 3;
    var slidesNum;
    var answerArray = [];
    
    drawStartPanel(highScore);
    canvas.addEventListener('click', startPanelEventListener);
    
    /*
    *   the start button on-click action
    */
    function startPanelEventListener(event) {
        if (eventListener(0.8, 0.5, 0.1, 0.6, event.offsetX, event.offsetY)) {
            // generate boxes to be displayed
            for (var i = 0; i < level; i++) {
                answerArray.push(randomBoxGenerator(1));
            }
            // remove start button and draw the observation panel and its action listener
            canvas.removeEventListener('click', startPanelEventListener);
            drawObservationPanel(currentSlide, answerArray[0], randomBoxGenerator(2));
            observationPanelEventListener();
        }
    }
    /**
    * This function controls the difficulty,
    * the game will only terminate if life has reached zero
    * @param answer The struct to be passed into answer panel
    */ 
    function activateAnswerPage() {
        slidesNum = 1;
        //increment the slide every 3 levels have been passed
        while(refreshAnswerPage()) {
            if(level % 3 == 0) {
                slidesNum++;
            }
        }
        drawEndPanel();
    }

    /**
    * This function will continue to refresh answer panel until
    * each levels desinated amount of execution has been reached
    * if life has reached zero, the function will return false, else true
    */
    function refreshAnswerPage() {
        //If the user has guessed the correct answer. 
        var correct;
        //The amount of slides a level has
        var subLvlCounter = slidesNum;
        //While not all slides have been displayed
        while(subLvlCounter > 0) {
            //if life = 0, end the game
            if(life <= 0) {
                return false;
            }
            //Detect the users guess, if wrong, deduct a life
            //decrement the slide number
            subLvlCounter--;
        }
        correct = drawAnswerPanel();
        if(!correct) {
            life--;
        }
        //increment a level after all slides have been displayed
        level++;
        //assign the new struct to be used
        observationPanelEventListener();
        return true;
    }
    /*
    *   
    */
    function observationPanelEventListener() {
        setTimeout(function() {
            drawAnswerPanel(currentSlide, answerArray[0]);
            canvas.addEventListener('click', answerPanelEventListener);
        }, 3000);
    }
    /*
    *
    
    function answerPanelEventListener(event) {
        // variables
        var clicked = false;
        var correct = false;
        // box one
        if (eventListener(0.6, 0.25, 0.2, 0.4, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', answerPanelEventListener);
            clicked = true;
        }
        // box two
        else if (eventListener(0.6, 0.75, 0.2, 0.4, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', answerPanelEventListener);
            clicked = true;
        }
        // box three
        else if (eventListener(0.9, 0.25, 0.2, 0.4, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', answerPanelEventListener);
            clicked = true;
        }
        // box four
        else if (eventListener(0.9, 0.75, 0.2, 0.4, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', answerPanelEventListener);
            clicked = true;
        }
        if (clicked == true) {
            drawEndPanel(currentScore, highScore);
            canvas.addEventListener('click', endPanelEventListener);
        } 
    } */
    /*
    *
    */
    function endPanelEventListener(event) {
        // restart
        if (eventListener(0.7, 0.5, 0.1, 0.6, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', endPanelEventListener);
            drawObservationPanel(currentSlide, randomBoxGenerator(1), randomBoxGenerator(2)); 
            observationPanelEventListener();
        }
        // end game
        else if (eventListener(0.9, 0.5, 0.1, 0.6, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', endPanelEventListener);
            canvas.addEventListener('click', startPanelEventListener);
            drawStartPanel(highScore); 
        }  
    }
}