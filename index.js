document.addEventListener('contextmenu', function(e){
	e.preventDefault();
});

var width=window.innerWidth;
var height=window.innerHeight;
var inMenu=false;
var menuAudio = new Audio('https://github.com/Pixelsuft/Console-Snake/raw/main/music/menu.wav');
var waiting=document.getElementById('waiting');
var canvas=document.getElementById('canv');
var ctx=canvas.getContext('2d');
var inter;
var toggleColor=false;

function drawMenu(){
	ctx.font="20px Segoe UI";
	ctx.fillStyle="#00ff00";
	ctx.fillText('000000000111001111110111000000000111011111011111000000000',(width/2)-(583/2),20);
	ctx.fillText('011111111111010111110111011111110111011110111111011111111',(width/2)-(583/2),40);
	ctx.fillText('011111111111011011110111011111110111011101111111011111111',(width/2)-(583/2),60);
	ctx.fillText('000000000111011101110111000000000111000000111111000000000',(width/2)-(583/2),80);
	ctx.fillText('111111110111011110110111011111110111011111011111011111111',(width/2)-(583/2),100);
	ctx.fillText('111111110111011111010111011111110111011111101111011111111',(width/2)-(583/2),120);
	ctx.fillText('000000000111011111100111011111110111011111110111000000000',(width/2)-(583/2),140);
	if(toggleColor==false){
		ctx.fillStyle="#000000";
		ctx.fillRect((width/2)-(181/2)-30,((height+160)/2)-30,231,50);
		ctx.fillStyle="#00ff00";
		ctx.fillText('Press Space To Start...',(width/2)-(181/2),((height+160)/2));
		toggleColor=true;
	}
	else{
		ctx.fillStyle="#00ff00";
		ctx.fillRect((width/2)-(181/2),((height+160)/2)-20,185,30);
		ctx.fillStyle="#000000";
		ctx.fillText('Press Space To Start...',(width/2)-(181/2),((height+160)/2));
		toggleColor=false;
	}
}

document.addEventListener('keydown', function(e){
	if(inMenu==false){
		menuAudio.play();
		waiting.remove();
		canvas.width=width;
		canvas.style.width=width+"px";
		canvas.height=height;
		canvas.style.height=height+"px";
		canvas.style.display="block";
		inter=setInterval(drawMenu, 1000);
		inMenu=true;
	}
	else{
		if(e.key==" " || e.code=="Space")
		{
			menuAudio.muted=true;
			clearInterval(inter);
			location.href="game.html";
		}
	}
});
document.body.style.display="block";