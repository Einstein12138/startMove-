window.onload = function(){
	var oDiv = document.getElementById('div1');
	var timer = null;
	oDiv.onmouseover = function(){
		startMove(0);
	}
	oDiv.onmouseout = function(){
		startMove(-200);
	}

	function startMove(iTarget){
		clearInterval(timer);
		timer = setInterval(function(){
			var speed = (iTarget-oDiv.offsetLeft)/20;
			speed = speed > 0?Math.ceil(speed):Math.floor(speed);
			if (oDiv.offsetLeft == iTarget) {
				clearInterval(timer);
			}
			else{
				oDiv.style.left = oDiv.offsetLeft+speed+'px';
			}		
		},30)
	}
}



