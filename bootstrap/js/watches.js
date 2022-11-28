$(document).ready(function(){
    $('.content2 .watch_list').css('display','none');
    $('.content2 .watch_list').eq(0).css('display','block');

        $('.content2 .tab_menu ul li a').click(function(e){
            e.preventDefault();
            var ind = $(this).parent('.content2 .tab_menu ul li').index('.content2 .tab_menu ul li');

            $('.content2 .watch_list').css('display','none');
            $('.content2 .watch_list').eq(ind).css('display','block');


            $('.content2 .tab_menu ul li a').removeClass('on');
            $(this).addClass('on');
        });


        if($(window).width()<1200){
            $('.content3_list2 .straps_left').removeClass('pull-right');
            $('.content3_list2 .straps_right').removeClass('pull-left');
        }else if($(window).width()>=1200){
            $('.content3_list2 .straps_left').addClass('pull-right');
            $('.content3_list2 .straps_right').addClass('pull-left');
        }
    $(window).resize(function(){
        if($(window).width()<1200){
            $('.content3_list2 .straps_left').removeClass('pull-right');
            $('.content3_list2 .straps_right').removeClass('pull-left');
        }else if($(window).width()>=1200){
            $('.content3_list2 .straps_left').addClass('pull-right');
            $('.content3_list2 .straps_right').addClass('pull-left');
        }
    });
    

    
});