
 var smh=$('.main').height();
 var on_off=false;  
 

  $('#headerArea').mouseenter(function(){
   // var scroll = $(window).scrollTop();
   $('#headerArea').addClass('on');
    on_off=true;
});

$('#headerArea').mouseleave(function(){
    var scroll = $(window).scrollTop();  //스크롤의 거리
    
    if(scroll<smh-200 ){
      $('#headerArea').removeClass('on');
    }else{
      $('#headerArea').addClass('on') ;
    }
   on_off=false;    
});

//스크롤 밑에도달했을때 바뀌는거
$(window).on('scroll',function(){//스크롤의 거리가 발생하면
   var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
   //console.log(scroll);

   if(scroll>smh-200){//스크롤300까지 내리면
      $('#headerArea').addClass('on');
   }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
      if(on_off==false){ //마우스가 헤더영역에 호버되어있지 않을때만 투명해라 
         $('#headerArea').removeClass('on');
      }
   }; 
   
});

// 2detph 밑으로 떨어지는거
  $('ul.dropdownmenu').hover(
   function() { 
      $('ul.dropdownmenu li.menu ul').fadeIn('slow',function(){$(this).stop();}); 
      $('#headerArea').animate({height:358},'fast').clearQueue();
   },function() {
      $('ul.dropdownmenu li.menu ul').hide(); 
      $('#headerArea').animate({height:168},'fast').clearQueue();
 });


// tab키 장애인용 포커스 맞추기
 $('ul.dropdownmenu li.menu .depth1').on('focus', function () {
   $('#headerArea').addClass('on');     
   $('ul.dropdownmenu li.menu ul').slideDown('normal');
   $('#headerArea').animate({height:358},'fast').clearQueue();
});

$('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () { 
   $('#headerArea').removeClass('on')       
   $('ul.dropdownmenu li.menu ul').slideUp('fast');
   $('#headerArea').animate({height:168},'normal').clearQueue();
});

