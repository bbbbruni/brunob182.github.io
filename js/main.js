$(document).ready(function(){
	
	$(window).scroll(function(){
		var getH = $('.intro').height() - 100;
		var scroll = $('body').scrollTop();		

		if(scroll > getH){
			$('.nav li.disable').removeClass('disable');
		}
		else{
			$('.nav li:first-child').addClass('disable');
		}
	});

});