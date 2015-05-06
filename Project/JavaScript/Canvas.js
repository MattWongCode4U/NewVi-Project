// resize the canvas according to the window size
function canvasResize() {
    var htmlCanvas = document.getElementById('game');
    var context = htmlCanvas.getContext('2d');

    // Start listening to resize events and
    // draw canvas.
    initialize();
 
    function initialize() {
        // Register an event listener to
        // call the resizeCanvas() function each time 
        // the window is resized.
        window.addEventListener('resize', resizeCanvas, false);
        
        // Draw canvas border for the first time.
        resizeCanvas();
    }
				
    // Display custom canvas.
    // In this case it's a blue, 5 pixel border that 
    // resizes along with the browser window.					
    function redraw() {
        //context.strokeStyle = 'blue';
        //context.lineWidth = '5';
        context.strokeRect(0, 0, window.innerWidth * 9 / 10, window.innerHeight * 9 / 10);
    }
		
    // Runs each time the DOM window resize event fires.
    // Resets the canvas dimensions to match window,
    // then draws the new borders accordingly.
    function resizeCanvas() {
        htmlCanvas.width = window.innerWidth * 9 / 10;
        htmlCanvas.height = window.innerHeight * 9 / 10;
        redraw();
    }
		
}