var mtab1 = document.getElementById('t1');
var mtab2 = document.getElementById('t2');
var mtab3 = document.getElementById('t3');
var mtab4 = document.getElementById('t4');
var mtab5 = document.getElementById('t5');

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.


function ajax_call(localm){
  //alert(xhr.responseText);
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	var localText='';                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    if(localm==1){
        localText='철강, 광물, 산화물';
    }else if(localm==2){
        localText='발전소, 공공운송, MMA양곡';
    }else if(localm==3){
        localText='중량물 하역, 설치, 운송';
    }else if(localm==4){
        localText='일반 화물 운송, 포워딩';
    }else if(localm==5){
        localText='선사, LME';
    }

    var newContent = '';
    
    // newContent = '<table>';
    // newContent += '<thead><tr><th colspan="2">'+ localText + '</th></tr></thead>';    
    // newContent += '<tbody>';
    newContent += '<span>'+localText+'</span>';
    newContent += '<table>'
    newContent += '<tr>'
    newContent +='<th>'+'지역'+'</th>'
    newContent +='<th>'+'부서'+'</th>'
    newContent +='<th>'+'성명'+'</th>'
    newContent +='<th>'+'전화'+'</th>'
    newContent +='<th>'+'FAX'+'</th>'
    newContent +='<th>'+'E-Mail'+'</th>'
    newContent += '</tr>'
    
    for (var i = 0; i < responseObject.region.length; i++) {
      
      newContent += '<tr>';
      newContent += '<td>'+ responseObject.region[i].place+'</td>';
      newContent += '<td>'+ responseObject.region[i].part + '</td>';   
      newContent += '<td>'+ responseObject.region[i].nname + '</td>';   
      newContent += '<td>'+ responseObject.region[i].pn + '</td>';   
      newContent += '<td>'+ responseObject.region[i].fax + '</td>';   
      newContent += '<td>'+ responseObject.region[i].email + '</td>';    
      newContent += '</tr>'; 
        
    }
    
   
    newContent += '</table>';
 
    document.getElementById('cont2Table').innerHTML = newContent;

}

xhr.onload = function() {                       // When readystate changes
   ajax_call(1);
};

xhr.open('GET', './data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다


mtab1.onclick = function(e){
    e.preventDefault();
   
    $('.cont2Img').attr('src','./images/content1/a1.jpg')
    xhr.onload = function() {                       // When readystate changes
    ajax_call(1);
        
};

xhr.open('GET', './data/data2.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

mtab2.onclick = function(e){
    e.preventDefault();
   
    $('.cont2Img').attr('src','./images/content1/a2.jpg')
    xhr.onload = function() {                       // When readystate changes
    ajax_call(2);
        
};

xhr.open('GET', 'data/data3.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

mtab3.onclick = function(e){
    e.preventDefault();
   

    $('.cont2Img').attr('src','./images/content1/a3.jpg')
    xhr.onload = function() {                       // When readystate changes
    ajax_call(3);
        
};

xhr.open('GET', 'data/data4.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

mtab4.onclick = function(e){
    e.preventDefault();
   

    $('.cont2Img').attr('src','./images/content1/a4.jpg')
    xhr.onload = function() {                       // When readystate changes
    ajax_call(4);
        
};

xhr.open('GET', 'data/data5.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

mtab5.onclick = function(e){
    e.preventDefault();
   

    $('.cont2Img').attr('src','./images/content1/a5.jpg')
    xhr.onload = function() {                       // When readystate changes
    ajax_call(5);
        
};

xhr.open('GET', 'data/data6.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}








