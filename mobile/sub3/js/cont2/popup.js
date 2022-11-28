$(document).ready(function(){

    var ind = 0;

    $('.cont2 .cont2list .container1 a').click(function(e){
        e.preventDefault();

        ind = $(this).index('.cont2 .cont2list .container1 a'); // 0 1 2 3
        console.log(ind);
        $('.cont2list .popup').hide();
        $('.cont2list .popup'+(ind+1)).show();
    });

    $('.cont2 .cont2list .popup .popup_end').click(function(e){
        e.preventDefault();
        $('.cont2list .popup').hide();
    });
});