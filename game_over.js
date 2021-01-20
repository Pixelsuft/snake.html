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
document.body.innerHTML="Game Over :(<br>Score: "+args["score"]+".<br>Speed: "+args["speed"]+".<br><br>R - Play Again<br>SPACE - Exit";
document.addEventListener('keydown', function(e){
	if(e.key==" " || e.code=="Space"){
		location.href="";
	}
	else if(e.keyCode==82 || e.code=="KeyR"){
		location.href="game.html";		
	}
});
document.body.style.display="block";
