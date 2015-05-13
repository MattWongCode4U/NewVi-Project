/*
*   draw the answer panel and add its action listener
*   @slideNumber the number of slide
*   @box box to be displayed
*/
function drawAnswerPanel(slideNumber, box) {
    clearCanvas();
    drawSlideNumber(slideNumber);
    drawBoxNumber(box.boxNumber);
    drawChoices(box);
}
/*
*   draw the box number (1 or 2)
*   @boxNumber the number of the box
*/
function drawBoxNumber(boxNumber) {
    drawText(0.3, 0.5, 0.1, "black", "Box " + boxNumber);
}
/*
*   draw the 4 choices
*   @box the right answer box
*/
function drawChoices(box) {
    // variables
    var question = Math.floor(Math.random() * 3);
    var answer = Math.floor(Math.random() * 4);
    var choiceOne, choiceTwo, choiceThree, choiceFour;
    
    // assign the right answer to a random choiceFour
    if (answer == 0) {
        choiceOne = box;
        choiceTwo = randomBoxGenerator();
        choiceThree = randomBoxGenerator();
        choiceFour = randomBoxGenerator();
    }
    else if (answer == 1) {
        choiceOne = randomBoxGenerator();
        choiceTwo = box;
        choiceThree = randomBoxGenerator();
        choiceFour = randomBoxGenerator();
    }
    else if (answer == 2) {
        choiceOne = randomBoxGenerator();
        choiceTwo = randomBoxGenerator();
        choiceThree = box;
        choiceFour = randomBoxGenerator();
    }
    else {
        choiceOne = randomBoxGenerator();
        choiceTwo = randomBoxGenerator();
        choiceThree = randomBoxGenerator();
        choiceFour = box;
    }
    // draw the boxes
    drawChoiceOne(choiceOne);
    drawChoiceTwo(choiceTwo);
    drawChoiceThree(choiceThree);
    drawChoiceFour(choiceFour);
}
/*
*   draw box one
*   @box box to be drew
*/
function drawChoiceOne(box) {
    drawButton(0.6, 0.25, 0.2, box.fontColour, box.text, box.boxColour, 0.4);
}
/*
*   draw box two
*   @box box to be drew
*/
function drawChoiceTwo(box) {
    drawButton(0.6, 0.75, 0.2, box.fontColour, box.text, box.boxColour, 0.4);
}
/*
*   draw box three
*   @box box to be drew
*/
function drawChoiceThree(box) {
    drawButton(0.9, 0.25, 0.2, box.fontColour, box.text, box.boxColour, 0.4);
}
/*
*   draw box four
*   @box box to be drew
*/
function drawChoiceFour(box) {
    drawButton(0.9, 0.75, 0.2, box.fontColour, box.text, box.boxColour, 0.4);
}
