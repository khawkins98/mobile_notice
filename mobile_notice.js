
jQuery(document).ready(function ($) {

  // Add an overlay on desktop-sized screens telling folks to use a mobile device

  checkScreen();

  $(window).resize(function() {
    checkScreen();
  });

  function checkScreen() {
    windowHeight = $(window).height();
    windowWidth = $(window).width();

    if ( (windowHeight > 660) && (windowWidth > 900) ) {
      $("#mobilenotice").addClass("active transition");
      $("#mobilenotice").css("top",0);
    } else {
      $("#mobilenotice").removeClass("active");
      $("#mobilenotice").css("top","100%");
    }
  }
 
});