/*global jQuery */
(function ($) {
  "use strict";

  // All Document Ready Function
  jQuery(document).ready(function ($) {
      /*---------------------------------
       All Window Scroll Function Start
      --------------------------------- */
      $(window).scroll(function () {
          // Scroll up
          if ($(window).scrollTop() >= 400) {
              $('div#scroll').slideDown(600);
          } else {
              $('div#scroll').slideUp(600);
          }
      });
      /*--------------------------------
       All Window Scroll Function End
      ---------------------------------*/
  });

  /*---------------------
   Smooth Scroll
  --------------------- */
  $('.ex-smooth[href*="#"]:not([href="#"])').on("click", function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1500);
              return false;
          }
      }
  });

  /*---------------
  Back to Top
  -----------------*/
  $('div#scroll a').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, 1500);

      return false;
  });

  /*---------------
  Preloader
  -----------------*/
  $('body').addClass('preloader-active');
  
  jQuery(window).on('load', function () {
      $('.preloader').fadeOut();
      $('.preloader-spinner').delay(350).fadeOut('slow');
      $('body').removeClass('preloader-active');
      /*global WOW*/
  new WOW().init();
  });

}(jQuery));