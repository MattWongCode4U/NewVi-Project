// variables
var score;

// draws the start button
function startButton() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "Start";
    var width = canvas.width;
    
    // draw rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(width / 5, width - width / 4, width * 3 / 5, width / 5);
    ctx.fillStyle = "black";
    ctx.strokeRect(width / 5, width - width / 4, width * 3 / 5, width / 5);
    // draw text
    ctx.fillStyle = "white";
    ctx.font = "bold " + width / 10 + "px Arial";
    ctx.fillText(text, width * 4 / 11, width - width / 8);
}
// display the highest score achieved
function score() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "High Score";
    var width = canvas.width;
    // draw text
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 10 + "px Arial";
    ctx.fillText(text, width / 4, width - width / 2);
    // draw score
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 10 + "px Arial";
    // ctx.fillText(score, width / 4, width - width / 3)
}
// display the title
function title() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "NewVi";
    var width = canvas.width;
    // draw text
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 8 + "px Arial";
    ctx.fillText(text, width / 3, width / 3);
}
// draw the start panel
function drawStart() {
    title();
    startButton();
    score();
} 