head.ready(function() {
	function height(){
	  var windowheight = $(window).height();
	  var height = windowheight;
	  $(".js-height").css('height', height);
	}
	height();

	$(".js-blog").click(function (){
	  var page = $(this).attr("href");
	  $('html, body').animate({
	   scrollTop: $(page).offset().top
	  }, 500);
	  return false;
	 });

	$(".js-communication").click(function (){
	  var page = $(this).attr("href");
	  $('html, body').animate({
	   scrollTop: $(page).offset().top
	  }, 500);
	  return false;
	 });
	
	// RESIZE
	$(window).resize(function(){
	  height();
	});
});