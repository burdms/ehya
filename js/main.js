$(document).ready(function () {
  var storiesSlider = new Swiper(".stories-slider", {
    loop: true,
    effect: "slide",
    autoHeight: true,

    navigation: {
      nextEl: ".stories-slider__button_next",
      prevEl: ".stories-slider__button_prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  $(".subscribe-form").validate({
    errorClass: "subscribe__error",
    messages: {
      email: {
        required: "Example: name@domain.com",
        email: "Example: name@domain.com",
      },
    },
  });
});
