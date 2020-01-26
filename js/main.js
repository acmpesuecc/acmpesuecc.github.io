$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

//for smooth scrolling
// $(document).ready(function(){
//    $("a[href^='#'").on("click",function(e) {
//        e.preventDefault();
//        var offset=100;
//        return $("html","body").animate({
//            scrollTop: $(this.hash).offset().top-offset
//        },300);
//        });
// });

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
  
        var target = this.hash,
        $target = $(target);
  
        $('html, body').animate({
            'scrollTop': $target.offset().top-80
        }, 400, 'swing', function () {
           
        });
    });
  });
