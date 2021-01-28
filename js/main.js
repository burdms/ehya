$(document).ready(function () {
  // Burger menu
  const burgerButton = document.querySelector(".header-burger");
  const overlay = document.querySelector(".overlay");
  const headerLink = document.querySelectorAll(".header-nav__link");
  overlay.addEventListener("click", menuClose);

  burgerButton.addEventListener("click", function () {
    document.querySelector(".header-menu").classList.toggle("header-menu_opened");
    document.querySelector(".overlay").classList.toggle("overlay_opened");
    document.querySelector(".header-burger").classList.toggle("header-burger_opened");
    document.querySelector("body").classList.toggle("no-overflow");
  });

  function menuClose() {
    document.querySelector(".header-menu").classList.remove("header-menu_opened");
    document.querySelector(".overlay").classList.remove("overlay_opened");
    document.querySelector(".header-burger").classList.remove("header-burger_opened");
    document.querySelector("body").classList.remove("no-overflow");
  }

  document.addEventListener("keyup", (e) => {
    if (e.code === "Escape") menuClose();
  });

  headerLink.forEach((link) => link.addEventListener("click", menuClose));

  // Show/hide password icon
  const showPassword = document.querySelector(".login__password-control");
  showPassword.addEventListener("click", function () {
    let input = document.getElementById("password-input");
    if (input.getAttribute("type") == "password") {
      showPassword.classList.add("login__password-control_hide");
      input.setAttribute("type", "text");
    } else {
      showPassword.classList.remove("login__password-control_hide");
      input.setAttribute("type", "password");
    }
    return false;
  });

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
