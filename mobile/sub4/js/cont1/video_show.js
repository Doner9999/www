$(window).load(function(){
    var ind = 0;
    var titlearr =[
        '세상을 바꾸는 움직임 세방그룹 1 편',
        '세상을 바꾸는 움직임 세방그룹 2 편',
        '세방 희망스위치ON ep01',
        '로케트 배터리 x FCB 홍보영상',
        '기업 홍보영상 공모전 - 김정범 참가자님',
        'Battery for Better Life',
    ];
    var subtitlearr = [
        '세상을 바꾸는 움직임',
        '더 나은 미래를 향해 움직이고 있습니다.',
        '조천 지역아동센터 편',
        'Battery for better life',
        '내일 우리가 해야만 하는 일에, 모든 역량을 집중해',
        '세방전지 홍보 영상',
    ];

    

    console.log('무야호');

    $('#content .swiper-wrapper a').click(function(e){
        e.preventDefault();

        ind = $(this).index('#content .swiper-wrapper a');

        console.log(ind);

        $('#content .titleArea dl dt').html(titlearr[ind]);
        $('#content .titleArea dl dd').html(subtitlearr[ind]);


        $('#content .cont1 ul li').addClass('hide');
        $('#content .cont1 ul li:eq('+ind+')').removeClass('hide');
    });

  
});