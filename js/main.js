$(window).on("load", function () {
  $("body").removeClass("overflow");
});

$(document).ready(function () {
  if ($(window).width() >= 991) {
    sal({
      once: true,
    });
  } else {
    sal({
      disabled: true,
    });
  }

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
    a11y: {
      enabled: false,
    },
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
    a11y: {
      enabled: false,
    },
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
    a11y: {
      enabled: false,
    },
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
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Videos Sliders ************************************/
  var videosSwiper = new Swiper(".videos-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    centeredSlides: true,
    navigation: {
      nextEl: ".videos-slider .swiper-btn-next",
      prevEl: ".videos-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".videos-slider .swiper-pagination",
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
  /************************************ Categories Sliders ************************************/
  var categoriesSwiper = new Swiper(".categories-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    pagination: {
      el: ".categories-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ States Counter ************************************/
  if ($(".statistics-list").length > 0) {
    var a = 0;
    $(window).scroll(function () {
      if (
        a == 0 &&
        $(this).scrollTop() >= $(".features-section").offset().top - 350
      ) {
        $(".statistic-value span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1500,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    });
  }

  /************************************ Video ************************************/
  $(".cover-overlay").on("click", (e) => {
    $(".cover-overlay").fadeOut();
    $(".categoryPage-cover video").trigger("play");
  });

  $(".categoryPage-cover video").on({
    play: function () {
      $(".cover-overlay").fadeOut();
    },
    pause: function () {
      $(".cover-overlay").fadeIn();
    },
  });
});

function mobileClick() {
  /************************************ Side Menu ************************************/
  if ($(window).width() <= 993) {
    $(".menu-btn").on("click", (e) => {
      if (e.isDefaultPrevented()) return;
      e.preventDefault();
      e.stopPropagation();
      $(".overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });

    $(".close-menu,.overlay").on("click", (e) => {
      if (e.isDefaultPrevented()) return;
      e.preventDefault();
      e.stopPropagation();
      $(".overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });

    $(".has-children>a").click(function (e) {
      if (e.isDefaultPrevented()) return;
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
      if (e.isDefaultPrevented()) return;
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass("active");
      $(this).siblings().slideToggle(500);
    });
  } else {
    $(".menu-btn,.close-menu,.overlay,.has-children>a,.lang-btn").off("click");
    $("body").removeClass("overflow");
  }
  /************************************ Footer ************************************/
  if ($(window).width() <= 767) {
    $(".footer-title").click(function (e) {
      if (e.isDefaultPrevented()) return;
      e.preventDefault();
      e.stopPropagation();
      $(".footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-title").not(this).siblings().slideUp(500);
    });
  } else {
    $(".footer-title").off("click");
  }
}
