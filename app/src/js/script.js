
$(document).ready(function(){
  var altura = $('.menu').offset().top;

  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > altura ){
      $('.menu').addClass('menu-fixed');
    } else {
      $('.menu').removeClass('menu-fixed');
    }
  });

  $(function(){
    $(".slides").slidesjs({
      play: {
        active: true,
          // [boolean] Generate the play and stop buttons.
          // You cannot use your own buttons. Sorry.
        effect: "fade",
          // [string] Can be either "slide" or "fade".
        interval: 3000,
          // [number] Time spent on each slide in milliseconds.
        auto: true,
          // [boolean] Start playing the slideshow on load.
        swap: true,
          // [boolean] show/hide stop and play buttons
        pauseOnHover: false,
          // [boolean] pause a playing slideshow on hover
        restartDelay: 4000
          // [number] restart delay on inactive slideshow
      }
    });
  });

});
