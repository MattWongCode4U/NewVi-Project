//variables
var canvas = document.getElementById("game");
var ctx;
var startLink = false;
var soundLink = false;

// display the highest score achieved
function score() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "High Score";
    var width = canvas.width;
    // draw text
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 10 + "px serif";
    ctx.fillText(text, width / 4, width - width / 2);
    // draw score
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 10 + "px serif";
    //ctx.fillText(score, width / 4, width - width / 3)
}

// display the title
function title() {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var text = "NewVi";
    var width = canvas.width;
    // draw text
    ctx.fillStyle = "black";
    ctx.font = "bold " + width / 8 + "px serif";
    ctx.fillText(text, width / 3, width / 3);
}

//diplays the start button
function startButton(){
  canvas = document.getElementById("game");
  var width = canvas.width;
  var text = 'Start';
  var fontsize = width / 15;

  // check if supported
  if(canvas.getContext){

    ctx=canvas.getContext("2d");
 
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // draw rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(width / 5, width - width / 4, width * 3 / 5, width / 5);
    ctx.fillStyle = "black";
    ctx.strokeRect(width / 5, width - width / 4, width * 3 / 5, width / 5);

    //draw the link
    ctx.font= fontsize + 'px Arial';
    ctx.fillStyle = "white";
    ctx.fillText(text, width * 127 / 300, width * 131 / 150);
 
    //add mouse listeners
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", click_to_start, false);
 
  }
}

//displays the sound button
function soundButton() {
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");
  var image = new Image();
  var width = canvas.width;

  //draws the image on the canvas
  image.onload = function() {
    ctx.drawImage(image, width * 49 / 60, width / 150);
  };
  //image source
  image.src = "Images/Unmute.png";

  //add mouse listeners
  canvas.addEventListener("mousemove", on_mousemove, false);
  canvas.addEventListener("click", toggleSound, false);
}
 
//check if the mouse is over the link and change cursor style
function on_mousemove (ev) {
  var x, y;
  canvas = document.getElementById("game");
  var width = canvas.width;

  //variables for start button mouseover position
  var startX = width / 5; //60
  var startY = width * 0.95; //28
  var startWidth = width / 5 * 3; //180
  var startHeight = width / 5; //60

  //variables for sound button mouseover position
  var soundX = width * 49/60; //245
  var soundY =  width * 3/20; //45
  var soundWidth = width * 3/20; //45
  var soundHeight = width * 2/15; // 40 

  // Get the mouse position relative to the canvas element.
  if(ev.offsetX) {
      x = ev.offsetX;
      y = ev.offsetY;

  } else if(ev.layerX) {
        x = ev.layerX;
        y = ev.layerY;
    }

  //mouseover position for start button
  if(x >= startX && x <= (startX + startWidth) &&
     y <= startY && y>= (startY-startHeight)){
      document.body.style.cursor = "pointer";
      startLink=true;

  //mouseover position for sound button
  } else if (x >= soundX && x <= (soundX + soundWidth) &&
     y <= soundY && y>= (soundY - soundHeight)) {
      document.body.style.cursor = "pointer";
      soundLink=true;
  }
  else{
      document.body.style.cursor = "";
      startLink=false;
      soundLink=false;
  }
}
 
//clears and repaints the canvas to the next panel
function click_to_start(e) {
  if (startLink)  {
   //clears the canvas
   clearCanvas();
   //draws the question page UI
   drawObservationPanel();
  }
}

//toggle to mute/unmute the sound
function toggleSound(e) {
  var audio = document.getElementById("background_audio");
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");
  var width = canvas.width;
  var image1 = new Image();
  var image2 = new Image();
  if(soundLink) {
    if(audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

// draw the start panel
function drawAll() {
    soundButton();
    startButton();
    score();
    title();
} 