$(document).ready(function(){
    

    $('.gallery .gallery_content ul li').mouseenter(function(){
        var ind = $(this).index('.gallery .gallery_content ul li');
        console.log(ind);

        $('.gallery .gallery_content ul li img').css('filter','grayscale(100%)');
        $(this).find('img').css('filter','grayscale(0%)');

        if(ind==8){
            $(this).find('img').attr('src','./images/img_27_2.gif')
        };
        if(ind==2){
            $(this).find('img').attr('src','./images/img_21_2.gif')
        }
    });

    $('.gallery .gallery_content ul li').mouseleave(function(){
        $('.gallery .gallery_content ul li img').css('filter','grayscale(0%)');


        var ind = $(this).index('.gallery .gallery_content ul li');
        if(ind==8){
            $(this).find('img').attr('src','./images/img_27.jpg')
        }
        if(ind==2){
            $(this).find('img').attr('src','./images/img_21.jpg')
        }
    });

    
    
    
});