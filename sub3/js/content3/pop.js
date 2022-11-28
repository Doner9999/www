

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {title:'안성 1센터', place:'경기도 안성시 양성면 산정리', sub1:'49,500m2 (14,974평)', sub2:'2014.08.28'},
        {title:'안성 2센터', place:'경기도 안성시 양성면 이현리', sub1:'대지 면적 : 38,199m2 (11,555평)', sub2:'2011.08.28'},
        {title:'부산 1센터', place:'부산광역시 남구 감만동 624', sub1:'대지면적 16,875m2 (5,100평) / 건축면적 9,332m2 (2,823평)', sub2:'2011.10.27'},
        {title:'인천 1센터', place:'인천광역시 중구 항동7가 82-1', sub1:' 30,710㎡ (9,290평)', sub2:'설립 중'}
      ];
  var ind = 0;  
  var txt ='';

  function popchange(){
    $('.pop .popup img').attr('src','./images/content3/cont3_popImg'+(ind+1)+'.jpg');
      txt ='';
      txt +='<div class="popBox">'
      txt +='<p>'
      txt += memo[ind].title
      txt +='</p>'

      txt += '<table>'
      txt += '<tr>'
      txt += '<th>'
      txt += '위치'
      txt += '</th>'
      txt += '<th>'
      txt += '면적'
      txt += '</th>'
      txt += '<th>'
      txt += '설립일'
      txt += '</th>'
      txt += '</tr>'

      txt += '<tr>'
      txt += '<td>'
      txt += memo[0].place;
      txt += '</td>'
      txt += '<td>'
      txt += memo[0].sub1;
      txt += '</td>'
      txt += '<td>'
      txt += memo[0].sub2;
      txt += '</td>'
      txt += '</tr>'

      txt += '</table>'
      txt += '</div>'
      
    //   txt+= '<dl>';
    //   txt+= '<dt>제품명 : '+memo[ind].title+'</dt>';
    //   txt+= '<dd>제품가격: '+memo[ind].price+'</dd>';
    //   txt+= '<dd>제품설명1 : '+memo[ind].sub1+'</dd>';
    //   txt+= '<dd>제품설명2 : '+memo[ind].sub2+'</dd>';
    //   txt+= '</dl>';
      $('.pop .popup .txt').html(txt);
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
          if(ind==0)ind=memo.length;
          ind--;
          popchange();
      }else if($(this).hasClass('next')){
          if(ind==memo.length-1)ind=-1;
          ind++;
          popchange();
      }

  });
});
