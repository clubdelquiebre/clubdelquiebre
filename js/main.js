$(document).ready(function() {
    var mq = window.matchMedia("(max-width: 767px)").matches;
    function about() {
      $('html,body').animate({scrollTop: 600}, 600,
          function () {
            $('html,body').clearQueue()
          });
    }
    if (mq) {
      $('#acercade').attr('href', '#nosotros');
    } else {
      $('#acercade').on('click', about);
    }
    function archive() {
      $('html,body').animate({scrollTop: 3015}, 800,
          function () {
            $('html,body').clearQueue()
          });
    }
    if (mq) {
      $('#archivo').attr('href', '#past');
    } else {
      $('#archivo').on('click', archive);
    }



});
