$(document).ready(function() {

  var mq = window.matchMedia("(max-width: 767px)").matches;

  if (mq) {
    $("#nav-list").removeClass('navbar-fixed-top');
  }

  $(".navbar-toggle").blur(function (event) {
    if (mq) {
        $("#collapsable-nav").collapse('hide')
    }
  });

  function about() {
    $('html,body').animate({scrollTop: 585}, 600,
        function () {
          $('html,body').clearQueue()
        });
  }
  if (mq) {
    $('#acercade').attr('href', '#nosotros');
  } else {
    $('#acercade').on('click', about);
  }

  function prox() {
    $('html,body').animate({scrollTop: 2570}, 1000,
        function () {
          $('html,body').clearQueue()
        });
  }
  if (mq) {
    $('#proximo-q').attr('href', '#proximo');
  } else {
    $('#proximo-q').on('click', prox);
  }

  function archive() {
    $('html,body').animate({scrollTop: 3780}, 800,
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
