$(document).ready(function() {
  $('.slider-main').bxSlider({
		pager: false,
        auto: true,
        nextText: '',
        prevText: ''
  });
  $('.slider-partner').bxSlider({
		pager: false,
        minSlides: 4,
        maxSlides: 6,
        moveSlides: 2,
        slideWidth: 200
  });
});
