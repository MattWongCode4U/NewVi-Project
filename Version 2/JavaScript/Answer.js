function drawAnswerPanel(slideNum, answer_, answerTile, score, life) {
  var answer = document.getElementById("game");
          var ctx = answer.getContext("2d");
          clearCanvas();
      // Constructing canvas
      // width and height of the canvas
      var w = answer.width;
      var h = answer.height;
      // Array of all possible color values used in this game
      var colors = ["rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)","rgb(0,0,0)","rgb(255,255,0)"
                ,"rgb(255,0,255)","rgb(0,255,255)","rgb(255,137,0)","rgb(108,50,0)"];
      var numColors = ["rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)","rgb(0,0,0)","rgb(255,255,0)"
                ,"rgb(255,0,255)","rgb(0,255,255)","rgb(255,137,0)","rgb(108,50,0)"];
      var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      //The object to be used to test the user, either 1 or 2
      ctx.beginPath();
      var tag ="Box " + answer_.boxNumber;
      // The question Number to test the user in one round
      var slide = "Slide " + slideNum;
      // The correct answers Number value
      var numChoice = answer_.text;
      // The correct answers color value
      var colorChoice = answer_.boxColour;
      var numColorChoice = answer_.fontColour;
      // Setting up fond information and begin the drawing
      ctx.lineWidth = 1;
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
              while (numColors[randomVal] == numColorChoice || numColors[randomVal] == colorChoice) {
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
          ctx.strokeRect(x, y, w, h);
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
          ctx.fillText(tag, w / 2, h / 5);
          ctx.fillText(slide, w / 2, h / 3.5);
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
                  printNum(0.25 * w, 0.6 * h);
                  break;
              case 1:
                  if (answerTile == 1) {
                      paintNum(0.25 * w, 0.6 * h, 1);
                  } else {
                      paintNum(0.25 * w, 0.6 * h, 0);
                  }
                  break;
              case 2:
                  if (answerTile == 1) {
                      writeNum(0.25 * w, 0.6 * h, 1);
                  } else {
                      writeNum(0.25 * w, 0.6 * h, 0);
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
                  printNum(0.75 * w, 0.6 * h);
                  break;
              case 1:
                  if (answerTile == 2) {
                      paintNum(0.75 * w, 0.6 * h, 1);
                  } else {
                      paintNum(0.75 * w, 0.6 * h, 0);
                  }
                  break;
              case 2:
                  if (answerTile == 2) {
                      writeNum(0.75 * w, 0.6 * h, 1);
                  } else {
                      writeNum(0.75 * w, 0.6 * h, 0);
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
                  printNum(0.25 * w, 0.9 * h);
                  break;
              case 1:
                  if (answerTile == 3) {
                      paintNum(0.25 * w, 0.9 * h, 1);
                  } else {
                      paintNum(0.25 * w, 0.9 * h, 0);
                  }
                  break;
              case 2:
                  if (answerTile == 3) {
                      writeNum(0.25 * w, 0.9 * h, 1);
                  } else {
                      writeNum(0.25 * w, 0.9 * h, 0);
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
                  printNum(0.75 * w, 0.9 * h);
                  break;
              case 1:
                  if (answerTile == 4) {
                      paintNum(0.75 * w, 0.9 * h, 1);
                  } else {
                      paintNum(0.75 * w, 0.9 * h, 0);
                  }
                  break;
              case 2:
                  if (answerTile == 4) {
                      writeNum(0.75 * w, 0.9 * h, 1);
                  } else {
                      writeNum(0.75 * w, 0.9 * h, 0);
                  }
                  break;
          }
      }

      /**
       * Construct everything, assign the correct answer tile
       * Reset color array after everything finished constructing
       */
      function draw() {
        var question = Math.floor((Math.random() * 3));
        
          showFillText();
          if (question != 0) {
              printBackground();
          }
          tile1(answerTile, question);
          tile2(answerTile, question);
          tile3(answerTile, question);
          tile4(answerTile, question);
          drawHeartLives(life);
          drawScore(score);
      }

      draw(slideNum, answer, answerTile, score);
        /**
       * Frame for testing
       */
      ctx.rect(0, 0, w, h);
      ctx.stroke();
      ctx.closePath();
    }