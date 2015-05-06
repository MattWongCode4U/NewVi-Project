/*
*   draw observation panel
*   @param slideNumber the number of this slide
*   @return answer the answer to the question to be asked
*/
function drawObservationPanel(slideNumber){
    function randomColorGenerator(max){
    // red, green, blue, black, yellow, purple, cyan, orange, brown
    var colours = ["rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)","rgb(0,0,0)","rgb(255,255,0)"
                ,"rgb(255,0,255)","rgb(0,255,255)","rgb(255,137,0)","rgb(108,50,0)"];
    
    // check if max exceeded the number of colours
    if (max <= colours.length)
        return colours[Math.floor(Math.random() * (max))];
    else
        return colours[Math.floor(Math.random() * (colour.length))];
    }
    /*
    *   generates a random number from 0 - 9 inclusive.
    *   @return random value
    */
    function randomNumberGenerator(){
        return Math.floor(Math.random() * 10);
    }
    /*
    *   returns one of the variables passed in
    *   @param v1 first variable
    *   @param v2 second variable
    *   @return random variable picked
    */
    function randomChoiceGenerator(v1, v2){
        if (Math.floor(Math.random() * (2)) == 0)
            return v1;
        else
            return v2;
    }
    // generate display  
    var box1 = {boxNum: 1, number: randomNumberGenerator(), numberColour: randomColorGenerator(9), backgroundColor: randomColorGenerator(9)};
    var box2 = {boxNum: 2, number: randomNumberGenerator(), numberColour: randomColorGenerator(9), backgroundColor: randomColorGenerator(9)};
	
    // check if the colour of the number and the background are the same
    while (box1.numberColour == box1.backgroundColor)
    {
        box1.numberColour = randomColorGenerator(9);
    }
    while (box2.numberColour == box2.backgroundColor)
    {
        box2.numberColour = randomColorGenerator(9);
    }
    
    // generate answer
    var answer = randomChoiceGenerator(box1, box2);

    // display
	drawLeftBox(box1);
    drawRightBox(box2);
	drawSlideNumber(slideNumber);
	drawBoxNumber();
	
    // clear canvas and return answer after 3 seconds
	setTimeout(function() { answerFrame();
                            return answer;}, 3000);
}

// draws text at top of the canvas
function drawSlideNumber(current){
    // variables
	var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
	var text = "Slide " + current;
    
    // display
	ctx.fillStyle = "black";
	ctx.font = '50px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText(text, width / 4, height / 6);
}

// draw text box numbers
function drawBoxNumber(){
    // variables
	var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    // display
	ctx.fillStyle = "black";
	ctx.font = '40px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText("Box 1" , width / 8, height / 2.1);
	ctx.fillText("Box 2" , width / 1.7, height / 2.1);
}

// draws the left box
function drawLeftBox(box){
    // variables
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    // display background
    ctx.lineWidth = 3; 
    ctx.fillStyle = box.backgroundColor;
    ctx.fillRect(width / 30, height / 2, width / 2.2, height / 2.2);
	
    // display coloured number
    leftFillText(box);
}

// draws the text in the left box
function leftFillText(box){
    // variables
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    // assign colour
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom';
	ctx.fillStyle = box.numberColour;
    ctx.fillText(box.number,width / 4.75,height / 1.25);
}
// draws the right box
function drawRightBox(box){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    // display background
    ctx.lineWidth = 3;
    ctx.fillStyle = box.backgroundColor;
    ctx.fillRect(width / 1.95, height / 2, width / 2.2, height / 2.2);
    
	// display coloured number
    rightFillText(box);
}

// draws the text in the right box
function rightFillText(box){
    // variables
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;

    // assign colour
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom';
	ctx.fillStyle = box.numberColour;
    ctx.fillText(box.number,width / 1.45,height / 1.25);
}
