document.addEventListener('contextmenu', function(e){
	e.preventDefault();
});
function get_query_arguments()
{
	var query = location.search.substr(1).split("&");
	var parameters = {};

	for(var i = 0; i < query.length; i++)
	{
		var param = query[i].split("=");
		parameters[param[0]] = decodeURIComponent(param[1]);
	}

	return parameters;
}
var args=get_query_arguments();
document.body.innerHTML="Game Over :(<br>Score: "+args["score"]+".<br>Speed: "+args["speed"]+".<br><br><div id=\"again\">Play Again</div><div id=\"ex\">Exit</div>";
document.getElementById('again').addEventListener('click', function(e){
	location.href="game.html";	
});
document.getElementById('ex').addEventListener('click', function(e){
	location.href="index.html";
});
document.body.style.display="block";