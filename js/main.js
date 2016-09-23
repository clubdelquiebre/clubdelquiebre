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
    $('html,body').animate({scrollTop:$('#nosotros').offset().top - 100}, 'slow');
  }
  if (mq) {
    $('#acercade').on('click', about);
  } else {
    $('#acercade').on('click', about);
  }

  function prox() {
    $('html,body').animate({scrollTop:$('#proximo').offset().top - 200}, 'slow');
  }
  if (mq) {
    $('#proximo-q').on('click', prox);
  } else {
    $('#proximo-q').on('click', prox);
  }

  function archive() {
    $('html,body').animate({scrollTop:$('#past').offset().top -50}, 'slow');
  }
  if (mq) {
    $('#archivo').on('click', archive);
    //$('#archivo').attr('href', '#past');
  } else {
    $('#archivo').on('click', archive);
  }

});
