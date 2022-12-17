$(function () {
  'use strict'
  // feedback slider part start
  $('.big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.small_slider',
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.small_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.big_slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }]
  });
  // feedback slider part end



  // menu fix part start
  let menuOff = $('.main_menu').offset().top;

  $(window).scroll(function () {

    let scrolling = $(this).scrollTop();

    if (scrolling > menuOff) {
      $('.main_menu').addClass('fix_menu');
    } else {
      $(".main_menu").removeClass('fix_menu');
    }

  });
  // menu fix part end



  // back to top button start
  $('.bc_top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 2000);
  });

  $(window).scroll(function () {
    let scrolling = $(this).scrollTop();

    if (scrolling > 200) {
      $('.bc_top').fadeIn();
    } else {
      $('.bc_top').fadeOut();
    }
  });
  // back to top button end


});