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
    var answerTile;
    
    drawStartPanel(highScore);
	canvas.addEventListener('click', muteButtonEventListener);
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
			canvas.removeEventListener('click', muteButtonEventListener);
            drawObservationPanel(currentSlide, answerArray[0], randomBoxGenerator(2));
            observationPanelEventListener();
        }
        else if (eventListener(0.6, 0.5, 0.075, 0.6, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', startPanelEventListener);
            drawHighScorePanel();
            canvas.addEventListener('click', highScorePanelEventListener);
        }
    }
    function highScorePanelEventListener(event) {
        if (eventListener(0.85, 0.5, 0.075, 0.5, event.offsetX, event.offsetY)) {
            // remove start button and draw the observation panel and its action listener
            canvas.removeEventListener('click', highScorePanelEventListener);
            drawStartPanel(highScore);
            canvas.addEventListener('click', startPanelEventListener);
        }
        
    }
    /*
    *   
    */
    function observationPanelEventListener() {
        answerTile = Math.floor((Math.random() * 4) + 1);
        setTimeout(function() {
            drawAnswerPanel(currentSlide, answerArray[0], answerTile);
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
            if(answerTile == 1) {
                correct = true;
            }
        }
        // box two
        else if (eventListener(0.6, 0.75, 0.2, 0.4, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', answerPanelEventListener);
            clicked = true;
            if(answerTile == 2) {
                correct = true;
            }
        }
        // box three
        else if (eventListener(0.9, 0.25, 0.2, 0.4, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', answerPanelEventListener);
            clicked = true;
            if(answerTile == 3) {
                correct = true;
            }
        }
        // box four
        else if (eventListener(0.9, 0.75, 0.2, 0.4, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', answerPanelEventListener);
            clicked = true;
            if(answerTile == 4) {
                correct = true;
            }
        } /*
        if (correct == true) {
            playAudio('success');
        } else {
            playAudio('fail');
        }*/
        if (clicked == true) {
            drawEndPanel(currentScore, highScore);
            canvas.addEventListener('click', endPanelEventListener);
        } 
    } 
    /*
    *
    */
    function endPanelEventListener(event) {
		// restart
        if (eventListener(0.7, 0.5, 0.1, 0.6, event.offsetX, event.offsetY)) {
            // reset values to default values
			currentScore = 0;
			level = 1;
			currentSlide = 1;
			
			canvas.removeEventListener('click', endPanelEventListener);
            drawObservationPanel(currentSlide, randomBoxGenerator(1), randomBoxGenerator(2)); 
            observationPanelEventListener();
			
        }
        // end game
        else if (eventListener(0.9, 0.5, 0.1, 0.6, event.offsetX, event.offsetY)) {
            // reset values to default values
			currentScore = 0;
			level = 1;
			currentSlide = 1;
			
			canvas.removeEventListener('click', endPanelEventListener);
            canvas.addEventListener('click', startPanelEventListener);
			canvas.addEventListener('click', muteButtonEventListener);
            drawStartPanel(highScore); 
        }  
    }
	
	/*
	*
	*/
	function muteButtonEventListener(event) {
		var canvas = document.getElementById("game");
		var ctx = canvas.getContext("2d");
		var width = canvas.width;
		//if (eventListener(width * 49 / 60, width / 150, width * 0.16, width * 0.16, event.offsetX, event.offsetY)) {
		if (eventListener(0.1,0.9,0.075,0.13,event.offsetX, event.offsetY)){	
			toggleSound();
			//drawButton(0.1,0.9,0.075,'White','Black','Black',0.13);
			//alert("alert");
		}
	}
}