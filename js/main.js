$(function(){
	var $width = $(window).width();
	var $window = $(window);

	$('.menu_scroll').css('display','none');
	$window.scroll(function () {
		if ($window.scrollTop() > 300){
			$('.menu_scroll').css('display','block');
		}
	});

	$window.scroll(function () {
		if ($window.scrollTop() < 300){
			$('.menu_scroll').css('display','none');
		}
	});

	/* Live ON */

	$('li.active a.live i').removeClass('fa-play');
	$('li.active a.live i').addClass('fa-circle');

});