/*
*   draw the end panel and add its action listener
*   @c_score current score
*   @h_score high score
*/
function drawEndPanel(c_score, h_score) {
    clearCanvas();
    drawGameOver(c_score, h_score);
    drawRestartButton();
    drawEndGameButton();
}
/*
*   draw "Game Over", current score and high score
*   @c_score current score
*   @h_score high score
*/
function drawGameOver(c_score, h_score) {
    drawText(0.2, 0.5, 0.1, "blue", "Game Over");
    drawText(0.4, 0.5, 0.08, "black", "Your Score: " + c_score);
    drawText(0.5, 0.5, 0.08, "black", "High Score: " + h_score);
}
/*
*   draw restart button
*/
function drawRestartButton() {
    drawButton(0.7, 0.5, 0.1, "white", "Restart", "green", 0.6);
}
/*
*   draw end game button
*/
function drawEndGameButton() {
    drawButton(0.9, 0.5, 0.1, "white", "End Game", "red", 0.6);
}