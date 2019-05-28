$('html, body').animate({
    scrollTop: $(#).offset().top
  }, 800, function(){

  // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });

} // End if

});