window.onload = function(){
	var Li1 = document.getElementById('li1');
	li1.onmouseover = function(){
		startMove(Li1,'width',400,function(){
			startMove(Li1,'height',200);
		});
	}
	li1.onmouseout = function(){
		startMove(Li1,'height',100,function(){
			startMove(Li1,'width',200);
		})
	}
}
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}
var alpha = 30;
function startMove(obj,attr,iTarget,fn){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var icur = 0;
			if (attr == 'opacity') {
				icur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else{
				icur = parseInt(getStyle(obj,attr));
			}
			var speed = (iTarget - icur)/8;
			speed = speed > 0?Math.ceil(speed):Math.floor(speed);
			if (icur == iTarget) {
				clearInterval(obj.timer);
				if (fn) {
					fn();
				}
			}
			else{
				if (attr == 'opacity') {
					obj.style.filter = 'alpha(opacity:'+(icur + speed)+')';
					obj.style.opacity = (icur + speed)/100;
				}
				else{
					obj.style[attr] = icur + speed +'px';
				}
				
			}
		},30)
	}