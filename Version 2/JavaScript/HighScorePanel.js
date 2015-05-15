/*
*   draw the high score panel
*/
function drawHighScorePanel() {
    clearCanvas();
    drawHighScoreText();
    drawHighScoreBoard();
    drawBackButton();
}
function drawHighScoreText() {
    drawText(0.25, 0.5, 0.1, "blue", "Leaderboard");
}
function drawHighScoreBoard() {
    for (var i = 1; i <= 5; i++) {
        drawText(0.3 + 0.08 * i, 0.5, 0.06, "black", i + ". ");
    }
}
function drawBackButton() {
    drawButton(0.85, 0.5, 0.075, "white", "Back", "purple", 0.5);
}

function drawHighScoreBoard() {
	r = new XMLHttpRequest();

	r.open("GET", "https://api.mongolab.com/api/1/databases/newvi/collections/leaderboards?s={%22highscore%22:-1}&l=9&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO", true);
	r.onreadystatechange=function(){
		if(r.readyState == 4){
			var message = JSON.parse(r.responseText);
			
			for (var i = 1; i <= 5; i++) {
				drawText(0.3 + 0.08 * i, 0.5, 0.06, "black", i + ". " + message[i-1].name + " " + message[i-1].highscore);
			}
		};
	}
	r.send(null);
	
}