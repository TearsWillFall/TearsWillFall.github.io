$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500 && y < 600) {
    $('#mainBoxRight').fadeIn();
    $('#mainBoxLeft').fadeIn();

  } else {
    $('#mainBoxRight').fadeOut();
    $('#mainBoxLeft').fadeOut();

  }
});