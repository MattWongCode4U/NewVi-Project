/**
*   store the player name and the score into database
*   @param {pName}      player name
*   @param {currScore}  player's score
*/
function postHighscore(pName, score) {
    $.ajax({
        url: "https://api.mongolab.com/api/1/databases/newvi/collections/leaderboards?apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
        data: JSON.stringify( { "name" : pName, "highscore" : score}),
        type: "POST",
        contentType: "application/json"          
    });
}

/**
*	post name and achievements to the achievement database
*	@param {pName}			player name 
*	@param {achievement1}	boolean for achievment1 received or not
*	@param {achievement2}	boolean for achievment2 received or not
*	@param {achievement3}	boolean for achievment3 received or not
*/
function postAchievement(pName, achievement1, achievement2, achievement3) {
	$.ajax({
		url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
		data: JSON.stringify( { "name" : pName, "achievement1" : achievement1, "achievement2": achievement2, "achievement3": achievement3}),
		type: "POST",
		contentType: "application/json"
			
	});
}

/**
*	searches achievement table for a name as the key
*	@param {pName}	player name that is being searched for
*/
function searchAchievementTable(pName) {
	r = new XMLHttpRequest();
	r.open("GET", "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO", true);
	r.onreadystatechange=function(){
		if(r.readyState == 4){
			var obj = JSON.parse(r.responseText);
			
			var i = null;
			for(i = 0; i < obj.length; i++){
				if(obj[i].name == pName){
					drawText(0.3, 0.5, 0.06, pName + "Achievement1: " + obj[i].achievement1 + "Achievement2: " + obj[i].achievement2 + "Achievement3" + obj[i].achievement3, "black");
				}
			}
			
		};
	}
	r.send(null);
}