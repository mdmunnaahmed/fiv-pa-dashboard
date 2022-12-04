(function ($) {
	("use strict");
	// Menu Click Event
	$(".header-trigger").on("click", function (e) {
		$(".mobile-menu").addClass("active");
		$(".overlay").toggleClass("overlay-color");
	});
	$(".close-mobile-btn").on("click", function (e) {
		$(".mobile-menu").removeClass("active");
		$(".overlay").removeClass("overlay-color");
	});
	$(".overlay").on("click", function () {
		$(".mobile-menu").removeClass("active");
		$(".overlay").removeClass("overlay-color");
	});
})(jQuery);
