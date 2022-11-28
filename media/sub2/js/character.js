$(document).ready(function(){
    $('.content3 .character_list>div').eq(1).css('display','none')

    $('.content3 .tab_menu ul li a').click(function(e){
        e.preventDefault();
        let ind = $(this).parent('.content3 .tab_menu ul li').index();
        console.log(ind);

        $('.content3 .tab_menu ul li').removeClass('now');
        $(this).parent('.content3 .tab_menu ul li').addClass('now');

        $('.content3 .character_list>div').css('display','none')
        $('.content3 .character_list>div').eq(ind).css('display','block')
    });
});