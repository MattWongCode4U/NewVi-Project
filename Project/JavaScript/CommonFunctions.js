// clear the game canvas
function clearCanvas() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    // clear canvas
    ctx.clearRect(0, 0, ctx.width, ctx.height);
}