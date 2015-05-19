/*
*   draw the start panel and add its action listeners
*   @param highScore highest score on this machine
*/
function drawStartPanel(playerName) {
    clearCanvas();
    drawTitle();
    drawHighScoreButton();
    drawStartButton();
	  drawUnmuteSoundButton();
	  drawPlayerName(playerName);
}
/*
*   draw the title
*/
function drawTitle() {
    drawText(0.3, 0.5, 0.15, "blue", "NewVi");
}
/*
*   draw high score
*   @param highScore highest score on this machine
*/
function drawHighScoreButton() {
    drawButton(0.6, 0.5, 0.075, "white", "High Score", "green", 0.6);
}
/*
*   draw start button
*/
function drawStartButton() {
    drawButton(0.8, 0.5, 0.1, "white", "Start", "red", 0.6);
}

//displays the mute sound button
function drawMuteSoundButton() {
	var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
	var image = new Image();
	var width = canvas.width;
	var height = canvas.height;
	
	//draws the image on the canvas
	image.onload = function() {
	ctx.drawImage(image, width * 49 / 60, height / 150, width * 0.16, height * 0.16);
	};
	//image source
	image.src = "Images/Mute.png"; 
}

//displays the unmute sound button
function drawUnmuteSoundButton() {
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var image = new Image();
  var width = canvas.width;
  var height = canvas.height;

  //draws the image on the canvas
  image.onload = function() {
    ctx.drawImage(image, width * 49 / 60, height / 150, width * 0.16, height * 0.16);
  };
  //image source
  image.src = "Images/Unmute2.png"; 
}

//toggle to mute/unmute the sound
function toggleSound() {
    var audio = document.getElementById("background_audio");
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    audio.volume = 0.5;

    if(audio.paused) {
		  audio.play();
		  ctx.clearRect(width * 49 / 60, width / 150, width * 0.16, width * 0.16);
		  drawUnmuteSoundButton();
    } else {
		  audio.pause();
		  ctx.clearRect(width * 49 / 60, width / 150, width * 0.16, width * 0.16);
		  drawMuteSoundButton();
    }
}

function drawPlayerName(playerName) {
    drawText(0.45, 0.5, 0.08, "black", playerName);
}
