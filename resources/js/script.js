$(document).ready(function() {

    /* For the sticky navigation */
   $('.js--section-features').waypoint(function(direction) {
       if (direction == "down") {
           $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
   }, {
    offset: '60px;'
   });
   
   /* Scroll on buttons */
   $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
   });

   $('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
   });

   /* Navigation scroll */

   $('a[href*="#"]').not('[href="#"]').click(function(event) {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       if (target.length) {
        event.preventDefault(); /* non dovrebbe esserci */
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000, function() {  /* function non dovrebbe esserci */
          
           var $target = $(target); /* non dovrebbe esserci */
           $target.focus();         /* non dovrebbe esserci */
           if ($target.is(":focus")) {   /* non dovrebbe esserci */
             return false;
           } else {
             $target.attr('tabindex','-1'); 
             $target.focus();            /* da else in poi non dovrebbe esserci */
           };
         });
       }
     }
   });

   /* Animations on scroll */
   $('.js--wp-1').waypoint(function(direction){
     $('js--wp-1').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });


});