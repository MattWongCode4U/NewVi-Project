/*
*   Main game function that runs the whole game
*/
function runGame() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    var firstBoxNum;
    var secondBoxNum;
    var currentSlide = 1;
    var currentScore = 0;
    var highScore = 0;
    var level = 1;
    var answerArray = [];
    var answerTile;
    var life;
    
    drawStartPanel(highScore);
	canvas.addEventListener('click', muteButtonEventListener);
    canvas.addEventListener('click', startPanelEventListener);
    
    /*
    *   the start button on-click action
    */
    function startPanelEventListener(event) {
		if (eventListener(0.8, 0.5, 0.1, 0.6, event.offsetX, event.offsetY)) {
            secondBoxNum;
            firstBoxNum = Math.floor(Math.random() * 2 + 1);
            if(firstBoxNum == 2) {
                secondBoxNum = 1;
            } else {
                secondBoxNum = 2;
            }
            // generate boxes to be displayed
            answerArray.push(randomBoxGenerator(firstBoxNum));
            // remove start button and draw the observation panel and its action listener
            canvas.removeEventListener('click', startPanelEventListener);
			canvas.removeEventListener('click', muteButtonEventListener);
            drawObservationPanel(currentSlide, answerArray[0], randomBoxGenerator(secondBoxNum));
            observationPanelEventListener(answerArray[0]);
        }
        else if (eventListener(0.6, 0.5, 0.075, 0.6, event.offsetX, event.offsetY)) {
            canvas.removeEventListener('click', startPanelEventListener);
			canvas.removeEventListener('click', muteButtonEventListener);
            drawHighScorePanel();
            canvas.addEventListener('click', highScorePanelEventListener);
        }
    }
	
	/*
	*	the highscore button on-click action
	*/
    function highScorePanelEventListener(event) {
        if (eventListener(0.85, 0.5, 0.075, 0.5, event.offsetX, event.offsetY)) {
            // remove start button and draw the observation panel and its action listener
            canvas.removeEventListener('click', highScorePanelEventListener);
            drawStartPanel(highScore);
            canvas.addEventListener('click', startPanelEventListener);
			canvas.addEventListener('click', muteButtonEventListener);
        }
        
    }

    /*
    *   
    */
    function observationPanelEventListener(answer) {
        answerTile = Math.floor((Math.random() * 4) + 1);
        setTimeout(function() {
            drawAnswerPanel(currentSlide, answer, answerTile, currentScore);
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
        } 
        if (clicked == true) {
            if (correct == true) {
                playAudio('success');
                currentScore += 200;
            } else {
                playAudio('fail');
            }
            drawEndPanel(currentScore, highScore);
            canvas.addEventListener('click', endPanelEventListener);
        } 
    } 
    /*
    *
    */
    function endPanelEventListener(event) {
		// restar
        if (eventListener(0.7, 0.5, 0.1, 0.6, event.offsetX, event.offsetY)) {
            secondBoxNum;
            firstBoxNum = Math.floor(Math.random() * 2 + 1);
            if(firstBoxNum == 1) {
                secondBoxNum = 2;
            } else {
                secondBoxNum = 1;
            }
            // reset values to default values
            var newBox = randomBoxGenerator(firstBoxNum);
			currentScore = 0;
			level = 1;
			currentSlide = 1;
			canvas.removeEventListener('click', endPanelEventListener);
            drawObservationPanel(currentSlide, newBox, randomBoxGenerator(secondBoxNum)); 
            observationPanelEventListener(newBox);
			
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