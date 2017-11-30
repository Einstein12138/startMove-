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
			var speed = 0;
			if (oDiv.offsetLeft > iTarget) {
				speed =-10;
			}
			else{
				speed = 10;
			}
			if (oDiv.offsetLeft == iTarget) {
				clearInterval(timer);
			}
			else{
				oDiv.style.left = oDiv.offsetLeft+speed+'px';
			}			
		},30)
	}
}



