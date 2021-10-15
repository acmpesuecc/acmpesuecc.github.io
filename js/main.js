$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});


// for smooth scrolling

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
  
        var target = this.hash,
        if($(target).length){
            $('html, body').animate({
                'scrollTop': $(target).offset().top - 80
            }, 400, 'swing');
        }
           
        });
    });

