$(document).ready(function(){

    var albumArray=[
        './images/img_05_2.jpg',
        './images/img_06_2.jpg',
        './images/img_07_2.jpg',
    ]
    var titleArray=[
        'Main Theme 01',
        'Main Theme 02',
        'Main Theme 03',
    ]
    var musicArray = [
        './music/music_01.mp3',
        './music/music_02.mp3',
        './music/music_03.mp3'
    ]
    var music;
    
    music = document.getElementById('music');

    function play(){
        music.play();
    }
    function pause(){
        music.pause();
    }
    function load(){
        music.load();
    }

    var cd = 0;
    var onoff = 0;

    $('.content2 .music_list ul li a').click(function(e){
        load();
        e.preventDefault();
        var ind = $(this).parent('.content2 .music_list ul li').index('.content2 .music_list ul li');
        console.log(ind); //인덱스 잘 뽑히는지 확인하쇼
        
        if(cd==0){
            $('#content .content_box .content2 .content2_box .music_player .img_area img:nth-child(2)').animate( {left: '22%'},1000);

            $('.content2 .music_player .album').attr('src',albumArray[ind]);
            $('.content2 .music_player p').eq(1).html(titleArray[ind]);

            $('.content2 #music source').attr('src','');
            $('.content2 #music source').attr('src',musicArray[ind]);
            
            cd=1;
        }else if(cd==1){
            $('.content2 .music_player .album').attr('src',albumArray[ind]);
            $('.content2 .music_player p').eq(1).html(titleArray[ind]);
            $('.content2 #music source').attr('src','');
            $('.content2 #music source').attr('src',musicArray[ind]);
            $('#content .content_box .content2 .content2_box .music_player .img_area img:nth-child(2)').animate( {left: '0'},1000);
            $('#content .content_box .content2 .content2_box .music_player .img_area img:nth-child(2)').animate( {left: '22%'},1000);
            cd=1;
        }
        if($(('.content2 .content2_box .music_player .img_area img:nth-child(2)').hasClass==true)){
            $('.content2 .content2_box .music_player .img_area img:nth-child(2)').removeClass('playing');
        }

        

        // $('.content2 .content2_box .music_player .img_area img:nth-child(2)').addClass('playing');

        // $('.content2 .music_player .album').attr('src',albumArray[ind]);
        // $('.content2 .music_player p').eq(1).html(titleArray[ind]);

        // $('.content2 #music source').attr('src','');
        // $('.content2 #music source').attr('src',musicArray[ind]);
        // play();
        // onoff = 1;
        
       
    });
    $('.music_play').click(function(e){
        e.preventDefault();
        if(cd==1){
            $('.content2 .content2_box .music_player .img_area img:nth-child(2)').addClass('playing');
            play();
            onoff=1
        }else if(cd==0 && onoff==0){
            $('#content .content_box .content2 .content2_box .music_player .img_area img:nth-child(2)').animate( {left: '22%'},1000);
            $('.content2 .content2_box .music_player .img_area img:nth-child(2)').addClass('playing');
            play();
            cd=1;
            onoff=1;
        }
    });

    $('.music_pause').click(function(e){
        e.preventDefault();
        if(cd==1 && onoff ==1){
            pause();
            $('.content2 .content2_box .music_player .img_area img:nth-child(2)').removeClass('playing').delay(1000).animate( {left: '0'},1000);
            cd=0;
            onoff=0;
        }
    });

    // $('.content2 .music_player .music_stop').click(function(e){
    //     e.preventDefault();
    //     if(onoff==1){
    //         $('.content2 .content2_box .music_player .img_area img:nth-child(2)').removeClass('playing');
    //         pause();
    //         onoff=0;
    //     }else if(onoff==0){
    //         $('.content2 .content2_box .music_player .img_area img:nth-child(2)').addClass('playing');
    //         play();
    //         onoff=1;
    //     }
    // });
});