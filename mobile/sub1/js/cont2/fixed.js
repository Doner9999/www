$(document).ready(function() {

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        
        $('.cont1 .scrolltxt').html(scroll);

        if(scroll>=333){
            $('.cont2 .cont2_btn ul').addClass('fixed');
        }else{
            $('.cont2 .cont2_btn ul').removeClass('fixed');
        }


        if(scroll<500){
            $('.cont2 .cont2_btn li a').removeClass('on');
        }
        else if(scroll>=500 && scroll<1100){
            $('.cont2_btn li a').removeClass('on');
            $('.cont2_btn li:eq(0) a').addClass('on');
        }else if(scroll>=1100 && scroll<2800){
            $(".cont2_btn li a").removeClass('on');
            $('.cont2_btn li:eq(1) a').addClass('on');
        }else if(scroll>=2800){
            $(".cont2_btn li a").removeClass('on');
            $('.cont2_btn li:eq(2) a').addClass('on');
        }
    });

    $('.cont2_btn ul li a').click(function(e){
        e.preventDefault();

        var value = 0; // 이동할 거리
        if($(this).hasClass('link1')){
            value = $('.cont2_list .sec1').offset().top+10;
        }else if($(this).hasClass('link2')){
            value = $('.cont2_list .sec2').offset().top+10;
        }else if($(this).hasClass('link3')){
            value = $('.cont2_list .sec3').offset().top+18;
        }
        $("html,body").stop().animate({"scrollTop":value},1000);
    });


});