$(window).on("load", function () {
  $(".preloader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });
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
        $(".slide-img video").get(0).play();
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
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1560: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 8,
        spaceBetween: 15,
      },
      3000: {
        slidesPerView: 10,
        spaceBetween: 30,
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
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 10,
        loop: true,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
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
  /************************************ Related Swiper ************************************/
  if ($(window).width() <= 1199) {
    var relatedSwiper = new Swiper(".post-related .swiper", {
      loop: true,
      a11y: {
        enabled: false,
      },
      pagination: {
        el: ".post-related .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
      on: {
        init: function (swiper) {
          lazyLoad();
        },
      },
    });
  }

  /************************************ Modal Swiper ************************************/
  var modals = $(".gallery-modal");
  for (var i = 0; i < modals.length; i++) {
    var modal = "#" + $(modals[i]).attr("id");
    var thumbGallerySwiper = i;
    var mainGallerySwiper = i;
    var myvideos = i;
    thumbGallerySwiper = new Swiper(modal + " .gallery-thumbs-slider .swiper", {
      loop: true,
  
      breakpoints: {
        0: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
        767: {
          spaceBetween: 5,
          slidesPerView: 5,
        },
        992: {
          spaceBetween: 5,
          slidesPerView: 5,
        },
        1199: {
          spaceBetween: 15,
          slidesPerView: 5,
        },
      },
      on: {
        init: function (swiper) {
          lazyLoad();
        },
      },
    });
    mainGallerySwiper = new Swiper(modal + " .gallery-main-slider .swiper", {
      loop: true,
      spaceBetween: 15,
      thumbs: {
        swiper: thumbGallerySwiper,
      },
      navigation: {
        nextEl: modal + " .gallery-thumbs-slider .swiper-btn-next",
        prevEl: modal + " .gallery-thumbs-slider .swiper-btn-prev",
      },
      on: {
        init: function (swiper) {
          lazyLoad();
        },
      },
    });

    myvideos = document.getElementById($(modals[i]).attr("id"));
    myvideos.addEventListener("hide.bs.modal", (event) => {
      $(".modal video").trigger("pause");
    });
  }


  /************************************ Video ************************************/
  $(".cover-overlay").click(function (e) {
    $(this).fadeOut();
    $(this).siblings(".video-content").find("video").trigger("play");
  });

  $("video").on({
    play: function () {
      $(this).parent(".video-content").siblings(".cover-overlay").fadeOut();
    },
  });
  /************************************ Select2 ************************************/
  if ($(window).width() >= 992) {
    $("select").select2({
      minimumResultsForSearch: Infinity,
      width: "100%",
    });
  }

  $(".filter-select").change(function (e) {
    if ($(this).val() == "all") {
      $(".news-item").show();
      $(".news-grid .news-item").removeClass("main");
      $(".news-grid .news-item:nth-of-type(n + 5)").hide();
    } else {
      $(".news-item").hide();
      $(".news-grid .news-item").removeClass("main");
      $(".news-item[data-cat='" + $(this).val() + "']").show();
      $(".news-grid .news-item:visible:first").addClass("main");
    }
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
