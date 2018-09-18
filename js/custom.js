$(document).ready(function() {
  /*adds active class to the 1st child for banner slider*/
  // $(".carousel-inner")
  //   .find(".carousel-item:first")
  //   .addClass("active");

  // Cover slider image
  $(".cover-c").backstretch(
    ["img/cover-a.jpg", "img/cover-b.jpg", "img/cover-c.jpg"],
    {
      fade: 1000,
      duration: 5000
    }
  );

  // Banner slider image
  $(".banner-b").backstretch(
    ["img/cover-a.jpg", "img/cover-b.jpg", "img/cover-c.jpg"],
    {
      fade: 1000,
      duration: 5000
    }
  );

  // scroll spy navbar
  function checkScroll() {
    var startY = $(".navbar-b").height() * 1; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
      $(".navbar-b").addClass("scrolled shadow-sm");
    } else {
      $(".navbar-b").removeClass("scrolled shadow-sm");
    }
  }
  if ($(".navbar-b").length > 0) {
    $(window).on("scroll load resize", function() {
      checkScroll();
    });
  }

  // Animation
  $(".slide-from-right")
    .css("opacity", 0)
    .viewportChecker({
      classToAdd: "animated fadeInRight",
      offset: "30%"
    });
  $(".slide-from-left")
    .css("opacity", 0)
    .viewportChecker({
      classToAdd: "animated fadeInLeft",
      offset: "30%"
    });
  $(".fade-in")
    .css("opacity", 0)
    .viewportChecker({
      classToAdd: "animated fadeInUp",
      offset: "30%"
    });

  // scroll to section
  $(document).on("click", "a.page-scroll", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        2000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Show/hide scroll to top button
  window.onscroll = function() {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 999 ||
      document.documentElement.scrollTop > 999
    ) {
      $(".scroll-to-top").addClass("d-block");
    } else {
      $(".scroll-to-top").removeClass("d-block");
    }
  }
});
