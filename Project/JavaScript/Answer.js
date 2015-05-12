    // Canvas constructor
    function answerFrame() {
      // Clear canvas
	  clearCanvas();
	  // Constructing canvas
      var answer = document.getElementById("game");
      var ctx = answer.getContext("2d");
      // width and height of the canvas
      var w = answer.width;
      var h = answer.height;
      // Array of all possible color values used in this game
      var colors = ["red", "yellow", "blue", "black", "purple", "brown", "cyan", "green"];
      var numColors = ["red", "yellow", "blue", "black", "purple", "brown", "cyan", "green"];
      var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
      //The object to be used to test the user, either 1 or 2
      var tag = "Box 1";
      // The question Number to test the user in one round
      var slide = "Slide 1";
      // The correct answers Number value
      var numChoice = 1;
      // The correct answers color value
      var colorChoice = "red";
      var numColorChoice = "black";
      // Setting up fond information and begin the drawing
      ctx.beginPath();
      ctx.font = "bold " + (0.1 * h) + "px Aerial ";
      ctx.textBaseline = "bottom";

      /**
       * prints the number within the a tile
       * @param w The width of the canvas
       * @param h The height of the canvas
       */
      function printNum(w, h) {
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillText(numChoice, w, h);
      }

      function printBackground() {
        ctx.closePath();
        ctx.beginPath();
        if (colorChoice == "black") {
            ctx.strokeStyle = "white";
          } else {
            ctx.strokeStyle = "black";
          }
        ctx.fillStyle = colorChoice;
        ctx.rect((0.25 - 0.4 / 2) * w, (0.6 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h);
        ctx.stroke();
        ctx.fill();
        ctx.rect((0.75 - 0.4 / 2) * w, (0.6 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h);
        ctx.stroke();
        ctx.fill();
        ctx.rect((0.25 - 0.4 / 2) * w, (0.9 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h);
        ctx.stroke();
        ctx.fill();
        ctx.rect((0.75 - 0.4 / 2) * w, (0.9 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h);
        ctx.stroke();
        ctx.fill();
      }

      /**
       * Get a random number range from 0 to the max index of colors array
       */
      function getRandom() {
        return Math.floor(Math.random() * (colors.length));
      }

      function getRandomNum() {
        return Math.floor(Math.random() * (numbers.length));
      }

      function getRandomNumColor() {
        return Math.floor(Math.random() * (numColors.length));
      }

      /**
       * Get the correct answers location within the color array
       */
      function getAnswerIndex() {
        for (var i = 0; i < colors.length; i++) {
          if (colors[i] == colorChoice) {
            return i;
          }
        }
      }

      function getNumberIndex() {
        for (var i = 0; i < numbers.length; i++) {
          if (numbers[i] == numChoice) {
            return i;
          }
        }
      }

      function getNumberColorIndex() {
        for (var i = 0; i < numColors.length; i++) {
          if (numColors[i] == numColorChoice) {
            return i;
          }
        }
      }

      function writeNum(x, y, answer) {
        var randomVal = getRandomNum();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = numColorChoice;
        if (answer == 1) {
          ctx.fillText(numChoice, x, y);
          numbers.splice(getNumberIndex(), 1);
        } else if (answer == 0) {
          while (numbers[randomVal] == numChoice) {
            randomVal = getRandomNum();
          }
          ctx.fillText(numbers[randomVal], x, y);
          numbers.splice(randomVal, 1);
        }
      }

      function paintNum(x, y, answer) {
        var randomVal = getRandomNumColor();
        ctx.closePath();
        ctx.beginPath();
        if (answer == 1) {
          ctx.fillStyle = numColorChoice;
          ctx.fillText(numChoice, x, y);
          numColors.splice(getNumberColorIndex(), 1);
        } else if (answer == 0) {
          while (numColors[randomVal] == numColorChoice
              || numColors[randomVal] == colorChoice) {
            randomVal = getRandomNumColor();
          }
          ctx.fillStyle = numColors[randomVal];
          ctx.fillText(numChoice, x, y);
          numColors.splice(randomVal, 1);
        }
      }
      /**
       * Paint the tile with a random color and remove the color from the array
       * @param answer If this tile contains the correct answer
       */
      function paint(x, y, w, h, answer) {
        // Receive the random color value
        var randomVal = getRandom();
        ctx.closePath();
        ctx.beginPath();
        //If this is the tile for the right answer, paint the color of choice(red in this case)
        if (colorChoice == "black") {
            ctx.strokeStyle = "white";
          } else {
            ctx.strokeStyle = "black";
          }
        ctx.strokeRect(x,y,w,h);
        if (answer == 1) {
          ctx.fillStyle = colorChoice;
          ctx.fillRect(x, y, w, h);
          //Get the red's location within the array and remove it.
          colors.splice(getAnswerIndex(), 1);
        } else if (answer == 0) {
          // Else find a random color value and paint the tile
          while (colors[randomVal] == colorChoice) {
            randomVal = getRandom();
          }
          ctx.fillStyle = colors[randomVal];
          ctx.fillRect(x, y, w, h);
          colors.splice(randomVal, 1);
        }
      }

      /**
       * Prints the tag and slide
       */
      function showFillText() {
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillText(tag, w / 2.5, h / 5);
        ctx.fillText(slide, w / 2.8, h / 3.5);
        ctx.closePath();
        ctx.beginPath();
        ctx.font = "bold " + (0.15 * h) + "px Aerial ";
      }

      /**
       * Paints the tile and a number,
       * if the tile is the correct one, pass 1 to paint function
       */
      function tile1(answerTile, question) {
        switch (question) {
          case 0:
            if (answerTile == 1) {
              paint((0.25 - 0.4 / 2) * w, (0.6 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h, 1);
            } else {
              paint((0.25 - 0.4 / 2) * w, (0.6 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h, 0);
            }
            printNum(0.22 * w, 0.6 * h);
            break;
          case 1:
            if (answerTile == 1) {
              paintNum(0.22 * w, 0.6 * h, 1);
            } else {
              paintNum(0.22 * w, 0.6 * h, 0);
            }
            break;
          case 2:
            if (answerTile == 1) {
              writeNum(0.22 * w, 0.6 * h, 1);
            } else {
              writeNum(0.22 * w, 0.6 * h, 0);
            }
            break;
        }
      }

      function tile2(answerTile, question) {
        switch (question) {
          case 0:
            if (answerTile == 2) {
              paint((0.75 - 0.4 / 2) * w, (0.6 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h, 1);
            } else {
              paint((0.75 - 0.4 / 2) * w, (0.6 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h, 0);
            }
            printNum(0.72 * w, 0.6 * h);
            break;
          case 1:
            if (answerTile == 2) {
              paintNum(0.72 * w, 0.6 * h, 1);
            } else {
              paintNum(0.72 * w, 0.6 * h, 0);
            }
            break;
          case 2:
            if (answerTile == 2) {
              writeNum(0.72 * w, 0.6 * h, 1);
            } else {
              writeNum(0.72 * w, 0.6 * h, 0);
            }
            break;
        }
      }

      function tile3(answerTile, question) {
        switch (question) {
          case 0:
            if (answerTile == 3) {
              paint((0.25 - 0.4 / 2) * w, (0.9 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h, 1);
            } else {
              paint((0.25 - 0.4 / 2) * w, (0.9 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h, 0);
            }
            printNum(0.22 * w, 0.9 * h);
            break;
          case 1:
            if (answerTile == 3) {
              paintNum(0.22 * w, 0.9 * h, 1);
            } else {
              paintNum(0.22 * w, 0.9 * h, 0);
            }
            break;
          case 2:
            if (answerTile == 3) {
              writeNum(0.22 * w, 0.9 * h, 1);
            } else {
              writeNum(0.22 * w, 0.9 * h, 0);
            }
        }
      }

      function tile4(answerTile, question) {
        switch (question) {
          case 0:
            if (answerTile == 4) {
              paint((0.75 - 0.4 / 2) * w, (0.9 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h, 1);
            } else {
              paint((0.75 - 0.4 / 2) * w, (0.9 - 0.2) * h, 0.4 * w, (0.2 + 0.05) * h, 0);
            }
            printNum(0.72 * w, 0.9 * h);
            break;
          case 1:
            if (answerTile == 4) {
              paintNum(0.72 * w, 0.9 * h, 1);
            } else {
              paintNum(0.72 * w, 0.9 * h, 0);
            }
            break;
          case 2:
            if (answerTile == 4) {
              writeNum(0.72 * w, 0.9 * h, 1);
            } else {
              writeNum(0.72 * w, 0.9 * h, 0);
            }
            break;
        }
      }

      function mainThrower(answer, tile) {
        if(answer == tile) {
          playAudio('success');
		  drawObservationPanel(2);
          return true;
        } else {
          playAudio('fail');
		  clearCanvas();
		  drawEndPanel(1000, 9000);
          return false;
        }
      }

      function addAnswerPanelActions(answer) {
        clickButton(w / 2 - w / 3, h / 2 - h / 3 + pad, w / 3, h / 3, function (){mainThrower(answer, 1);});
        clickButton(w / 2, h / 2 - h / 3 + pad, w / 3, h / 3, function (){mainThrower(answer, 2);});
        clickButton(w / 2 - w / 3, h / 2 + pad, w / 3, h / 3, function (){mainThrower(answer, 3);});
        clickButton(w / 2, h / 2  + pad, w / 3, h / 3, function (){mainThrower(answer, 4);});
      }

      function drawTimer() {
        ctx.closePath();
        ctx.beginPath();
        var width = w;
        var counter = 5;
        var start = 5;
        ctx.font = "bold 20px Arial";
        ctx.fillText(start, width/30, width/12);
        var loop = setInterval(
        function() {
            if(counter != 1) {
                counter--;
                ctx.clearRect(5, 5, width/6, width * 2/15);
                ctx.fillText(counter, width/30, width/12);
            } else if (counter == 1) {
                ctx.clearRect(5, 5, width/6, width * 2/15);
                return false;
            }
        }, 1000);

}

      /**
       * Construct everything, assign the correct answer tile
       * Reset color array after everything finished constructing
       */
      function drawAnswerPanel (slideNum, answer, score) {
        var question = Math.floor((Math.random() * 3));
        var answerTile = Math.floor((Math.random() * 4) + 1);
        /**colorCoice = answer.backgroundColor;
        numChoice = answer.number;
        numColorChoice = answer.numberColor;
        tag = answer.boxNum;
        slide = slideNum;
        */
        showFillText();
        if (question != 0) {
          printBackground();
        }
        tile1(answerTile, question);
        tile2(answerTile, question);
        tile3(answerTile, question);
        tile4(answerTile, question);
        //drawTimer();
        colors = ["red", "yellow", "blue", "black", "purple", "brown", "cyan", "green"];
        numColors = ["red", "yellow", "blue", "black", "purple", "brown", "cyan", "green"];
        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        addAnswerPanelActions(answerTile);
      }
      drawAnswerPanel();
      /**
       * Frame for testing
       */
      ctx.rect(0, 0, w, h);
      ctx.stroke();
      ctx.closePath();
    }
