

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

  function popchange(){
    $('.pop .popup img').attr('src','./images/content3/cont3_popImg'+(ind+1)+'.png');
    //   txt ='';
    //   txt+= '<dl>';
    //   txt+= '<dt>제품명 : '+memo[ind].title+'</dt>';
    //   txt+= '<dd>제품가격: '+memo[ind].price+'</dd>';
    //   txt+= '<dd>제품설명1 : '+memo[ind].sub1+'</dd>';
    //   txt+= '<dd>제품설명2 : '+memo[ind].sub2+'</dd>';
    //   txt+= '</dl>';
    //   $('.pop .popup .txt').html(txt);
  }


  $('.pop .pop_menu a').click(function(e){
      e.preventDefault();
      
      ind = $(this).index('.pop .pop_menu a');  // 0 1 2 3

      $('.pop_btn').fadeIn('slow');
      $('.pop .modal_box').fadeIn('fast');
      $('.pop .popup').fadeIn('slow');

      popchange();

  });

  $('.close_btn,.pop .modal_box').click(function(e){
      e.preventDefault();
      $('.pop .modal_box').fadeOut('fast');
      $('.pop .popup').fadeOut('fast');
      $('.pop_btn').fadeOut('fast');
  });

  
  $('.pop_btn a').click(function(e){
       e.preventDefault();

       $('.pop .popup').hide().fadeIn('slow'); 
      
      if($(this).hasClass('pre')){
          if(ind==0)ind=$('.pop_menu a').length;
          ind--;
          popchange();
      }else if($(this).hasClass('next')){
          if(ind==$('.pop_menu a').length-1)ind=-1;
          ind++;
          popchange();
      }

  });
});
