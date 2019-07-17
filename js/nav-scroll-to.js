// Select all links with hashes
var pad = 0;
$('.nav_ul a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      switch(this.hash){
        case '#detail_box':
          pad = parseInt($(this.hash).find('.detail_box').css('margin-top'))/2;
        break;
        case '#about':
          pad = parseInt($(this.hash).find('.detail_box1').css('margin-top'))/2.5;
        break;
        case '#service':
          pad = parseInt($(this.hash).css('margin-top'))/2.5;
        break;
        case '#contact':
          pad = 0;
        break;
      }
      console.log(pad);
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: (target.offset().top)-pad
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });