// draws the start button
function drawStartButton() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "Start";
    var width = canvas.width;
    var height = canvas.height;

    // draw rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(width / 5, height - height / 4, width * 3 / 5, height / 5);
    ctx.fillStyle = "black";
    ctx.strokeRect(width / 5, height - height / 4, width * 3 / 5, height / 5);
    // draw text
    ctx.fillStyle = "white";
    ctx.font = "bold " + width / 10 + "px Arial";
    ctx.fillText(text, width * 4 / 11, height - height / 8);
}
/*
*   display the highest score achieved
*   @param highScore highest score
*/
function drawHighScore(highScore) {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "High Score";
    var width = canvas.width;
    var height = canvas.height;
    
    // draw text
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 10 + "px Arial";
    ctx.fillText(text, width / 4, height - height / 2);
    // draw score
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 10 + "px Arial";
    ctx.fillText(highScore, width * 2 / 5, height - height / 3)
}
// display the title
function drawTitle() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "NewVi";
    var width = canvas.width;
    var height = canvas.height;
    // draw text
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 8 + "px Arial";
    ctx.fillText(text, width / 3, height / 3);
}
//  Add end panel actions
function addStartPanelActions()
{
    // variables
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var width = canvas.width;

    // start button
    clickButton(width / 5, height - height / 4, width * 3 / 5, height / 5, function (){drawObservationPanel();});
    clickToMute(width * 5 / 6, height / 30, width * 2 / 15, height * 7 / 60, function () {toggleSound();});

}
/*
*   draw the start panel
*   @param highScore highest score
*/
function drawStartPanel(highScore) {
    drawTitle();
    drawStartButton();
    drawHighScore(highScore);
    addStartPanelActions();
    drawMuteSoundButton();
}
