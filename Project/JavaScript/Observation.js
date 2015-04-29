// array of colours
// red, green, blue, black, yellow, purple, cyan, orange, brown
var colours = ["rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)","rgb(0,0,0)","rgb(255,255,0)"
                ,"rgb(255,0,255)","rgb(0,255,255)","rgb(255,137,0)","rgb(108,50,0)"];

// colour of the left box
var leftBoxColour = getRandomColour(colours.length);
// colour of the right box
var rightBoxColour = getRandomColour(colours.length);

// slide number
var slideNumber = 1;

// function returns a random colour
function getRandomColour(max){
    return colours[Math.floor(Math.random() * (max))];
}

// returns a random number from 0 - 9 inclusive.
function getRandomNumber(){
    return Math.floor(Math.random() * 10);
}

// draws both boxes
function drawScreen(){
    drawLeftBox();
    drawRightBox();
	drawSlideNumber(slideNumber);
	drawBoxNumber();
}

// draws text at top of the canvas
function drawSlideNumber(current){
	var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
	var text = "Slide " + current;
	ctx.fillStyle = "black";
	ctx.font = '50px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText(text, width / 4, height / 6);
	current ++;
}

function drawBoxNumber(){
	var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
	ctx.fillStyle = "black";
	ctx.font = '40px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText("Box 1" , width / 8, height / 2.1);
	ctx.fillText("Box 2" , width / 1.7, height / 2.1);
}

// draws the left box
function drawLeftBox(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    ctx.lineWidth = 3;
    
    ctx.fillStyle = leftBoxColour;
    ctx.fillRect(width / 30, height / 2, width / 2.2, height / 2.2);
    
    leftFillText();
}

// draws the text in the left box
function leftFillText(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var leftTextColour = getRandomColour(colours.length);
    
    // check if the colour of the text is the same as the colour of the box
    while(leftTextColour == leftBoxColour){
        leftTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = leftTextColour;
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText(getRandomNumber(),width / 4.75,height / 1.25);
}

// draws the right box
function drawRightBox(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    ctx.lineWidth = 3;
    
    ctx.fillStyle = rightBoxColour;
    ctx.fillRect(width / 1.95, height / 2, width / 2.2, height / 2.2);
    
    rightFillText();
}

// draws the text in the right box
function rightFillText(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var rightTextColour = getRandomColour(colours.length);
    
    // check if the colour of the text is the same as the colour of the box
    while(rightTextColour == rightBoxColour){
        rightTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = rightTextColour;
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom'
    ctx.fillText(getRandomNumber(),width / 1.45,height / 1.25);
}
