/*
*   Print a text on the "game" canvas 
*   @param lineNumber the line number ratio (0 - 1) of the text on the canvas
*   @param colNumber the centred column number ratio (0 - 1) of the text on the canvas
*   @param fontSize the font size of the text relative to the canvas size (0 - 1)
*   @param fontColour the colour of the text
*   @param text text to be displayed
*/
function drawText(lineNumber, colNumber, fontSize, fontColour, text) {
    // variables 
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    
    // draw text
    ctx.fillStyle = fontColour;
    ctx.font = "bold " + (fontSize * height) + "px Arial";
    ctx.textAlign = 'center';
    ctx.fillText(text, colNumber * width, lineNumber * height);
}
/*
*   Print a button on the "game" canvas 
*   @param lineNumber the line number ratio (0 - 1) of the text on the canvas
*   @param colNumber the centred column number ratio (0 - 1) of the text on the canvas
*   @param fontSize the font size of the text relative to the canvas size (0 - 1)
*   @param fontColour the colour of the text
*   @param text text to be displayed
*   @param boxColour color of the button
*   @param widthRatio the width of the button to the width of the canvas (0 - 1)
*/
function drawButton(lineNumber, colNumber, fontSize, fontColour, text, boxColour, widthRatio) {
    // variables 
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    
    // draw centred rectangular button
    ctx.textAlign = 'center';
    ctx.fillStyle = boxColour;
    ctx.fillRect((colNumber - widthRatio / 2) * width, (lineNumber - fontSize) * height, widthRatio * width, (fontSize + 0.05) * height);
    ctx.fillStyle = "black";
    ctx.strokeRect((colNumber - widthRatio / 2) * width, (lineNumber - fontSize) * height, widthRatio * width, (fontSize + 0.05) * height);
    
    // draw text in the button
    drawText(lineNumber, colNumber, fontSize, fontColour, text);
}
/*
* clear the game canvas
*/
function clearCanvas() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
/*
*   detects if the clicked point is inside the box setted up by the parameters
*   @param box_x x-coordinate of the top left point of the button
*   @param box_y y-coordinate of the top left point of the button
*   @param width width of the box
*   @param height height of the box
*   @param x x-coordinate of the clicked point
*   @param y y-coordinate of the clicked point
*/
function collision(box_x, box_y, width, height, x, y) {
    if (x < box_x || x > box_x + width) {
        return false;
    } else if (y < box_y || y > box_y + height) {
        return false;
    } else {
        return true;
    }    
}
/*
*   add event listener
*   @param lineNumber the line number ratio (0 - 1) of the text on the canvas
*   @param colNumber the centred column number ratio (0 - 1) of the text on the canvas
*   @param fontSize the font size of the text relative to the canvas size (0 - 1)
*   @param widthRatio the width of the button to the width of the canvas (0 - 1)
*   @param x x coordinate of the point clicked
*   @param y y coordinate of the point clicked
*/
function eventListener(lineNumber, colNumber, fontSize, widthRatio, x, y)
{
    // variables
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var width = canvas.width;
	var height = canvas.height;
    
    // return true if collided false otherwise
    return collision((colNumber - (widthRatio / 2)) * width, (lineNumber - fontSize) * height, widthRatio * width, (fontSize + 0.05) * height, x, y);
}
/*
*   generates a random colour from the colours array
*   @return random color
*/
function randomColourGenerator(max){
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
*   generates random box information and return it
*   @boxNumber the box number (1 or 2)
*   @return random box information
*/
function randomBoxGenerator(boxNumber) {
    // variables
    var random = {boxNumber: 0, fontColour: 0, text: 0, boxColour: 0};
    // assign random information to random
    random.boxNumber = boxNumber;
    random.fontColour = randomColourGenerator(9);
    random.text = randomNumberGenerator();
    do {
        random.boxColour = randomColourGenerator(9);
    } while(random.fontColour ==  random.boxColour)
    // return box information
    return random;
}

function drawHeartLives() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var image = new Image();
    var text = ": ";
  
    ctx.fillStyle = "black";
    ctx.font = "bold " + width * 7 / 120 + "px Arial";
    ctx.fillText(text, width * 2 / 15, width * 0.075);
    
    image.onload = function() {
        ctx.drawImage(image, width / 60, width / 60, width * 0.1, width * 0.1);
    };
    image.src = "Images/heart3.png";
}

function drawScore() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var text = "Score:";

    ctx.fillStyle = 'black';
    ctx.font = "bold " + width * 7 / 120 + "px Arial";
    ctx.fillText(text, width * 0.75, width / 12);
}

function playAudio(music){
    var soundclip = document.getElementById(music);
    soundclip.play();
}

/*
*
*/
function drawTextInput(text) {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    //var bar = true;
    //var test = setInterval(function() {
        ctx.clearRect(0, 0.3 * canvas.height, canvas.width, canvas.height * 0.15);    
      //  if (bar)
        //{
          //  drawText(0.4, 0.5, 0.1, "black", text + "|");
            //bar = false;
   //     }
     //   else {
            drawText(0.4, 0.5, 0.1, "black", text + " ");
       //     bar = true;
       // }    
    //}, 700);
}