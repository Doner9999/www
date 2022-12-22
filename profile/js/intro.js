$(document).ready(function(){

    $('.intro .introText div:eq(0) p').delay(200).animate({bottom : '0'},1300);
    $('.intro .introText div:eq(1) p').delay(1700).animate({bottom : '0'},1300);
    $('.intro').delay(4000).fadeOut();

    
    $('.intro').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });

});