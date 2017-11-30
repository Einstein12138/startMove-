window.onload = function(){
	var oMove = document.getElementById('move');
	var aList = oMove.getElementsByTagName('a');
	for(var i=0;i<aList.length;i++){
		aList[i].onmouseenter = function(){
			var _this = this.getElementsByTagName('i')[0];
			startMove(_this,{top:-25,opacity:0},function(){
				_this.style.top = 25 +'px';
				startMove(_this,{top:20,opacity:100});
			});
		}
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
function startMove(obj,json,fn){
	
	clearInterval(obj.timer);

	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){
			// 1.取当前的值
			var iCur = 0;
			if(attr == 'opacity'){
				iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else{
				iCur = parseInt(getStyle(obj,attr));
			}
			// 2.算速度
			var iSpeed = (json[attr]-iCur)/8;
			iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

			// 3.检测停止
			if(iCur != json[attr])
			{
				flag = false;
			}

			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:'+(iCur + iSpeed)+')';
				obj.style.opacity = (iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
			
		}

		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		}

	},15)
}