var canvas, ctx;
var width=window.innerWidth;
var height=window.innerHeight;
var xx = 5;
var inter;
window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.width=width;
	canvas.style.width=width+"px";
	canvas.height=height;
	canvas.style.height=height+"px";
	canvas.style.display="block";
	ctx = canvas.getContext("2d");

	document.addEventListener("keydown", keyDownEvent);
	inter=setInterval(draw, 1000 / xx);
};
var gridSize = (tileSize = 20);
var nextX = 1;
var nextY = 0;
var score=0;
var defaultTailSize = 3;
var tailSize = defaultTailSize;
var snakeTrail = [];
var snakeX = (snakeY = 10);

var appleX = (appleY = 15);

function gameOver(){
	location.href="game_over.html?score="+score+"&speed="+xx;
}

function draw() {
	snakeX += nextX;
	snakeY += nextY;
	if (snakeX < 0) {
		gameOver();
	}
	if (snakeX > width/gridSize-1) {
		gameOver();
	}

	if (snakeY < 0) {
		gameOver();
	}
	if (snakeY > height/gridSize-1) {
		gameOver();
	}
	if (snakeX == appleX && snakeY == appleY) {
	  tailSize++;

	  appleX = Math.floor(Math.random() * width/gridSize);
	  appleY = Math.floor(Math.random() * height/gridSize);
	  score+=1;
	  if(Math.floor(Math.random()*10)>5 && xx<20)
	  {
		  xx+=1;
		  clearInterval(inter);
		  inter=setInterval(draw, 1000 / xx);
	  }
	}
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < snakeTrail.length; i++) {
	if(i==snakeTrail.length-1)ctx.fillStyle = "#ff0000";
	else ctx.fillStyle = "#00ff00";
	  ctx.fillRect(
		snakeTrail[i].x * tileSize,
		snakeTrail[i].y * tileSize,
		tileSize,
		tileSize
	  );
	  if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
		gameOver();
	  }
	}
	ctx.fillStyle="rgb(0,128,255)";
	ctx.font="20px Segoe Script";
	ctx.fillText("Score: "+score, 5, 18);
	ctx.fillStyle = "red";
	ctx.fillRect(appleX * tileSize, appleY * tileSize, tileSize, tileSize);
	snakeTrail.push({ x: snakeX, y: snakeY });
	while (snakeTrail.length > tailSize) {
	  snakeTrail.shift();
	}
}

// input
function keyDownEvent(e) {
	switch (e.keyCode) {
	  case 37:
		if(nextX!==1){
			nextX = -1;
			nextY = 0;
		}
		break;
	  case 38:
		if(nextY!==1){
			nextX = 0;
			nextY = -1;
		}
		break;
	  case 39:
		if(nextX!==-1){
			nextX = 1;
			nextY = 0;
		}
		break;
	  case 40:
		if(nextY!==-1){
			nextX = 0;
			nextY = 1;
		}
		break;
	}
}