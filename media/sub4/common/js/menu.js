$(document).ready(function(){
    
    $('#headerArea .menu_open').toggle(function(){
        $('#headerArea #gnb').animate({
            top : '0'
        }).clearQueue();
        $('#headerArea h1 a').css('background','url("https://readonly1.cafe24.com/media/common/css/../../common/images/mainLogoB.png") 100% no-repeat').css('background-size','100% auto');
        $('#headerArea .menu_open').addClass('on');
        $('#headerArea .menu_open span').css('background','none');
    },function(){
        $('#headerArea #gnb').animate({
            top : '-400px'
        }).clearQueue();
        $('#headerArea h1 a').css('background','url("https://readonly1.cafe24.com/media/common/css/../../common/images/mainLogoW.png") 100% no-repeat').css('background-size','100% auto');
        $('#headerArea .menu_open').removeClass('on');
        $('#headerArea .menu_open span').css('background','#fff');
    });
   
    

    

})