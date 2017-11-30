window.onload = function(){
	var aLi = document.getElementsByTagName('li');
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].timer = null;
		aLi[i].onmouseover = function(){
			startMove(this,400);
		}
		aLi[i].onmouseout = function(){
			startMove(this,200);
		}
	}

	var oDiv = document.getElementsByTagName('div');
	for (var i = 0; i < oDiv.length; i++) {
		oDiv[i].alpha = 30;
		oDiv[i].onmouseover = function(){
			startMove2(this,100);
		}
		oDiv[i].onmouseout = function(){
			startMove2(this,30);
		}
	}
}
	// var alpha = 30;
	function startMove2(obj,iTarget){
		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var speed = 0;
			if (obj.alpha > iTarget) {
				speed = -10;
			}
			else{
				speed = 10;
			}
			if (obj.alpha == iTarget) {
				clearInterval(obj.timer);
			}
			else{
				obj.alpha+=speed;
				obj.style.filter = 'alpha(opacity:'+obj.alpha+')';
				obj.style.opacity =obj.alpha/100;
			}
		},30)
	}
	function startMove(obj,iTarget){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var speed = (iTarget - obj.offsetWidth)/8;
			speed = speed > 0?Math.ceil(speed):Math.floor(speed);
			if (obj.offsetWidth == iTarget) {
				clearInterval(obj.timer);
			}
			else{
				obj.style.width = obj.offsetWidth + speed +'px';
			}
		},30)
	}
