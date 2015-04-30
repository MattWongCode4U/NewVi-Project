var score = 0;
var Highscore =0;
var xpos;
var ypos;
// draw "Game Over" and the scores
function drawText() {
    //variables
    var c = document.getElementById("game");
    var ctx = c.getContext("2d");
    var width = c.width;
    var gradient = ctx.createLinearGradient(0,0, c.width, 0);
    var gradient2 = ctx.createLinearGradient(0,0, c.width, 0);
    var gradient3 = ctx.createLinearGradient(0,0, c.width, 0);

    // gradient and game over text
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.fillStyle = gradient;
    ctx.font = "bold " + width / 10 + "px Arial";
    ctx.fillText("Game Over", width / 4, width / 6);

    // gradient2 and score
    gradient2.addColorStop("0", "#EB3349");
    gradient2.addColorStop("1", "#F45C43");
    ctx.fillStyle = gradient2;
    ctx.font = "bold " + width / 15 + "px Arial";
    ctx.fillText("Your Score: " + "" + score, width / 4, width / 3);

    // gradient3 and high score
    gradient3.addColorStop("0", "#4CB8C4");
    gradient3.addColorStop("1", "#3CD3AD");
    ctx.fillStyle = gradient3;
    ctx.fillText("High Score: " + "" + Highscore, width / 4, width * 3 / 7);
}

function drawRestartButton() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "Restart";
    var width = canvas.width;

    // draw rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(width / 5, width - width / 2, width * 3 / 5, width / 5);
    ctx.fillStyle = "black";
    ctx.strokeRect(width / 5, width - width / 2, width * 3 / 5, width / 5);
    // draw text
    ctx.fillStyle = "white";
    ctx.font = "bold " + width / 12 + "px Arial";
    ctx.fillText(text, width * 6 / 17, width * 5 / 8);
}

function drawEndGameButton() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "End Game";
    var width = canvas.width;

    // draw rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(width / 5, width - width / 4, width * 3 / 5, width / 5);
    ctx.fillStyle = "black";
    ctx.strokeRect(width / 5, width - width / 4, width * 3 / 5, width / 5);
    // draw text
    ctx.fillStyle = "white";
    ctx.font = "bold " + width / 12 + "px Arial";
    ctx.fillText(text, width * 3 / 11, width - width / 8);
}
function drawButtons() {
    drawRestartButton();
    drawEndGameButton();
}
function drawEndPanel(s_score, h_score) {
    score = s_score;
    Highscore = h_score;
    drawText();
    drawButtons();
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');

    canvas.addEventListener('click', function(evt) {
      var mousePos = getMousePos(canvas, evt);
      if(xpos > canvas.width / 1.5 && ypos > canvas.height / 2) {
        var message = 'Mouse position: ' + xpos + ',' + ypos;
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawObservationPanel();
      }
    }, false);

}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  xpos = evt.clientX - rect.left;
  ypos = evt.clientY - rect.top;
}
