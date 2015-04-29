function answerFrame() {
    var answer = document.getElementById("game");
    var ctx = answer.getContext("2d");
    var w = answer.width;
    var h = answer.height;
    var colors = ["red", "yellow", "blue", "black", "purple"
                ,"brown", "cyan", "orange"];
    var pad = 20;
    var tag = "Box 1";
    var slide = "Slide 1";
    var choice = 1;
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.font = "bold 20px Aerial ";
    ctx.textBaseline = "bottom";
      
    function showFillText() {
        ctx.strokeText(tag, w/2 - pad, h/8);
        ctx.strokeText(slide, w/2 - pad, h/5);
    }

    function choice1() {
        ctx.rect(w/2 - w/3, h/2 - h/3 + pad, w/3, h/3);
        ctx.stroke();
        ctx.strokeText(choice, w/2 - w/4 + pad, h/2 - pad); 
    }

    function choice2() {
        ctx.rect((w/2), (h/2 - h/3 + pad), w/3, h/3);
        ctx.stroke();
        ctx.strokeText(choice, w/2 + w/4 - pad - pad/4, h/2 - pad); 
    }

    function choice3() {
        ctx.rect((w/2 - w/3), (h/2 + pad), w/3, h/3);
        ctx.stroke();
        ctx.strokeText(choice, w/2 - w/4 + pad, h/2 + h/4 + pad/4); 
    }

    function choice4() {
        ctx.rect((w/2), (h/2 + pad), w/3, h/3);
        ctx.stroke();
        ctx.strokeText(choice, w/2 + w/4 - pad - pad/4, h/2 + h/4 + pad/4); 
    }

    function assemble() {
        showFillText();
        choice1();
        choice2();
        choice3();
        choice4();
    }	

    assemble();
    
    ctx.rect(0,0,w,h);
    ctx.stroke();
}