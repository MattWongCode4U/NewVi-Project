/*
*   draw the observation panel and add its action listener
*   @slideNumber the number of slide
*   @boxOne information for the box one display
*   @boxTwo information for the box two display
*/
function drawObservationPanel(slideNumber, boxOne, boxTwo) {
    clearCanvas();
    drawSlideNumber(slideNumber);
    drawBoxOne(boxOne);
    drawBoxTwo(boxTwo);
    drawCircleTimer();
}
/*
*   draw the slide number
*   @param slideNumber slide number
*/
function drawSlideNumber(slideNumber) {
    drawText(0.2, 0.5, 0.1, "black", "Slide " + slideNumber);
}
/*
*   draw the box one
*   @param boxOne information on the box one
*/
function drawBoxOne(boxOne) {
    drawText(0.4, 0.25, 0.05, "black", "Box 1");
    drawButton(0.7, 0.25, 0.2, boxOne.fontColour, boxOne.text, boxOne.boxColour, 0.4)
}
/*
*   draw the box two
*   @param boxTwo information on the box two
*/
function drawBoxTwo(boxTwo) {
    drawText(0.4, 0.75, 0.05, "black", "Box 2");
    drawButton(0.7, 0.75, 0.2, boxTwo.fontColour, boxTwo.text, boxTwo.boxColour, 0.4)
}

function drawCircleTimer() {
    var canvas  = document.getElementById('game');
    var ctx = canvas.getContext("2d");
    var sec = 240;
    var countdown = sec;
    var width = canvas.width;

    ctx.lineWidth = 8;
    ctx.strokeStyle = "#528f20";
    
    var startAngle = 0; 
    var time = 0;
    var intv = setInterval(function(){

    ctx.clearRect(width / 60, width / 60, width * 0.2, width * 0.2);
    var endAngle = (Math.PI * time * 2 / sec);
    ctx.save();
    ctx.translate(-(width / 60), width * 0.25);
    ctx.rotate(270 * Math.PI / 180);
    ctx.arc(width * 2/15, width * 2/15, width / 12, startAngle , endAngle, false);   
    startAngle = endAngle;
    ctx.stroke();
    ctx.restore();
        
    countdown--;
        
    if (++time > sec,countdown == 0 ) { clearInterval(intv);}
                                   
    }, 10);   
}