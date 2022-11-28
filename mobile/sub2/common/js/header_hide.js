$(document).ready(function(){
   
    
    // var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
//    $(".nav_open").click(function() { //메뉴버튼 클릭시
       
//        var documentHeight =  $(document).height();
//        $("#gnb").css('height',documentHeight); 

//       if(op==false){
//         $("#gnb").animate({right:0,opacity:1}, 'fast');
//         $('#headerArea').addClass('open');
//         op=true;
//       }else{
//         $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
//         $('#headerArea').removeClass('open');
//         $('#gnb .depth1 h3 a')
//         op=false;
//       }});
    // $(window).on('mousewheel',function(e){
    //     var wheel = e.originalEvent.wheelDelta; // 스크롤 값을 가져온다

    //     if(wheel>0){
    //         $('#headerArea').animate({top:'0'});
    //     }else{
    //         $('#headerArea').animate({top:'-60px'})
    //     }
    // })

    //Javascript
var lastScrollTop = 0;
var delta = 5;
var fixBox = document.querySelector('#headerArea');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;
//스크롤 이벤트 
window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled(){
    var nowScrollTop = window.scrollY;
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
        //Scroll down
        $('#headerArea').animate({top:'-60px'},'fast')
    }else{
        if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
            //Scroll up
        $('#headerArea').animate({top:'0'},'fast');
        }
    }
    lastScrollTop = nowScrollTop;
}




    //스크롤 밑에도달했을때 바뀌는거
// $(window).on('scroll',function(){//스크롤의 거리가 발생하면
//     var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
//     //console.log(scroll);
 
//     if(scroll>100){//스크롤300까지 내리면
//        $('#headerArea').addClass('on');
//     }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
//       { //마우스가 헤더영역에 호버되어있지 않을때만 투명해라 
//           $('#headerArea').removeClass('on');
//        }
//     }; 
    
//  });
});

