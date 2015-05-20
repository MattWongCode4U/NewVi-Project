/*
* Draws the Acvhiment page
* @Param Takes in a name which represents
* a user and will display their achivements.
*/
function drawAchievement(name) {
  // variables
  clearCanvas();
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "#3CDFEF";
  drawAchievementTitle();
  drawHomeButton();
  /*
  * The title function of the page.
  */
  function drawAchievementTitle() {
      drawText(0.5, 0.3, 0.065, name + '\'s Achievements', 'black');
  }
  /*
  * The home button.
  */
  function drawHomeButton() {
        drawButton(0.5, 0.75, 0.8, 0.15, 'Home', 'white', 'blue');
    }
  }
