//variables
var canvas = document.getElementById("game");
var ctx;
var linkText= "Start";
var inLink = false;
 
function draw(){
  canvas = document.getElementById("game");
  var width = canvas.width;
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
    ctx.font='20px sans-serif';
    ctx.fillStyle = "white";
    ctx.fillText(linkText, 127, 262);
    //linkWidth = ctx.measureText(linkText).width;
 
    //add mouse listeners
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);
 
  }
}
 
//check if the mouse is over the link and change cursor style
function on_mousemove (ev) {
  var x, y;
  canvas = document.getElementById("game");
  var width = canvas.width;
  var linkX = width / 5; //60
  var linkY = width * 0.95; //285
  var linkHeight = width / 9 * 2.1; //70
  var linkWidth = width / 5 * 3; //180
  // Get the mouse position relative to the canvas element.
  if (ev.layerX || ev.layerX) { //for firefox
    x = ev.layerX;
    y = ev.layerY;
  }
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
 
  //is the mouse over the link?
  if(x >= linkX && x <= (linkX + linkWidth) &&
     y<=linkY && y>= (linkY-linkHeight)){
      document.body.style.cursor = "pointer";
      inLink=true;
  }
  else{
      document.body.style.cursor = "";
      inLink=false;
  }
}
 
//if the link has been clicked, go to link
function on_click(e) {
  if (inLink)  {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawObservationPanel();
  }
}

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
// draw the start panel
function drawStart() {
    draw();
    score();
    title();
} 