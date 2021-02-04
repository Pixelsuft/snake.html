var canvas, ctx;
var width=0;
var height=0;
var xx = 5;
var max_xx = 40;
var inter;
var god = false;
function reloadSize(){
	width=window.innerWidth;
	height=window.innerHeight;
	canvas.width=width;
	canvas.style.width=width+"px";
	canvas.height=height;
	canvas.style.height=height+"px";
	canvas.style.display="block";	
}
window.onload = function() {
	canvas = document.getElementById("canvas");
	if(args["speed"]!==undefined){
		xx =  parseInt(args["speed"]);
	}
	if(args["max_speed"]!==undefined){
		max_xx = parseInt(args["max_speed"]);
	}

	reloadSize();
	ctx = canvas.getContext("2d");
	window.addEventListener("resize", reloadSize);
	document.addEventListener('contextmenu', function(e){
		e.preventDefault();
	});
	document.addEventListener("keydown", keyDownEvent);
	inter=setInterval(draw, 1000 / xx);
};
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
var args = get_query_arguments();
var gamed_over=false;
var gridSize = (tileSize = 20);
if(args["grid_size"]!==undefined){
	gridSize = (tileSize = parseInt(args["grid_size"]));
}
if(args["god"]=="true"){
	god = true;
}
var nextX = 1;
var nextY = 0;
var next1X = 1;
var next1Y = 0;
var score=0;
var defaultTailSize = 3;
if(args["tail_size"]!==undefined){
	defaultTailSize = parseInt(args["tail_size"]);
}
score = defaultTailSize - 3;
var tailSize = defaultTailSize;
var snakeTrail = [];
var snakeX = (snakeY = 10);

var appleX = (appleY = 15);

function gameOver(){
	if(gamed_over==false){
		gamed_over=true;
		clearInterval(inter);
		location.href="game_over.html?score="+score+"&speed="+xx+"&grid_size="+args['grid_size']+"&orig_speed="+args['speed']+"&max_speed="+args['max_speed'];
	}
}

function draw() {
	snakeX += next1X;
	snakeY += next1Y;
	nextX = next1X;
	nextY = next1Y;
	if (snakeX < 0 && god == false) {
		gameOver();
	}
	if (snakeX > (width/gridSize)+1 && god == false) {
		gameOver();
	}

	if (snakeY < 0 && god == false) {
		gameOver();
	}
	if (snakeY > (height/gridSize)+1 && god == false) {
		gameOver();
	}
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "red";
	ctx.fillRect(appleX * tileSize, appleY * tileSize, tileSize, tileSize);
	for (var i = 0; i < snakeTrail.length; i++) {
	if(i==snakeTrail.length-1)ctx.fillStyle = "#ff0000";
	else ctx.fillStyle = "#00ff00";
	  ctx.fillRect(
		snakeTrail[i].x * tileSize,
		snakeTrail[i].y * tileSize,
		tileSize,
		tileSize
	  );
	  if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY && god == false) {
		gameOver();
	  }
	}
	ctx.fillStyle="rgb(0,128,255)";
	ctx.font="20px Segoe Script";
	ctx.fillText("Score: "+score, 5, 18);
	snakeTrail.push({ x: snakeX, y: snakeY });
	while (snakeTrail.length > tailSize) {
	  snakeTrail.shift();
	}
	if (snakeX == appleX && snakeY == appleY) {
	  tailSize++;

	  appleX = Math.floor(Math.random() * width/gridSize);
	  appleY = Math.floor(Math.random() * height/gridSize);
	  score+=1;
	  if(Math.floor(Math.random()*10)>3 && xx<max_xx)
	  {
		  xx+=1;
		  clearInterval(inter);
		  inter=setInterval(draw, 1000 / xx);
	  }
	}
}
function keyDownEvent(e) {
	switch (e.keyCode) {
	  case 37:
		if(nextX!==1){
			next1X = -1;
			next1Y = 0;
		}
		break;
	  case 38:
		if(nextY!==1){
			next1X = 0;
			next1Y = -1;
		}
		break;
	  case 39:
		if(nextX!==-1){
			next1X = 1;
			next1Y = 0;
		}
		break;
	  case 40:
		if(nextY!==-1){
			next1X = 0;
			next1Y = 1;
		}
		break;
	}
}
