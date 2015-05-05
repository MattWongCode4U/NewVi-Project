    // Canvas constructor
    function answerFrame() {
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
      // Padding used to adjust position
      var pad = 20;
      //The object to be used to test the user, either 1 or 2
      // Padding used to adjust position 
      var pad = w / 12;
      //The object to be used to test the user, either 1 or 2
      var tag = "Box 1";
      // The question Number to test the user in one round
      var slide = "Slide 1";
      // The correct answers Number value
      var numChoice = 1;
      // The correct answers color value
      var colorChoice = "red";
      var numColorChoice = "black";
      // The font color from the struct;
      var fontsize = w / 3;
      // Setting up fond information and begin the drawing
      ctx.beginPath();
      ctx.font = "bold " + fontsize + "px Aerial ";
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
        ctx.fillStyle = colorChoice;
        ctx.fillRect(w / 2 - w / 3, h / 2 - h / 3 + pad, 2 * w / 3, 2 * h / 3);
      }

      function printBorder() {
        if (colorChoice == "black") {
          ctx.strokeStyle = "white";
        } else {
          ctx.strokeStyle = "black";
        }
        ctx.rect(w / 2 - w / 3, h / 2 - h / 3 + pad, h / 3, h / 3);
        ctx.rect(w / 2, h / 2 - h / 3 + pad, h / 3, h / 3);
        ctx.rect(w / 2 - w / 3, h / 2 + pad, h / 3, h / 3);
        ctx.rect(w / 2, h / 2 + pad, h / 3, h / 3);
        ctx.stroke();
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
        ctx.fillText(tag, w / 2 - pad, h / 8);
        ctx.fillText(slide, w / 2 - pad, h / 5);
      }

      /**
       * Paints the tile and a number,
       * if the tile is the correct one, pass 1 to paint function
       */
      function tile1(answerTile, question) {
        switch (question) {
          case 0:
            if (answerTile == 1) {
              paint(w / 2 - w / 3, h / 2 - h / 3 + pad, w / 3, h / 3, 1);
            } else {
              paint(w / 2 - w / 3, h / 2 - h / 3 + pad, w / 3, h / 3, 0);
            }
            printNum(w / 3 - w / 15, h / 2 - h / 3 + pad + h / 3);
            break;
          case 1:
            if (answerTile == 1) {
              paintNum(w / 3 - w / 15, h / 2 + h / 10, 1);
            } else {
              paintNum(w / 3 - w / 15, h / 2 + h / 10, 0);
            }
            break;
          case 2:
            if (answerTile == 1) {
              writeNum(w / 3 - w / 15, h / 2 + h / 10, 1);
            } else {
              writeNum(w / 3 - w / 15, h / 2 + h / 10, 0);
            }
            break;
        }
      }

      function tile2(answerTile, question) {
        switch (question) {
          case 0:
            if (answerTile == 2) {
              paint((w / 2), (h / 2 - h / 3 + pad), w / 3, h / 3, 1);
            } else {
              paint((w / 2), (h / 2 - h / 3 + pad), w / 3, h / 3, 0);
            }
            printNum(w / 2 + w / 10, h / 2 + h / 10);
            break;
          case 1:
            if (answerTile == 2) {
              paintNum(w / 2 + w / 10, h / 2 + h / 10, 1);
            } else {
              paintNum(w / 2 + w / 10, h / 2 + h / 10, 0);
            }
            break;
          case 2:
            if (answerTile == 2) {
              writeNum(w / 2 + w / 10, h / 2 + h / 10, 1);
            } else {
              writeNum(w / 2 + w / 10, h / 2 + h / 10, 0);
            }
            break;
        }
      }

      function tile3(answerTile, question) {
        switch (question) {
          case 0:
            if (answerTile == 3) {
              paint((w / 2 - w / 3), (h / 2 + pad), w / 3, h / 3, 1);
            } else {
              paint((w / 2 - w / 3), (h / 2 + pad), w / 3, h / 3, 0);
            }
            printNum(w / 2 - w / 3 + w / 10, h / 2 + pad + h / 3);
            break;
          case 1:
            if (answerTile == 3) {
              paintNum(w / 2 - w / 3 + w / 10, h / 2 + pad + h / 3, 1);
            } else {
              paintNum(w / 2 - w / 3 + w / 10, h / 2 + pad + h / 3, 0);
            }
            break;
          case 2:
            if (answerTile == 3) {
              writeNum(w / 2 - w / 3 + w / 10, h / 2 + pad + h / 3, 1);
            } else {
              writeNum(w / 2 - w / 3 + w / 10, h / 2 + pad + h / 3, 0);
            }
        }
      }

      function tile4(answerTile, question) {
        switch (question) {
          case 0:
            if (answerTile == 4) {
              paint((w / 2), (h / 2 + pad), w / 3, h / 3, 1);
            } else {
              paint((w / 2), (h / 2 + pad), w / 3, h / 3, 0);
            }
            printNum(w / 2 + w / 10, h / 2 + pad + h / 3);
            break;
          case 1:
            if (answerTile == 4) {
              paintNum(w / 2 + w / 10, h / 2 + pad + h / 3, 1);
            } else {
              paintNum(w / 2 + w / 10, h / 2 + pad + h / 3, 0);
            }
            break;
          case 2:
            if (answerTile == 4) {
              writeNum(w / 2 + w / 10, h / 2 + pad + h / 3, 1);
            } else {
              writeNum(w / 2 + w / 10, h / 2 + pad + h / 3, 0);
            }
            break;
        }
      }

      function mainThrower(answer, tile) {
        if(answer == tile) {
          return true;
        }
        return false;
      }

      function addAnswerPanelActions(answer) {
        clickButton(w / 2 - w / 3, h / 2 - h / 3 + pad, w / 3, h / 3, function (){mainThrower(answer, 1);});
        clickButton(w / 2, h / 2 - h / 3 + pad, w / 3, h / 3, function (){mainThrower(answer, 2);});
        clickButton(w / 2 - w / 3, h / 2 + pad, w / 3, h / 3, function (){mainThrower(answer, 3);});
        clickButton(w / 2, h / 2  + pad, w / 3, h / 3, function (){mainThrower(answer, 4);});
      }

      /**
       * Construct everything, assign the correct answer tile
       * Reset color array after everything finished constructing
       */
      function drawAnswerPanel(answer, slideNum, score) {
        var question = Math.floor((Math.random() * 3));
        var answerTile = Math.floor((Math.random() * 4) + 1);
        showFillText();
        if (question != 0) {
          printBackground();
        }
        tile1(answerTile, question);
        tile2(answerTile, question);
        tile3(answerTile, question);
        tile4(answerTile, question);
        printBorder();
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
