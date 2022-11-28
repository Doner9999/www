$(document).ready(function() {
  
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    
  $(".nav_open").click(function(e) { //메뉴버튼 클릭시
   e.preventDefault();
   $('#gnb .depth1').eq(1).find('h3 a').unbind('click');
     var documentHeight =  $(document).height();
     $("#gnb").css('height',documentHeight); 


     if(op==false){
       $("#gnb").animate({right:0,opacity:1}, 'fast');
       $('#headerArea').addClass('open on');
       op=true;
     }else{
       $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
       $('#headerArea').removeClass('open').addClass('on');
       $('#gnb .depth1 h3 a')
       op=false;
     }

  });
  
  
   //2depth 메뉴 교대로 열기 처리 
   var onoff=[false,false,false,false];
   var arrcount=onoff.length;
   
   console.log(arrcount);
   
   

   $('#gnb .depth1 h3 a').click(function(e){
    
     e.preventDefault();
       var ind=$(this).parents('.depth1').index();

       
       console.log(ind);
      
       
       
      if(onoff[ind]==false){
        $('#gnb .depth1').eq(1).find('h3 a').unbind();

       // if(ind==1){
       //     $(this).find('span').text('+');  
       //     $(this).unbind('click');
       //  } 
       //$('#gnb .depth1 ul').hide();
       $(this).parents('.depth1').find('ul').slideDown('fast');
       $(this).parents('.depth1').siblings('li').find('ul').fadeOut('fast');
       $('#gnb .depth1 h3 a').css('color','#333');
       $('#gnb .depth1 h3 a').css('background','#fff');
       
       $(this).css('color','rgb(1, 52, 128)');
       $('#headerArea').attr('background','#fff');
        for(var i=0; i<arrcount; i++) onoff[i]=false; 
        onoff[ind]=true;
          
        $('.depth1 span').text('+');   
        $(this).find('span').text('-');  
        
           
      }else{
        $(this).parents('.depth1').find('ul').slideUp('fast'); 
        $(this).css('background','#fff');
       $(this).css('color','#333');
        onoff[ind]=false;   
          
        $(this).find('span').text('+');     
      }
      
      $(".nav_open").click(function(e) {
       e.preventDefault();
       if(onoff[ind]==true){
         $('#gnb .mainMenu .depth1 ul').fadeOut('fast');
         $('#gnb .mainMenu .depth1 h3 a').css('color','#333');
         $('#gnb .mainMenu .depth1 h3 a span').text('+');
         onoff[ind]=false;
       }
     });
   }); 
   
   $(window).on('scroll',function(){//스크롤의 거리가 발생하면
     var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
     //console.log(scroll);
  
     if(scroll>100){//스크롤300까지 내리면
        $('#headerArea').addClass('on');
     }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
       { //마우스가 헤더영역에 호버되어있지 않을때만 투명해라 
           $('#headerArea').removeClass('on');
        }
     }; 
     

     $('#gnb').css({'overflow':'hidden'});
     $('#gnb').on('scroll touchmove mousewheel',function(event){
       event.preventDefault();
       event.stopPropagation();
       return false;
     })
  });
   
  


   
 
 });


