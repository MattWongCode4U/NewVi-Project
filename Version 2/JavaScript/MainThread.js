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
    var life = 3;
	var playerName = "Player";
    
    drawStartPanel(playerName);
	canvas.addEventListener('click', muteButtonEventListener);
    canvas.addEventListener('click', startPanelEventListener);
    
    /*
    *   the start button on-click action
    */
    function startPanelEventListener(event) {
		// player name
        if (eventListener(0.45, 0.5, 0.1, 1, event.offsetX, event.offsetY)) {
            drawKeyboardPanel();
            canvas.removeEventListener('click', startPanelEventListener);
            canvas.addEventListener('click', keyboardPanelEventListener);
			drawTextInput(playerName);
        }
		// start
		else if (eventListener(0.8, 0.5, 0.1, 0.6, event.offsetX, event.offsetY)) {
            firstBoxNum = Math.floor(Math.random() * 2 + 1);
            answerArray.push(randomBoxGenerator(firstBoxNum));
            if(firstBoxNum == 2) {
                secondBoxNum = 1;
                drawObservationPanel(currentSlide, randomBoxGenerator(secondBoxNum), answerArray[0]);
            } else if(firstBoxNum == 1) {
                secondBoxNum = 2;
                drawObservationPanel(currentSlide, answerArray[0], randomBoxGenerator(secondBoxNum));
            }
            // remove start button and draw the observation panel and its action listener
            canvas.removeEventListener('click', startPanelEventListener);
			canvas.removeEventListener('click', muteButtonEventListener);
            observationPanelEventListener(answerArray[0]);
        }
		// highscore
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
            drawStartPanel(playerName);
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
        var audio = document.getElementById("background_audio");
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
                audio.pause();
                if(audio.paused) { 
                   playAudio('success');
                    setTimeout(function() {
                        audio.play();
                    }, 3000);
                }
                currentScore += 200;
            } else {
<<<<<<< HEAD
                audio.pause();
                if(audio.paused) {
                    playAudio('fail');
                    setTimeout(function() {
                        audio.play();
                    }, 4000);
                }                
=======
                playAudio('fail');
                life -= 1;
            } 
            if(life != 0) {
            firstBoxNum = Math.floor(Math.random() * 2 + 1);
            var newBox = randomBoxGenerator(firstBoxNum);
            answerArray[0] = newBox;
            if(firstBoxNum == 2) {
                secondBoxNum = 1;
                drawObservationPanel(currentSlide, randomBoxGenerator(secondBoxNum), answerArray[0]);
            } else if(firstBoxNum == 1) {
                secondBoxNum = 2;
                drawObservationPanel(currentSlide, answerArray[0], randomBoxGenerator(secondBoxNum));
>>>>>>> origin/master
            }
            observationPanelEventListener(newBox);
        } else {
            drawEndPanel(currentScore, highScore);
            canvas.addEventListener('click', endPanelEventListener);
        }} 
    } 
    /*
    *
    */
    function endPanelEventListener(event) {
		// post highscore to database
        life = 3;
		postHighscore(playerName, currentScore);
		
		// restart
        if (eventListener(0.7, 0.5, 0.1, 0.6, event.offsetX, event.offsetY)) {
            firstBoxNum = Math.floor(Math.random() * 2 + 1);
            var newBox = randomBoxGenerator(firstBoxNum);
            answerArray[0] = newBox;
            if(firstBoxNum == 2) {
                secondBoxNum = 1;
                drawObservationPanel(currentSlide, randomBoxGenerator(secondBoxNum), answerArray[0]);
            } else if(firstBoxNum == 1) {
                secondBoxNum = 2;
                drawObservationPanel(currentSlide, answerArray[0], randomBoxGenerator(secondBoxNum));
            }
            // reset values to default values
			currentScore = 0;
			level = 1;
			currentSlide = 1;
			canvas.removeEventListener('click', endPanelEventListener);
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
            drawStartPanel(playerName); 
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
	
	/*
	* 
	*/
	function keyboardPanelEventListener(event) {
        var text = drawTextInput("");
		clearInterval(text);
        if (eventListener(0.65, 0.05, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "Q";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.65, 0.15, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "W";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.65, 0.25, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "E";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.65, 0.35, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "R";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.65, 0.45, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "T";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.65, 0.55, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "Y";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.65, 0.65, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "U";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.65, 0.75, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "I";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.65, 0.85, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "O";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.65, 0.95, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "P";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.75, 0.05, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "A";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.75, 0.15, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "S";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.75, 0.25, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "D";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.75, 0.35, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "F";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.75, 0.45, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "G";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.75, 0.55, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "H";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.75, 0.65, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "J";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.75, 0.75, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "K";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.75, 0.85, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "L";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.85, 0.05, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "Z";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.85, 0.15, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "X";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.85, 0.25, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "C";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.85, 0.35, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "V";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.85, 0.45, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "B";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.85, 0.55, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "N";
            text = drawTextInput(playerName);
        }
        else if (eventListener(0.85, 0.65, 0.045, 0.09, event.offsetX, event.offsetY)) {
            playerName = playerName + "M";
            text = drawTextInput(playerName);
        }
		// enter key - gets out of name typing
		else if (eventListener(0.85, 0.85, 0.045, 0.29, event.offsetX, event.offsetY)) {
			drawStartPanel(playerName);
			canvas.removeEventListener('click', keyboardPanelEventListener);
			canvas.addEventListener('click', startPanelEventListener);
		}
		else if (eventListener(0.95, 0.5, 0.045, 0.99, event.offsetX, event.offsetY)) {
			playerName = playerName + " ";
			text = drawTextInput(playerName);
		}
        else if (eventListener(0.75, 0.95, 0.045, 0.09, event.offsetX, event.offsetY)) {
            if(playerName.length >= 1) {
                playerName = playerName.substring(0, playerName.length - 1);
            }
            text = drawTextInput(playerName);
        }
		else {
			text = drawTextInput(playerName);
		}
    }
	
	/*
	* 
	*/
	function postHighscore(pName, currScore) {
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/newvi/collections/leaderboards?apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
			data: JSON.stringify( { "name" : pName, "highscore" : currScore}),
			type: "POST",
			contentType: "application/json"
				
		});
	}
}