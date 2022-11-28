$(document).ready(function(){
    /*1500*/ 
  
        $(window).on('scroll',function(){
            let batscroll = $(window).scrollTop();

            if(batscroll>=1300){
                $('.the_bat').addClass('effect');
            }     
        });
    }
)
       
    
