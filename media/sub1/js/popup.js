$(document).ready(function(){
    $('.popup_open').click(function(e){
        e.preventDefault();
        $('.popup').css('display','flex');
        $('.popup iframe').attr('src','https://www.youtube.com/embed/feTJERWU-tc');
    });

    $('.popup_close').click(function(e){
        e.preventDefault();
        $('.popup').css('display','none');
        $('.popup iframe').attr('src','');
    })

    $('.popup').click(function(){
        $('.popup').css('display','none');
        $('.popup iframe').attr('src','');
    });
});