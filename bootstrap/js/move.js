$(document).ready(function(){
    $('.navbar-nav li a').click(function(e){
        e.preventDefault();

        var value = 0;

        if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
            value= $('#content .content1').offset().top;  // 해당 콘테츠의 상단의 거리~~
         }else if($(this).hasClass('link2')){
            value= $('#content .content2').offset().top; 
         }else if($(this).hasClass('link3')){
            value= $('#content .content3').offset().top; 
         }else if($(this).hasClass('link4')){
            value= $('#content .content4').offset().top; 
         }
         $("html,body").stop().animate({"scrollTop":value},1000);
    });
});