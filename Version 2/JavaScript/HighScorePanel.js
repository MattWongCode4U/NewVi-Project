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
    drawText(0.25, 0.5, 0.1, "blue", "Leader Board");
}
function drawHighScoreBoard() {
    for (var i = 1; i <= 5; i++) {
        drawText(0.3 + 0.08 * i, 0.5, 0.06, "black", i + ". ");
    }
}
function drawBackButton() {
    drawButton(0.85, 0.5, 0.075, "white", "Back", "purple", 0.5);
}