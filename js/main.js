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
    $('html,body').animate({scrollTop:$('#placeholder-1').offset().top}, 'slow');
  }
  if (mq) {
    $('#placeholder-1').css('bottom', '0px');
    $('#placeholder-1').css('height', '0px');
    $('#acercade').on('click', about);
  } else {
    $('#acercade').on('click', about);
  }

  function prox() {
    $('html,body').animate({scrollTop:$('#placeholder-2').offset().top}, 'slow');
  }
  if (mq) {
    $('#placeholder-2').css('bottom', '0px');
    $('#placeholder-2').css('height', '0px');
    $('#proximo-q').on('click', prox);
  } else {
    $('#proximo-q').on('click', prox);
  }

  function archive() {
    $('html,body').animate({scrollTop:$('#placeholder-3').offset().top}, 'slow');
  }
  if (mq) {
    $('#placeholder-3').css('bottom', '0px');
    $('#placeholder-3').css('height', '0px');
    $('#archivo').on('click', archive);
    //$('#archivo').attr('href', '#past');
  } else {
    $('#archivo').on('click', archive);
  }

});
