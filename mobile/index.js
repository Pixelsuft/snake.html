document.addEventListener('contextmenu', function(e){
	e.preventDefault();
});

var width=window.innerWidth;
var height=window.innerHeight;
var inMenu=false;
var menuAudio = new Audio('menu.wav');
var waiting=document.getElementById('waiting');
var canvas=document.getElementById('canv');
var ctx=canvas.getContext('2d');
var inter;
var toggleColor=false;
document.getElementById('loh').addEventListener('click', function(){
	alert('Коля лох!!!');
});
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
		ctx.fillRect((width/2)-(112/2)-30,((height+160)/2)-30,231,50);
		ctx.fillStyle="#00ff00";
		ctx.fillText('Tap To Start...',(width/2)-(112/2),((height+160)/2));
		toggleColor=true;
	}
	else{
		ctx.fillStyle="#00ff00";
		ctx.fillRect((width/2)-(112/2),((height+160)/2)-20,113,30);
		ctx.fillStyle="#000000";
		ctx.fillText('Tap To Start...',(width/2)-(112/2),((height+160)/2));
		toggleColor=false;
	}
}
function kdf(e){
	if(inMenu==true){
		menuAudio.muted=true;
		clearInterval(inter);
		location.href="game.html?grid_size="+document.getElementById('grid').value+"&speed="+document.getElementById('speed').value+"&max_speed="+document.getElementById('max_speed').value;
	}
}
function cf(e){
	if(inMenu==false){
		inMenu=true;
		menuAudio.play();
		waiting.style.display="none";
		canvas.width=width;
		canvas.style.width=width+"px";
		canvas.height=height;
		canvas.style.height=height+"px";
		canvas.style.display="block";
		drawMenu();
		inter=setInterval(drawMenu, 1000);
		setTimeout(function(){
			document.addEventListener('click', kdf);
		}, 2000);
	}
}
document.getElementById('tapper').addEventListener('click', cf);
document.body.style.display="block";