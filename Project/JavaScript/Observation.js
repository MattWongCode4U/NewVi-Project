// array of colours
// red, green, blue, black, yellow, purple, cyan, orange, brown
var colours = ["rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)","rgb(0,0,0)","rgb(255,255,0)"
                ,"rgb(255,0,255)","rgb(0,255,255)","rgb(255,137,0)","rgb(108,50,0)"];

// slide structure
var slide = {boxNum: 0, number: 0, numberColour: "Black", backgroundColor: "Black"};

// left box structure
var box1 = {boxNum: 1, number: 0, numberColour: "Black", backgroundColor: "Black"};

// right box structure
var box2 = {boxNum: 2, number: 0, numberColour: "Black", backgroundColor: "Black"};

// colour of the left box
var leftBoxColour = getRandomColour(colours.length);
// colour of the right box
var rightBoxColour = getRandomColour(colours.length);

// slide number
var slideNumber = 1;

// function chooses a box 1 or box 2, returns 1 or 2
function chooseBox(){
	var choice = Math.floor(Math.random() * 2) + 1;
	
	if(choice == 1){
		slide.boxNum = 1;
	} else {
		slide.boxNum = 2;
	}
}

// function returns a random colour
function getRandomColour(max){
    return colours[Math.floor(Math.random() * (max))];
}

// returns a random number from 0 - 9 inclusive.
function getRandomNumber(){
    return Math.floor(Math.random() * 10);
}

// draws both boxes
function drawObservationPanel(){
    clearCanvas();
	chooseBox();
	drawLeftBox();
    drawRightBox();
	drawSlideNumber(slideNumber);
	drawBoxNumber();
	
	// assigns the slide to the attributes of the chosen box
	if(slide.boxNum == 1){
		slide.number = box1.number;
		slide.numberColour = box1.numberColour;
		slide.backgroundColor = box1.backgroundColor;
	} else {
		slide.number = box2.number;
		slide.numberColour = box2.numberColour;
		slide.backgroundColor = box2.backgroundColor;
	}
	
	return slide;
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

// draw text box numbers
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
    
	// assigns attributes to box1
	box1.backgroundColor = leftBoxColour;
	
    leftFillText();
}

// draws the text in the left box
function leftFillText(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var leftTextColour = getRandomColour(colours.length);
	var leftNumber = getRandomNumber();
    
    // check if the colour of the text is the same as the colour of the box
    while(leftTextColour == leftBoxColour){
        leftTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = leftTextColour;
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom';
	
    ctx.fillText(leftNumber,width / 4.75,height / 1.25);
	
	// assigns attributes to box1
	box1.numberColour = leftTextColour;
	box1.number = leftNumber;
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
    
	// assigns attributes to box2
	box2.backgroundColor = rightBoxColour;
	
    rightFillText();
}

// draws the text in the right box
function rightFillText(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var rightTextColour = getRandomColour(colours.length);
	var rightNumber = getRandomNumber();
    
    // check if the colour of the text is the same as the colour of the box
    while(rightTextColour == rightBoxColour){
        rightTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = rightTextColour;
    ctx.font = '60px arial';
    ctx.fontBaseline = 'bottom';
    ctx.fillText(rightNumber,width / 1.45,height / 1.25);
	
	// assigns attributes to box2
	box2.numberColour = rightTextColour;
	box2.number = rightNumber;
}
