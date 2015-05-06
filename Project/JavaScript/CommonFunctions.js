// clear the game canvas
function clearCanvas() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
/*
*   detects if the clicked point is inside the box setted up by the parameters
*   @param box_x x-coordinate of the top left point of the button
*   @param box_y y-coordinate of the top left point of the button
*   @param width width of the box
*   @param height height of the box
*   @param x x-coordinate of the clicked point
*   @param y y-coordinate of the clicked point
*/
function collision(box_x, box_y, width, height, x, y) {
    if (x < box_x || x > box_x + width) {
        return false;
    } else if (y < box_y || y > box_y + height) {
        return false;
    } else {
        return true;
    }    
}
/*
*   determines the function to be preformed once a button is clicked
*   @param box_x x-coordinate of the top left point of the button
*   @param box_y y-coordinate of the top left point of the button
*   @param width width of the box
*   @param height height of the box
*   @param f function to be preformed
*/
function clickButton(box_x, box_y, width, height, f) {
    // variables
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var x;
    var y;
    
    // add action
    canvas.addEventListener('click', function (evt) {
        // position of the mouse click
        x = evt.offsetX;
        y = evt.offsetY;
        
        // clear canvas and preform action
        if (collision(box_x, box_y, width, height, x, y)) {
            clearCanvas();
            f();
			this.removeEventListener('click', arguments.callee);
        }
    }, false);
}

/*
*	plays the audio clip specified by the id of the audio div
*	@param music name of the audio div that is to be played
*/
function playAudio(music){
	var soundclip = document.getElementById(music);
	soundclip.play();
}

//displays the mute sound button
function drawMuteSoundButton() {
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  var width = canvas.width;

  //draws the image on the canvas
  image.onload = function() {
    ctx.drawImage(image, width * 49 / 60, width / 150, width * 0.16, width * 0.16);
  };
  //image source
  image.src = "Images/Mute.png"; 
}

function drawUnmuteSoundButton() {
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  var width = canvas.width;

  //draws the image on the canvas
  image.onload = function() {
    ctx.drawImage(image, width * 49 / 60, width / 150, width * 0.16, width * 0.16);
  };
  //image source
  image.src = "Images/Unmute.png"; 
}

//exclusively for the mute button
function clickToMute(box_x, box_y, width, height, f) {
    // variables
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var x;
    var y;
    
    // add action
    canvas.addEventListener('click', function(evt) {
        // position of the mouse click
        x = evt.offsetX;
        y = evt.offsetY;
        
        // clear canvas and preform action
        if (collision(box_x, box_y, width, height, x, y)) {
            f();
        }
    }, false);
}

//toggle to mute/unmute the sound
function toggleSound() {
    var audio = document.getElementById("background_audio");
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    if(audio.paused) {
      audio.play();
      ctx.clearRect(width * 49 / 60, width / 150, width * 0.16, width * 0.16);
      drawMuteSoundButton();
    } else {
      audio.pause();
      ctx.clearRect(width * 49 / 60, width / 150, width * 0.16, width * 0.16);
      drawUnmuteSoundButton();
    }
}