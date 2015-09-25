$(window).load(function(){
	'use strict';
  	$('.flexslider').flexslider({
        animation: "slide", 
        slideshow: true, 
        slideshowSpeed: 10000,
        animationSpeed: 500,
        smoothHeight: true,
        start: function(slider){
          $('body').removeClass('loading'); 
          $('.body-overlay').fadeToggle(); 
        }
  	});      
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});

jQuery(document).ready(function($) { 
	'use strict';
	$(".menulink a").click(function() { 
	  	jQuery("#menu").stop(true, true).slideToggle('fast');
	}); 
});