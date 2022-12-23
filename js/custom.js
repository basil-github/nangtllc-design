$(function () {
  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // AOS ANIMATION
  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  // SMOOTHSCROLL NAVBAR
  $(function () {
    $(".navbar a, .hero-text a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  $(function () {
    $(".open_nave").on("click", function (event) {
      $("body").addClass("is-active");
    });
  });
  $(function () {
    $(".close_nave").on("click", function (event) {
      $("body").removeClass("is-active");
    });
  });

  $(function () {
    $(document).scroll(function () {
      if ($(this).scrollTop() >= 170) {
        // $(".header__inner").css({ "background-color": "#ffffff" })
        $(".header__outer").css({ "background-color": "#ffffff" })
        // $(".header__level-one").css({ "background-color": "#ffffff" })
        $(".header__root").css({ "opacity": "1", "height": "100%", "pointer-events": "auto" })
      } else {
        $(".header__outer").css({ "background-color": "#5e59596b" })
        // $(".header__inner").css({ "background-color": "#5e59596b" })
        // $(".header__level-one").css({ "background-color": "#5e59596b", "pointer-events": "auto", })
        $(".header__root").css({ "opacity": "0", "height": "0", "pointer-events": "none", })
      }
      if (screen.width > 962) {
        if ($(this).scrollTop() >= 270) {
          $(".web_head").css({ "height": "0px" })
        } else {
          $(".web_head").css({ "height": "80px" })
        }
      }

    });
  });
});
