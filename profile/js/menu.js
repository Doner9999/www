$(document).ready(function(){
    let menuMode = 0;

    $('.menuBtn').click(function(e){
        e.preventDefault();
        if($('#menu').hasClass('off')){
            $('#menu').removeClass('off');
            $('#menu').addClass('on')
            $('.menuBtn').removeClass('off');
            $('.menuBtn').addClass('on')

            
        }else if($('#menu').hasClass('on')){
            $('#menu').removeClass('on');
            $('#menu').addClass('off')
            $('.menuBtn').removeClass('on');
            $('.menuBtn').addClass('off');
        }
    });
});