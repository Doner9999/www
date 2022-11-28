$(document).ready(function () {

    $('.tabArea a').click(function(e){
        // e.preventDefault(); //href="#" 속성을 막아주는..메소드
   
         var value=0; //이동할 스크롤의 거리

         if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
            value= $('#content .cont1').offset().top-50;  // 해당 콘테츠의 상단의 거리~~
         }else if($(this).hasClass('link2')){
            value= $('#content .cont2').offset().top-50; 
         }else if($(this).hasClass('link3')){
            value= $('#content .cont3').offset().top-50; 
         }else if($(this).hasClass('link4')){
            value= $('#content .cont4').offset().top-50; 
         }
         
         
       $("html,body").stop().animate({"scrollTop":value},1000);
     });


     $('.subNav2_1 li a').click(function(e){
        // e.preventDefault(); //href="#" 속성을 막아주는..메소드
   
         var value=0; //이동할 스크롤의 거리

         if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
            value= $('#content .cont1').offset().top-50;  // 해당 콘테츠의 상단의 거리~~
         }else if($(this).hasClass('link2')){
            value= $('#content .cont2').offset().top-50; 
         }else if($(this).hasClass('link3')){
            value= $('#content .cont3').offset().top-50; 
         }else if($(this).hasClass('link4')){
            value= $('#content .cont4').offset().top-50; 
         }
         
         
       $("html,body").stop().animate({"scrollTop":value},1000);
     });
});