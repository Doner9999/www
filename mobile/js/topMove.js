$(document).ready(function () {
            
    $('.topMove').hide();
 
   $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
       
       
        // $('.text').text(scroll);

        if(scroll>200){ //500이상의 거리가 발생되면
            $('.topMove').fadeIn('slow');  //top보여라~~~~
        }else{
            $('.topMove').fadeOut('fast');//top안보여라~~~~
        }
   });
 
    $('.topMove').click(function(e){
       e.preventDefault();
        //상단으로 스르륵 이동합니다.
       $("html,body").stop().animate({"scrollTop":0},1000); //스크롤을 스무스하게 움직임
    });
});