// clear the game canvas
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
    if (x < box_x || x > box_x + width)
        return false;
    else if (y < box_y || y > box_y + height)
        return false;
    else
        return true;
}
/*
*
*
*
*
*/
function clickButton(box_x, box_y, width, height, function f) {
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var width = canvas.width;
    var x;
    var y;
    
    canvas.addEventListener('click', function(evt) {
      
        x = evt.offsetX;
        y = evt.offsetY;
        
        if (collision(box_x, box_y, width, height, x, y)) {
            clearCanvas();
            f();
        }
    }, false);
}