import 'slick-carousel';

// plugins initialization begin
function slickInit(arg) {

	// --- slick.js initialization begin ---
	$(arg).each(function (idx, item) {
	    var carouselId = "carousel" + idx;
	    $(this).find('.slider__items').id = carouselId + "items";
	    $(this).find('.slider__arrow-prev').id = carouselId + "arrow-prev";
	    $(this).find('.slider__arrow-next').id = carouselId + "arrow-next";

	    $(this).find('.slider__items').slick({
			prevArrow: $(this).find('.slider__arrow-prev'),
			nextArrow: $(this).find('.slider__arrow-next')
	    });
	});
	// --- slick.js initialization end ---
}

module.exports = slickInit;