$(document).ready(function(){

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();

        if(scroll>200){
            $('#headerArea').addClass('on');
        }else{
            $('#headerArea').removeClass('on');
        }
    })


});