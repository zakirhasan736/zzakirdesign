(function ($) {
    "use strict";
    
/* ==========================================================================
   //mean menu link
  ========================================================================== */
    jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
  });

/* ==========================================================================
   //header-sticky
  ========================================================================== */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 150) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });

/* ==========================================================================
   //testimonials-items-active slide
  ========================================================================== */
    $('.testimonials-items-active').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
          
        ]
    });
    
/* ==========================================================================
   //Product-Ditems-active slide
  ========================================================================== */
    $('.Product-Ditems-active,.Product-Ditems-active2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    autoplay:true,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3
                }
            }
          
        ]
    });



    /*-------------------------------------
    //nice select
     -------------------------------------*/
          $('select').niceSelect();

    /*-------------------------------------
     Background function
     -------------------------------------*/
     $.fn.theme_background_image = function() {
        $(this).each(function() {
            var url = $(this).attr('data-image');
            if(url){
                $(this).css('background-image', 'url(' + url + ')');
            }
        });
    };
    $('.theme-bg-img').theme_background_image();
   // tabs services
   $( "#menuChart-tabs" ).responsiveTabs( {
    animation: 'fade',
    duration: 500,
} );

/* ==========================================================================
   //nav link
  ========================================================================== */
  var topMenu = jQuery("#mobile-menu,.mobile-menu .mean-nav"),
  offset = 67,
  topMenuHeight = topMenu.outerHeight() + offset,
  // All list items
  menuItems = topMenu.find('a[href*="#"]'),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var href = jQuery(this).attr("href"),
      id = href.substring(href.indexOf('#')),
      item = jQuery(id);
    //console.log(item)
    if (item.length) {
      return item;
    }
  });



// Bind to scroll
jQuery(window).scroll(function () {
  // Get container scroll position
  var fromTop = jQuery(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if (jQuery(this).offset().top < fromTop)
      return this;
  });

  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  menuItems.parent().removeClass("active");
  if (id) {
    menuItems.parent().end().filter("[href*='#" + id + "']").parent().addClass("active");
  }
});  


})(jQuery);	    