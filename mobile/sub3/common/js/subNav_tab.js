$(document).ready(function() {
    
    var onoff1 = false;
    var onoff2 = false;
    $('.subNav .subNav1_1>a').click(function(e){
        

        console.log(onoff1);

        e.preventDefault();
        if(onoff1==false){
            $('.subNav .container .subNav1_1 .subNav1_2').slideDown();
            onoff1=true;
        }else if(onoff1==true){
            $('.subNav .container .subNav1_1 .subNav1_2').slideUp();
            onoff1=false;
        };
        if(onoff2==true){
            $('.subNav .container .subNav2_1 .subNav2_2').slideUp();
            onoff2=false;
        }
    });

    $('.subNav .subNav2_1>a').click(function(e){

        e.preventDefault();
        if(onoff2==false){
            $('.subNav .container .subNav2_1 .subNav2_2').slideDown();
            onoff2=true;
        }else if(onoff2==true){
            $('.subNav .container .subNav2_1 .subNav2_2').slideUp();
            onoff2=false;
        };
        if(onoff1==true){
            $('.subNav .container .subNav1_1 .subNav1_2').slideUp();
            onoff1=false;
        }
    });

    


});