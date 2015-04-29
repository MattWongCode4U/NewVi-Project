// array of colours
// red, green, blue, black, yellow, purple, cyan, orange, brown
var colours = ["rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)","rgb(0,0,0)","rgb(255,255,0)"
                ,"rgb(255,0,255)","rgb(0,255,255)","rgb(255,137,0)","rgb(108,50,0)"];

// colour of the left box
var leftBoxColour = getRandomColour(colours.length);
// colour of the right box
var rightBoxColour = getRandomColour(colours.length);

// function returns a random colour
function getRandomColour(max){
    return colours[Math.floor(Math.random() * (max))];
}

// draws both boxes
function drawScreen(){
    drawLeftBox();
    drawRightBox();
}

// draws the left box
function drawLeftBox(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    ctx.moveTo(50,100);
    ctx.lineTo(50, 250);
    ctx.lineTo(250,250);
    ctx.lineTo(250, 100);
    ctx.closePath();
    ctx.fillStyle = leftBoxColour;
    ctx.fill();
    ctx.stroke();
    
    leftFillText();
}

// draws the text in the left box
function leftFillText(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var leftTextColour = getRandomColour(colours.length);
    
    // check if the colour of the text is the same as the colour of the box
    while(leftTextColour == leftBoxColour){
        leftTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = leftTextColour;
    ctx.font = '60px san-serif';
    ctx.fontBaseline = 'bottom'
    ctx.fillText('2',130,180);
}

// draws the right box
function drawRightBox(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    ctx.moveTo(300,100);
    ctx.lineTo(300, 250);
    ctx.lineTo(550,250);
    ctx.lineTo(550, 100);
    ctx.closePath();
    ctx.fillStyle = rightBoxColour;
    ctx.fill();
    ctx.stroke();
    
    rightFillText();
}

// draws the text in the right box
function rightFillText(){
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var rightTextColour = getRandomColour(colours.length);
    
    // check if the colour of the text is the same as the colour of the box
    while(rightTextColour == rightBoxColour){
        rightTextColour = getRandomColour(colours.length);
    }
    
    ctx.fillStyle = rightTextColour;
    ctx.font = '60px san-serif';
    ctx.fontBaseline = 'bottom'
    ctx.fillText('5',400,180);
}
