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
	$(document).ready(function () {
		$(".choose-ninja-item").on("click", function (e) {
			$(".choose-ninja-item").siblings().removeClass("active");
			$(this).addClass("active");
			console.log(123);
		});
	});
})(jQuery);
