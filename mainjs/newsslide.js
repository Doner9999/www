// JavaScript Document
$(document).ready(function() {
    var position=-1235;  //최초위치
    var movesize=555; //이미지 하나의 너비
    console.log(position);
   // var timeonoff;
   
    $('.news .newsGalleryBox .newsGallery ul').after($('.news .newsGalleryBox .newsGallery ul').clone());
  /*
    function moveG() {
        position-=movesize;  // 150씩 감소
        $('.slide_gallery').stop().animate({left:position}, 'fast',
            function(){							
            if(position==-750){
                $('.slide_gallery').css('left',0);
                position=0;
            }
        });
    }

    timeonoff= setInterval(moveG, 3000);
  */
    
        //슬라이드 겔러리를 한번 복제
 
  $('.news .newsBtn a').click(function(e){
     e.preventDefault();

    //clearInterval(timeonoff);
     
     if($(this).is('.newsBtnLeft')){  //이전버튼 클릭
         
          position-=movesize;  // 150씩 감소
              $('.newsGallery').stop().animate({left:position}, 'fast',
                function(){							
                    if(position==-4565){
                        $('.newsGallery').css('left',-1235);
                        position=-1235;
                    }
                }).clearQueue();

     }else if($(this).is('.newsBtnRight')){  //다음버튼 클릭
        
        //    if(position>=-125){
        //         $('.newsGallery').css('left',-2900);
        //         position=-2900;
        //     }
 
            position+=movesize; // 150씩 증가
            $('.newsGallery').stop().animate({left:position}, 'fast',
                function(){							
                    if(position==-680){
                        $('.newsGallery').css('left',-4010);
                        position=-4010;
                    }
                }).clearQueue();
      }

      console.log(position);
   });
});

