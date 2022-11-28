$(document).ready(function(){
   $('.content3 .content3List ul').mouseenter(function(){
      $('.content3 .content3List .imgbox img').css('filter','grayscale(100)');
   });
   $('.content3 .content3List ul').mouseleave(function(){
      $('.content3 .content3List .imgbox img').css('filter','grayscale(0)');
   });

   $('.content3 .content3List ul li img').hover(function(){
      $(this).css('filter','grayscale(0)');
   },function(){
      $(this).css('filter','grayscale(100)');
   });



});



// $('.content3 .content3List .imgBox').css('filter','grayscale(100%)');
//       var $target = $(event.target);
//       if($target.hasClass('imgBox1')){
//          $('.content3 .content3List .imgBox1').css('filter','grayscale(0)');
//       } else if($target.hasClass('imgBox2')) {
//          $('.content3 .content3List .imgBox2').css('filter','grayscale(0)');
//       }else if($target.hasClass('imgBox3')) {
//          $('.content3 .content3List .imgBox3').css('filter','grayscale(0)');
//       };