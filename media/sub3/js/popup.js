$(document).ready(function(){
    $('.video_list ul li a').click(function(e){
        var ind = $(this).parent('.video_list li').index('.video_list li');
        var videoArray = [
            'https://www.youtube.com/embed/EXeTwQWrcwY',
            'https://www.youtube.com/embed/TQfATDZY5Y4',
            'https://www.youtube.com/embed/TsLEolNcXug',
            'https://www.youtube.com/embed/1T__uN5xmC0'
        ]
        var titleArray =[
            'The Dark Knight (2008) Official Trailer #1 - Christopher Nolan Movie HD',
            'The Dark Knight - Official Trailer 2 [HD]',
            'The Dark Knight Rises Ultimate Trilogy Trailer - Christopher Nolan Batman Movie Legacy HD',
            'The Dark Knight - Official® Trailer 1 [HD]'
        ]
        var subArray =[
            '2019.03.12',
            '2019.04.25',
            '2019.05.19',
            '2019.06.06',
        ]
        
        
        e.preventDefault();
        $('.content1 .popup').css('display','block')
        $('.popup .popup_area .popup_area_left iframe').attr('src',videoArray[ind]);
        $('.popup .popup_area_right dl dt').html(titleArray[ind]);
        $('.popup .popup_area_right dl dd').html(subArray[ind]);
        console.log(ind);
    });

    $('.popup .popup_close').click(function(e){
        e.preventDefault();
        $('.content1 .popup').css('display','none')
        $('.popup .popup_area .popup_area_left iframe').attr('src','');
    });
});