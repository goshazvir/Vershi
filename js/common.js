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

	$('.js-flexslider').flexslider({
		namespace: "gallery-",
		smoothHeight: true,
		animation: "fade",
		selector: ".js-flexslider-in > .gallery-item",
		directionNav: false,
		// controlsContainer: ".slider",
		useCSS: false,
		controlNav: true,
		slideshow: true,
		animationLoop: true,  
		slideshowSpeed: 7000,
		animationSpeed: 600, 
	});


	// RESIZE
	$(window).resize(function(){
	  height();
	});
});