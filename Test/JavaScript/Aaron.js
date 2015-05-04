//variables
var canvas = document.getElementById("game");
var ctx;
var linkText= "Start";
var inLink = false;

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

function startButton(){
  canvas = document.getElementById("game");
  var width = canvas.width;
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
    ctx.fillText(linkText, width * 127 / 300, width * 131 / 150);
 
    //add mouse listeners
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);
 
  }
}

function soundButton() {
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");
  var image = new Image();
  var width = canvas.width;
  image.onload = function() {
    ctx.drawImage(image, width * 49 / 60, width / 150);
  };
  image.src = "Images/unmute.png";

  //add mouse listeners
  canvas.addEventListener("mousemove", on_mousemove, false);
  canvas.addEventListener("click", toggleSound, false);
}
 
//check if the mouse is over the link and change cursor style
function on_mousemove (ev) {
  var x, y;
  canvas = document.getElementById("game");
  var width = canvas.width;

  //variables for start mouseover position
  var startX = width / 5; //60
  var startY = width * 0.95; //28
  var startWidth = width / 5 * 3; //180
  var startHeight = width / 5; //60

  //variables for start mouseover position
  var soundX = width * 49/60; //245
  var soundY =  width * 3/20; //45
  var soundWidth = width * 3/20; //45
  var soundHeight = width * 2/15; // 40 

  // Get the mouse position relative to the canvas element.
    if(ev.offsetX) {
        x = ev.offsetX;
        y = ev.offsetY;
    }
    else if(ev.layerX) {
        X = ev.layerX;
        y = ev.layerY;
    }

  //mouseover position for start button
  if(x >= startX && x <= (startX + startWidth) &&
     y<=startY && y>= (startY-startHeight)){
      document.body.style.cursor = "pointer";
      inLink=true;

  //mouseover position for mute/unmute button
  } else if (x >= soundX && x <= (soundX + soundWidth) &&
     y<=soundY && y>= (soundY-soundHeight)) {
    document.body.style.cursor = "pointer";
    inLink=true;
  }
  else{
      document.body.style.cursor = "";
      inLink=false;
  }
}
 
//clears and repaints the canvas to the next panel
function on_click(e) {
  if (inLink)  {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawObservationPanel();
  }
}

//toggle to mute/unmute the sound
function toggleSound(e) {
  var audio = document.getElementById("background_audio");
  if(inLink) {
    if(audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

// draw the start panel
function draw() {
    soundButton();
    startButton();
    score();
    title();
} 