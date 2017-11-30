window.onload = function(){
	startMove();
}
function startMove(){
	setInterval(function(){
		var oDiv = document.getElementById('div1');
		oDiv.style.width = parseInt(getStyle(oDiv,'width'))-1+'px';
		oDiv.style.fontSize = parseInt(getStyle(oDiv,'fontSize'))+1+'px';
	},30)
}
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}