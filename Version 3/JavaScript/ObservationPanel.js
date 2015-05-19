/**
*   draw the observation panel and add its action listener
*   @param {slideNumber}    the number of slide
*   @param {boxOne}         information for the answer display
*   @param {lifePoint}      life point remained
*   @param {score}          player's current score
*/
function drawObservationPanel(slideNumber, answer, lifePoint, score) {
    clearCanvas();
    drawLifePoint(lifePoint);
    drawCurrentScore(score);
    drawSlideNumber(slideNumber);
    drawBoxes(answer);

    /**
    *   draw the slide number
    *   @param {slideNumber} slide number
    */
    function drawSlideNumber(slideNumber) {
        drawText(0.5, 0.2, 0.1, 'Slide ' + slideNumber, 'black');
    }
    /**
    *   draw the two boxes to be displayed.
    *   @param {answer} answer generated by the rungame function.
    */
    function drawBoxes(answer) {
        if (answer.boxNumber == 1) {
            drawBoxOne(answer);
            drawBoxTwo(randomBoxGenerator());
        }
        else {
            drawBoxOne(randomBoxGenerator());
            drawBoxTwo(answer);
        }
    }
    /**
    *   draw the box one
    *   @param {box} information on the box one
    */
    function drawBoxOne(box) {
        drawText(0.25, 0.4, 0.075, 'Box 1', 'black');
        drawButton(0.25, 0.6, 0.4, 0.3, box.text, box.fontColour, box.boxColour);
    }
    /**
    *   draw the box two
    *   @param {box} information on the box two
    */
    function drawBoxTwo(box) {
        drawText(0.75, 0.4, 0.075, 'Box 2', 'black');
        drawButton(0.75, 0.6, 0.4, 0.3, box.text, box.fontColour, box.boxColour);
    }
}
