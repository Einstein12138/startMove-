$(function(){
	$('#move a').mouseenter(function(){
		$(this).find('i').animate({top:"-25px",opacity:"0"},300,function(){
			$(this).css({top:"30px"});
			$(this).animate({top:"20px",opacity:"1"},200)
		})
	})
})