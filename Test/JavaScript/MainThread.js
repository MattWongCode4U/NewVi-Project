function runGame() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    var currentScore = 0;
    var highScore = 0;
   
    drawStartPanel(highScore);
    ctx.clearRect(0, 0, 300, 300);
    drawObservationPanel();
    ctx.clearRect(0, 0, 300, 300);
    drawAnswerPanel();
    ctx.clearRect(0, 0, 300, 300);
    drawEndPanel();
}