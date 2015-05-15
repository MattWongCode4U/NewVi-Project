function drawKeyboardPanel() {
    clearCanvas();
    drawNumberRow();
    drawFirstRow();
    drawSecondRow();
    drawThirdRow();
    drawEnter();
    drawDelete();
    drawSpaceBar();
}
function drawNumberRow() {
    drawButton(0.55, 0.05, 0.045, "black", "1", "white", 0.09);
    drawButton(0.55, 0.15, 0.045, "black", "2", "white", 0.09);
    drawButton(0.55, 0.25, 0.045, "black", "3", "white", 0.09);
    drawButton(0.55, 0.35, 0.045, "black", "4", "white", 0.09);
    drawButton(0.55, 0.45, 0.045, "black", "5", "white", 0.09);
    drawButton(0.55, 0.55, 0.045, "black", "6", "white", 0.09);
    drawButton(0.55, 0.65, 0.045, "black", "7", "white", 0.09);
    drawButton(0.55, 0.75, 0.045, "black", "8", "white", 0.09);
    drawButton(0.55, 0.85, 0.045, "black", "9", "white", 0.09);
    drawButton(0.55, 0.95, 0.045, "black", "0", "white", 0.09);
}
function drawFirstRow() {
    drawButton(0.65, 0.05, 0.045, "black", "Q", "white", 0.09);
    drawButton(0.65, 0.15, 0.045, "black", "W", "white", 0.09);
    drawButton(0.65, 0.25, 0.045, "black", "E", "white", 0.09);
    drawButton(0.65, 0.35, 0.045, "black", "R", "white", 0.09);
    drawButton(0.65, 0.45, 0.045, "black", "T", "white", 0.09);
    drawButton(0.65, 0.55, 0.045, "black", "Y", "white", 0.09);
    drawButton(0.65, 0.65, 0.045, "black", "U", "white", 0.09);
    drawButton(0.65, 0.75, 0.045, "black", "I", "white", 0.09);
    drawButton(0.65, 0.85, 0.045, "black", "O", "white", 0.09);
    drawButton(0.65, 0.95, 0.045, "black", "P", "white", 0.09);
}
function drawSecondRow() {
    drawButton(0.75, 0.05, 0.045, "black", "A", "white", 0.09);
    drawButton(0.75, 0.15, 0.045, "black", "S", "white", 0.09);
    drawButton(0.75, 0.25, 0.045, "black", "D", "white", 0.09);
    drawButton(0.75, 0.35, 0.045, "black", "F", "white", 0.09);
    drawButton(0.75, 0.45, 0.045, "black", "G", "white", 0.09);
    drawButton(0.75, 0.55, 0.045, "black", "H", "white", 0.09);
    drawButton(0.75, 0.65, 0.045, "black", "J", "white", 0.09);
    drawButton(0.75, 0.75, 0.045, "black", "K", "white", 0.09);
    drawButton(0.75, 0.85, 0.045, "black", "L", "white", 0.09);
}
function drawThirdRow() {
    drawButton(0.85, 0.05, 0.045, "black", "Z", "white", 0.09);
    drawButton(0.85, 0.15, 0.045, "black", "X", "white", 0.09);
    drawButton(0.85, 0.25, 0.045, "black", "C", "white", 0.09);
    drawButton(0.85, 0.35, 0.045, "black", "V", "white", 0.09);
    drawButton(0.85, 0.45, 0.045, "black", "B", "white", 0.09);
    drawButton(0.85, 0.55, 0.045, "black", "N", "white", 0.09);
    drawButton(0.85, 0.65, 0.045, "black", "M", "white", 0.09);
}
function drawEnter() {
    drawButton(0.85, 0.85, 0.045, "black", "Enter", "white", 0.29);
}
function drawDelete() {
    drawButton(0.75, 0.95, 0.045, "black", "<", "white", 0.09);
}
function drawSpaceBar() {
    drawButton(0.95, 0.5, 0.045, "black", "Space Bar", "white", 0.99);
}
