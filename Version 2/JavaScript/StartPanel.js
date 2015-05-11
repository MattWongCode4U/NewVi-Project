/*
*   draw the start panel and add its action listeners
*   @param highScore highest score on this machine
*/
function drawStartPanel(highScore) {
    clearCanvas();
    drawTitle();
    drawHighScore(highScore);
    drawStartButton();
}
/*
*   draw the title
*/
function drawTitle() {
    drawText(0.2, 0.5, 0.15, "blue", "NewVi");
}
/*
*   draw high score
*   @param highScore highest score on this machine
*/
function drawHighScore(highScore) {
    drawText(0.4, 0.5, 0.075, "black", "High Score");
    drawText(0.5, 0.5, 0.075, "black", highScore);
}
/*
*   draw start button
*/
function drawStartButton() {
    drawButton(0.8, 0.5, 0.1, "white", "Start", "green", 0.6);
}