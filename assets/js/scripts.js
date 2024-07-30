$(document).ready(function () {

  var nav = document.querySelector(".navbar");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("scroll-on");
    }
    else {
      nav.classList.remove("scroll-on");
    }
  }

  //banner-slider
  $('.fade-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


   // ODOMETER 
    ////////////////////////////////////////////////
    if ($(".odometer").length) {
      $('.odometer').appear();
      $(document.body).on('appear', '.odometer', function(e) {
          var odo = $(".odometer");
          odo.each(function() {
              var countNumber = $(this).attr("data-count");
              $(this).html(countNumber);
          });
      });
    };

    $(".test-slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      variableWidth: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });


});