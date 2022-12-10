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
	{
		/* <i class="fas fa-chevron-right"></i>; */
	}
	$(".rewards-slider").slick({
		fade: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		pauseOnHover: true,
		centerMode: true,
		dots: false,
		arrows: true,
		nextArrow: '<i class="fas fa-chevron-right arrow-right"></i>',
		prevArrow: '<i class="fas fa-chevron-left arrow-left"></i> ',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
})(jQuery);
