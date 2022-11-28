$(document).ready(function () {
        
    $('.content1 li:eq(0)').addClass('now');
    //첫번째 서브메뉴 활성화
    
    // $('#content div:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smhh= $('.main').height();  //메인 비주얼의 높이
    var h1= $('#content .contentArea .contentTime .sec1').offset().top-400;
    var h2= $('#content .contentArea .contentTime .sec2').offset().top-400;
    var h3= $('#content .contentArea .contentTime .sec3').offset().top-400;

    console.log(h1);
    console.log(h2);
    console.log(h3);

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        // $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>smhh+300){ 
            $('.content1 ul').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.content1 ul').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }
        
        
        
        $('.content1 li').removeClass('now');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=h1 && scroll<h2){
            $('.content1 li a').removeClass('now');
            $('.content1 li:eq(0) a').addClass('now');
            //첫번째 서브메뉴 활성화
            
            // $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=h2 && scroll<h3){
            $('.content1 li a').removeClass('now');
            $('.content1 li:eq(1) a').addClass('now');
            //두번째 서브메뉴 활성화
            
            //  $('#content div:eq(1)').addClass('boxMove');
        }else if(scroll>=h3){
            $('.content1 li a').removeClass('now');
            $('.content1 li:eq(2) a').addClass('now');
            //세번째 서브메뉴 활성화
            
            //  $('#content div:eq(2)').addClass('boxMove');
        }
        
        
        
     /*   
        //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<500){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=500 && scroll<1100){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('#content div:eq(1)').addClass('boxMove');
        }else if(scroll>=1100 && scroll<1500){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('#content div:eq(2)').addClass('boxMove');
        }else if(scroll>=1500){
            $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
             $('#content div:eq(3)').addClass('boxMove');
        }
        
    */    
        
    });


});