head.ready(function() {
	function height(){
	  var windowheight = $(window).height();
	  var height = windowheight;
	  $(".js-height").css('height', height);
	}
	height();

	// RESIZE
	$(window).resize(function(){
	  height();
	});
});