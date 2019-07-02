$(function(){
	$(".pin").mouseover(function(){
		$(".phone").slideDown(500);
	});			
	$(".pin").mouseout(function(){
		$(".phone").slideUp();
	});
})