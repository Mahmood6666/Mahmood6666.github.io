jQuery(function ($) {
	$(document).ready(function () {

		// header info carousel
		$('.owl-carousel-one').owlCarousel({
			loop: true,
			margin: 10,
			nav: false,
			dots: false,
			infinite: true,
			autoplay: true,
			autoplayTimeout: 3000,
			slideTransition: "linear",
		});

		// banner carousel

		$('.owl-carousel-two').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			dots: false,
			infinite: true,
			autoplay: true,
			autoplayTimeout: 5000,
			slideTransition: "linear",
			
			items: 1,
		});

		// testimonial slider 

		$('.testimonial-slider').owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			infinite: true,
			autoplay: true,
			autoplayTimeout: 3000,
			items: 3,
		});

		// page scroll progress start

		$(document).on("scroll", function () {
			var pixels = $(document).scrollTop();
			var pageHeight = $(document).height() - $(window).height();
			var progress = 100 * pixels / pageHeight;

			$(".page-progress").css("width", progress + "%");
		});

		// back to top btn

		var btn = $('.back-to-top');
		$(window).scroll(function () {
			if ($(window).scrollTop() > 200) {
				btn.fadeIn();
			} else {
				btn.fadeOut();
			}
		});
		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '200');
		});

		// section reveal animation

		$(window).on('scroll', function () {
			var reveals = $('.reveal');
			for (var i = 0; i < reveals.length; i++) {
				var windowHeight = window.innerHeight;
				var revealTop = reveals[i].getBoundingClientRect().top;
				var revealPoint = 0;

				if (revealTop < windowHeight - revealPoint) {
					reveals[i].classList.add('active');
					console.log('class add');
				}
				else {
					reveals[i].classList.remove('active');
					console.log('class remove')
				}

			}
		});

	});
});