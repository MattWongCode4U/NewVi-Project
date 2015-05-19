//This is the function init that gets called when the html file is finished loaded.
//The function init does not take in anything in the parameter.
//The purpose of the function is to paint contents in the canvas. Eg Game over and the score.
function init() {
  //Finds the canvas element by id.
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  //Sets the font to be 40px Arial.
  ctx.font = "40px Arial";
  //Variable gradient represents a set of colors and will be used later.
  //In the parameter there are 4 points. x1, y1, x2,y2.
  //They represents the start point and end point of the gradient.
  var gradient = ctx.createLinearGradient(0,0, c.width, 0);
  //Adds the color magenta into the gradient list.
  gradient.addColorStop("0", "magenta");
  //Adds the color blue into the gradient list.
  gradient.addColorStop("0.5", "blue");
  //Adds the color red into the gradient list.
  gradient.addColorStop("1.0", "red");
  //Sets the color style to be of the value of var gradient.
  ctx.fillStyle = gradient;
  //Text stating game over using the filltext command.
  //The parameters x and y represent the coordinates points on the canvas.
  ctx.fillText("Game Over", 45, 50);
  //Resets the font style to be of size 30px and the style of Arial.
  ctx.font = "30px Arial";
  //Var gradient2 is a different set of colors.
  var gradient2 = ctx.createLinearGradient(0,0, c.width, 0);
  //First color.
  gradient2.addColorStop("0", "#EB3349");
  //2nd Color.
  gradient2.addColorStop("1", "#F45C43");
  ctx.fillStyle = gradient2;
  //You lose text using the gradient2 color scheme.
  ctx.fillText("You Lose!", 85, 100);

  //Another var gradient 3 that contains a new set of colors.
  var gradient3 = ctx.createLinearGradient(0,0, c.width, 0);
  //First color in the list.
  gradient3.addColorStop("0", "#4CB8C4");
  //Second color in the list.
  gradient3.addColorStop("1", "#3CD3AD");
  //Sets the global fill style of the canvas to be of the colors in gradient 3.
  ctx.fillStyle = gradient3;
  //Text in the color form of gradient 3
  ctx.fillText("Your Score:9999", 40, 150);
  //Function play again takes in nothing and will draw a play again image.
  function playagain() {
    var play = new Image();
    play.src = 'Images/PlayAgain.png';
      play.onload = function() {
        ctx.drawImage(play, 50, 200);
      }
  }
  //Function quit takes in nothing and will draw a quit image.
  function quit() {
    var quit = new Image();
    //Source of the quit image.
    quit.src = 'Images/Quit.png';
      quit.onload = function() {
        ctx.drawImage(quit, 50, 300);
      }
  }
  //Calls the functions.
  playagain();
  quit();
}
//Calls the init function when everything is done loaded this line is mandatory.
document.addEventListener("DOMContentLoaded", init, false);
/*Testing*/
