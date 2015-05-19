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