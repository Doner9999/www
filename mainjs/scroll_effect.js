$(document).ready(function () {

    // $('.subNav li:eq(0)').find('a').addClass('spy');
    // //첫번째 서브메뉴 활성화
    
    // $('#content .info').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smh= $('.main').height();  //메인 비주얼의 높이
    var h1= $('#content .info').offset().top ;
    var h2= $('#content .business').offset().top ;
    var h3= $('#content .businessMind').offset().top ;
    var h4= $('#content .news').offset().top ;
    var h5= $('#content .recruit').offset().top ;
    
    

   
     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(scroll);
        
        
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        // if(scroll>smh){ 
        //     $('.navBox').addClass('navOn');
        //     //스크롤의 거리가 350px 이상이면 서브메뉴 고정
        //     $('header').hide();
        // }else{
        //     $('.navBox').removeClass('navOn');
        //     //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
        //     $('header').show();
        // }
        
        
        
        $('.subNav li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        if(scroll<=100){
            $('#content section').removeClass('boxMove');
            $('#content section').removeClass('boxMove2');
        }else if(scroll>=600 && scroll<1600){
            // $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content .info').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=1600 && scroll<2600){
            // $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            $('#content .info').removeClass('boxMove');
             $('#content .business').addClass('boxMove2');
        }else if(scroll>=2500 && scroll<3600){
            // $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            $('#content .business').removeClass('boxMove2');
            $('#content .businessMind').addClass('boxMove');
        }else if(scroll>=3600 && scroll<4400){
            // $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            $('#content .businessMind').removeClass('boxMove');
             $('#content .news').addClass('boxMove');
        }else if(scroll>=4400){
            // $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            $('#content .news').removeClass('boxMove');
             $('#content .recruit').addClass('boxMove');
        }

        
    })
});