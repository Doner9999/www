

$(document).ready(function(){
  //객체배열(json)
//   var memo = [
//         {title:'제품명1', price:'10,000원', sub1:'제품설명1-1', sub2:'제품설명2-1'},
//         {title:'제품명2', price:'20,000원', sub1:'제품설명1-2', sub2:'제품설명2-2'},
//         {title:'제품명3', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
//         {title:'제품명4', price:'30,000원', sub1:'제품설명1-4', sub2:'제품설명2-4'}
//       ];
  var ind = 0;  
  var txt ='';
  console.log(ind);
  function popchange(){
    $('.pop2 .popup2 img').attr('src','./images/content2/content2_2/cont2_popImg'+(ind+1)+'.png');
    //   txt ='';
    //   txt+= '<dl>';
    //   txt+= '<dt>제품명 : '+memo[ind].title+'</dt>';
    //   txt+= '<dd>제품가격: '+memo[ind].price+'</dd>';
    //   txt+= '<dd>제품설명1 : '+memo[ind].sub1+'</dd>';
    //   txt+= '<dd>제품설명2 : '+memo[ind].sub2+'</dd>';
    //   txt+= '</dl>';
    //   $('.pop .popup .txt').html(txt);
  }


  $('.pop2 .pop_menu2 a').click(function(e){
      e.preventDefault();
      
      ind = $(this).index('.pop2 .pop_menu2 a');  // 0 1 2 3

      $('.pop_btn2').fadeIn('slow');
      $('.pop2 .modal_box2').fadeIn('fast');
      $('.pop2 .popup2').fadeIn('slow');

      popchange();

  });

  $('.close_btn2,.pop2 .modal_box2').click(function(e){
      e.preventDefault();
      $('.pop2 .modal_box2').fadeOut('fast');
      $('.pop2 .popup2').fadeOut('fast');
      $('.pop_btn2').fadeOut('fast');
  });

  
  $('.pop_btn2 a').click(function(e){
    e.preventDefault();

    $('.pop2 .popup2').hide().fadeIn('slow'); 
   
   if($(this).hasClass('pre')){
       if(ind==0)ind=$('.pop2 .pop_menu2 a').length;
       ind--;
       popchange();
   }else if($(this).hasClass('next')){
       if(ind==$('.pop2 .pop_menu2 a').length-1)ind=-1;
       ind++;
       popchange();
   }
   function btnmove(){
    if(ind==1){
      $('.pop_btn2').addClass('on');
    }else if(ind==0){
      $('.pop_btn2').removeClass('on');
    }  
    
  };
  btnmove();

   console.log(ind);
});


  // function btnmove(){
  //   if(ind==1){
  //     $('.pop_btn2').addClass('on');
  //   }else if(ind==0){
  //     $('.pop_btn2').removeClass('on');
  //   }  
    
  // };
  // btnmove();
});
