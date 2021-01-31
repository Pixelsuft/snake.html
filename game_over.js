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
function game_loc(){
	location.href="game.html?grid_size="+args['grid_size']+"&speed="+args['orig_speed']+"&max_speed="+args['max_speed'];
}
document.body.innerHTML="Game Over :(<br>Score: "+args["score"]+".<br>Speed: "+args["speed"]+".<br><br>R - Play Again<br>SPACE - Exit";
document.addEventListener('keydown', function(e){
	if(e.key==" " || e.code=="Space"){
		location.href="/snake.html";
	}
	else if(e.keyCode==82 || e.code=="KeyR"){
		game_loc();	
	}
});
document.addEventListener('click', game_loc);
document.body.style.display="block";
