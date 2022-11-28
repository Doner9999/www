
$(document).ready(function() {
   
	
	// $('.familysite .arrow').click(function(e){
	// 	e.preventDefault();
	// 	$('.familysite .aList').fadeIn('fast');	
	// 	$(this).addClass('on');	
	// 	// $('.familysite .aList').addClass('shadow');	
	// });

	// $('.familysite .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');		
	// 	$('.familysite .arrow').removeClass('on');
	// 	// $(this).removeClass('shadow');	
	// });
  
	$('.familysite .arrow').toggle(function(e){
		e.preventDefault();
		$('.familysite .aList').fadeIn('fast');	
		$('.familysite').css('background','#fff');
		$('.familysite .aList li').css('background','#fff');
		

	},function(){
		$('.familysite .aList').fadeOut('fast');	
		$('.familysite').css('background','none');
	});


	// $('.select .arrow').toggle(function(){
	// 	$('.select .aList').fadeIn('slow');		
	// 	$(this).find('span').text('▲');
	// },function(){
    //     $('.select .aList').fadeOut('fast');
	// 	$(this).find('span').text('▼');	
	// });



	//tab키 처리
	  $('.familysite .arrow').on('focus', function () {        
              $('.familysite .aList').fadeIn('slow');	
       });
       $('.familysite .aList li:last a').on('blur', function () {        
              $('.familysite .aList').fadeOut('fast');
       });
 
});

