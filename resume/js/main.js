$(document).ready(function(){
    

    $('.infoArea .btn').click(function(){
        let ind = $(this).parent('.inner .infoArea').index('.inner .infoArea');
        

        if($('.inner .infoArea:eq('+ind+') .table_wrap').hasClass('off')){
            $('.inner .infoArea:eq('+ind+') .table_wrap').slideDown();
            $('.inner .infoArea:eq('+ind+') .table_wrap').removeClass('off');
            $('.inner .infoArea:eq('+ind+') .table_wrap').addClass('on');
            $('.inner .infoArea:eq('+ind+') .btn').css('background','url(../img/down.png) no-repeat')
            $('.inner .infoArea:eq('+ind+') .btn').css('background-position','right center')
            console.log(ind);
        }else{
            $('.inner .infoArea:eq('+ind+') .table_wrap').slideUp();
            $('.inner .infoArea:eq('+ind+') .table_wrap').removeClass('on');
            $('.inner .infoArea:eq('+ind+') .table_wrap').addClass('off');
            $('.inner .infoArea:eq('+ind+') .btn').css('background','url(../img/up.png) no-repeat')
            $('.inner .infoArea:eq('+ind+') .btn').css('background-position','right center')
        }
        
    });
});