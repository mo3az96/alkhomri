$(window).on("load", function () {
  $("body").removeClass("overflow");
});

$(document).ready(function () {
  lazyLoad();
  mobileClick();
  $(window).on("resize", function () {
    mobileClick();
  });

  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    // effect: "fade",
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Certificates Slider ************************************/
  var certificatesSwiper = new Swiper(".certificates-slider .swiper", {
    loop: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
    pagination: {
      el: ".certificates-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Gallery Sliders ************************************/
  var gallerySwiper = new Swiper(".gallery-slider .swiper", {
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".gallery-slider .swiper-btn-next",
      prevEl: ".gallery-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".gallery-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      767: {
        spaceBetween: 30,

        slidesPerView: "auto",
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
});

function mobileClick() {
  /************************************ Side Menu ************************************/
  if ($(window).width() <= 993) {
    $(".menu-btn").on("click", () => {
      $(".overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });

    $(".close-menu,.overlay").on("click", () => {
      $(".overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });

    $(".has-children>a").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".has-children>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-children>a").not(this).siblings().slideUp(500);
    });
    $(".lang-btn").click(function (e) {
      $(this).toggleClass("active");
      $(this).siblings().slideToggle(500);
    });
  }
  /************************************ Footer ************************************/
  if ($(window).width() <= 767) {
    $(" .footer-title").click(function () {
      $(" .footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(" .footer-title").not(this).siblings().slideUp(500);
    });
  }
}
