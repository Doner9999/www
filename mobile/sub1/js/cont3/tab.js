// JavaScript Document
window.onload = function(){

    //탭메뉴 개수 ***
    $('.tabs .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tabs .tab1').addClass('now'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
      $('.tabs .tab').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
        //   console.log(ind);

          $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
          $(".tabs .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').removeClass('now'); //모든 탭메뉴를 비활성화
          $(this).addClass('now'); // 클릭한 해당 탭메뉴만 활성화

          setTimeout(function(){
            map2.relayout();
            map2.setCenter(new daum.maps.LatLng(35.106955,129.078736));},0);
     });
   
     var container = document.getElementById('map1');
     var options = {
         center: new daum.maps.LatLng(37.503798, 127.048845),
         level: 2
     };
 
     var map = new daum.maps.Map(container, options);
     
     var mapTypeControl = new daum.maps.MapTypeControl();
     map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
 
     var zoomControl = new daum.maps.ZoomControl();
     map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
     
     var markerPosition  = new daum.maps.LatLng(37.503798, 127.048845); 
     var marker = new daum.maps.Marker({
         position: markerPosition
     });
 
     marker.setMap(map);
     
     var overlay = new daum.maps.CustomOverlay({
         map: map,
         position: marker.getPosition()       
     });
 
 
     /****************************/
 
     var container2 = document.getElementById('map2');
     var options2 = {
         center: new daum.maps.LatLng(35.106955,129.078736),
         level: 2
     };
 
     var map2 = new daum.maps.Map(container2, options2);
     
     var mapTypeControl2 = new daum.maps.MapTypeControl();
     map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);
 
     var zoomControl2 = new daum.maps.ZoomControl();
     map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
     
     var markerPosition2  = new daum.maps.LatLng(35.106955,129.078736); 
     var marker2 = new daum.maps.Marker({
         position: markerPosition2
     });
 
     marker.setMap(map2);
     
     var overlay = new daum.maps.CustomOverlay({
         map: map2,
         position: marker2.getPosition()       
     });


     /********************************* */
     
  };

