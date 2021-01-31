$(document).ready(function () {
  // Burger menu and login button
  const burgerButton = document.querySelector(".header-burger");
  const overlay = document.querySelector(".overlay");
  const headerLink = document.querySelectorAll(".header-nav__link");
  const loginButton = document.querySelector(".header-login");
  const loginCloseButton = document.querySelector(".login__close");
  const loginOverlay = document.querySelector(".login__overlay");
  overlay.addEventListener("click", menuClose);
  loginOverlay.addEventListener("click", menuClose);
  loginCloseButton.addEventListener("click", menuClose);

  loginButton.addEventListener("click", function () {
    document.querySelector("body").classList.add("no-overflow");
    document.querySelector(".login").classList.add("login_visible");
  });

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
    document.querySelector(".login").classList.remove("login_visible");
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

  // Trends tab selector
  const tab = $(".trends-tabs__item");
  const content = $(".trends-content__item");

  tab.on("click", function (event) {
    let activeContent = $(this).attr("data-target");
    content.removeClass("trends-content__item_active");
    tab.removeClass("trends-tabs__item_active");
    $(activeContent).addClass("trends-content__item_active");
    $(this).addClass("trends-tabs__item_active");
  });

  // reviews slider
  if (document.querySelector(".reviews-slider")) {
    const reviewsSlider = new Swiper(".reviews-slider", {
      loop: true,
      effect: "slide",
      spaceBetween: 100,
      autoHeight: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      autoplay: {
        delay: 7000,
      },
    });
    const reviewsContainer = document.querySelector(".reviews-slider");
    reviewsContainer.addEventListener("mouseover", () => reviewsSlider.autoplay.stop());
    reviewsContainer.addEventListener("mouseout", () => reviewsSlider.autoplay.start());
  }

  // Stories slider
  if (document.querySelector(".stories-slider")) {
    const storiesSlider = new Swiper(".stories-slider", {
      effect: "slide",

      navigation: {
        nextEl: ".stories-info__button_next",
        prevEl: ".stories-info__button_prev",
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        577: {
          spaceBetween: 22,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        320: {
          spaceBetween: 18,
          slidesPerView: 1,
          slidesPerGroup: 2,
          slidesPerColumn: 2,
          slidesPerColumnFill: "row",
        },
      },
    });
  }

  // Form validation
  $(".login__form").validate({
    errorClass: "subscribe__error",
    messages: {
      login: {
        required: "Введите ваш логин",
      },
      password: {
        required: "Введите ваш пароль",
        minlength: "Пароль мин. 6 символов",
      },
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
