$(document).ready(function () {
  $('.slider-main').bxSlider({
    pager: false,
    auto: true,
    nextText: '',
    prevText: '',
		speed: 1500,
		touchEnabled: false
  });
  $('.slider-partner').bxSlider({
    pager: false,
    minSlides: 4,
    maxSlides: 6,
    moveSlides: 2,
    slideWidth: 200,
    auto: true,
    pause: 3000,
    speed: 1000
  });

  /**
   * Smooth Scroll
   */

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  if (window.addEventListener) {
    var state = 0,
      akbk = [65, 75, 66, 75, 49, 48, 48];
    window.addEventListener("keydown", function (e) {
      if (e.keyCode == akbk[state]) state++;
      else state = 0;
      if (state == 7)
        $('body').toggleClass('sepia');
    }, true);
  }

});
