/* Scroll mechanism */

$(document).ready(function(){
    var stickyHeight = $('.sticky-nav').outerHeight();
    $('nav ul li').click(function(e){
        targetSection = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(targetSection).offset().top - stickyHeight + 1
        }, 1000);
        e.preventDefault();
    });
    
    $('#back-to-top').click(function(){
        $('body, html').animate({scrollTop: 0}, 1000);
    });
});

$(window).scroll(function(){
    var stickyHeight = $('.sticky-nav').outerHeight();
    var headerHeight = $('header').outerHeight();
    var windowScroll = $(this).scrollTop();
    $('#parallax-header').css('top', -(windowScroll * 0.2) + "px");
    
    if(headerHeight - windowScroll - 40 < stickyHeight){
        $('.sticky-nav').css('top', '0px');
        $('#back-to-top').css('right', '40px');
    }
    
    else{
        $('.sticky-nav').css('top', '-200px');
        $('#back-to-top').css('right', '-100px');
    }
});