

$(document).ready(function(){
    //객체배열(json)
    var memo = [
          {title:'컨테이너산업', comment:'각종 현대식 장비와 고객서비스 제공을 극대화 할 수 있는 최첨단 전산운영시스템 및 GATE 무인 자동 시스템을 갖추고 있습니다. 국내 컨테이너 내륙운송의 선두주자로서 명실상부한 종합물류 회사로서의 컨테이너 운송능력을 인정받고 있습니다.',link:'./sub2/sub2_1.html'},
          {title:'Bulk', comment:'최첨단 장비와 우수한 인력, 효율적인 장비운영을 바탕으로 전국의 주요 항만에 지점을 개설 운영하여 언제 어디서든 고객이 원하는 최상의 서비스를 제공합니다.',link:'./sub2/sub2_2.html'},
          {title:'3PL', comment:'고객 기업들의 핵심역량에 집중하고, 물류비용 절감과 물류서비스 개선을 통해 기업 경쟁력을 강화할 수 있도록 3자물류 서비스를 제공하고 있습니다.',link:'./sub2/sub2_3.html'},
          {title:'LME', comment:'런던 비철금속 거래소의 약자로 전세계 비철금속을 선물, 현물 거래를 하고 보관업무를 담당하는 곳으로 비철금속 시장의 가격 결정 역할을 담당하고 있습니다.',link:'./sub2/sub2_4.html'}
        ];
    var ind = 0;  
    var txt ='';
   

    
    function popchange(){
      $('#content .business .businessImg img').attr('src','./images/business'+(ind+1)+'.jpg').hide().fadeIn('slow');
        txt ='';
        txt+= '<dl>';
        txt+= '<dt>  '+memo[ind].title+'</dt>';
        txt+= '<dd> '+memo[ind].comment+'</dd>';
        txt+= '</dl>';
        $('.business .businessBox .businesstext').html(txt).hide().fadeIn('slow');
        $('.business .businessBox .businessBoxMore a').attr('href', memo[ind].link).hide().fadeIn('slow');

    }

    popchange();
    // ind = $(this).index('.businessImg .slide ul li');  // 0 1 2 3
  
  //   $('.pop .pop_menu a').click(function(e){
  //       e.preventDefault();
        
  //       ind = $(this).index('.pop .pop_menu a');  // 0 1 2 3
  
  //       $('.pop_btn').fadeIn('slow');
  //       $('.pop .modal_box').fadeIn('fast');
  //       $('.pop .popup').fadeIn('slow');
  
  //       popchange();
  
  //   });
  
  //   $('.close_btn,.pop .modal_box').click(function(e){
  //       e.preventDefault();
  //       $('.pop .modal_box').fadeOut('fast');
  //       $('.pop .popup').fadeOut('fast');
  //       $('.pop_btn').fadeOut('fast');
  //   });
  
    
    $('.businessBoxBtn a').click(function(e){
         e.preventDefault();
  
         $('.businessImg .slide').hide().fadeIn('slow'); 
        
        if($(this).hasClass('leftBtn')){
            if(ind==0)ind=memo.length;
            ind--;
            popchange();
        }else if($(this).hasClass('rightBtn')){
            if(ind==memo.length-1)ind=-1;
            ind++;
            popchange();
        }
  
    });
  });
  