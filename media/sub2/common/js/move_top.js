$(document).ready(function(){

 
    $('.move_top').click(function(e){
       e.preventDefault();
        //상단으로 스르륵 이동합니다.
        var scroll = $(window).scrollTop(); //스크롤의 거리
       $("html,body").stop().animate({"scrollTop":0},1000); //스크롤을 스무스하게 움직임
    });
});