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
    */
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
    }
    /*
    *
    */
    function endPanelEventListener(event) {
        // reset values to default value
		currentScore = 0;
		level = 1;
		currentSlide = 1;
		
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