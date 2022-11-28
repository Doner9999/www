$(document).ready(function(){
    $('.behind .behind_list ul li').mouseenter(function(){
        var ind = $(this).index('.behind .behind_list ul li');
        console.log(ind);

        if(ind==1){

        }
        if(ind==2){
            $(this).find('img').attr('src','./images/img_06_2.gif')
        }
        if(ind==3){
            $(this).find('img').attr('src','./images/img_07_2.gif')
        }
        if(ind==4){
            $(this).find('img').attr('src','./images/img_08_2.gif')
        }
        if(ind==5){
            $(this).find('img').attr('src','./images/img_09_2.gif')
        }
    });

    $('.behind .behind_list ul li').mouseleave(function(){
        var ind = $(this).index('.behind .behind_list ul li');
        console.log(ind);

        if(ind==1){

        }
        if(ind==2){
            $(this).find('img').attr('src','./images/img_06.png')
        }
        if(ind==3){
            $(this).find('img').attr('src','./images/img_07.png')
        }
        if(ind==4){
            $(this).find('img').attr('src','./images/img_08.png')
        }
        if(ind==5){
            $(this).find('img').attr('src','./images/img_09.png')
        }
    });
});