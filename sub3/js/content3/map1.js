 window.onload = function() {
    var container = document.getElementById('map1');
    var options = {
        center: new daum.maps.LatLng(35.117212, 129.049253),
        level: 6
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(35.117212, 129.049253); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });

    //*************************************************** */

    var container2 = document.getElementById('map2');
    var options2 = {
        center: new daum.maps.LatLng(34.900660, 127.659995),
        level: 6
    };

    var map2 = new daum.maps.Map(container2, options2);
    
    var mapTypeControl2 = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl2 = new daum.maps.ZoomControl();
    map.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition2  = new daum.maps.LatLng(34.900660, 127.659995); 
    var marker2 = new daum.maps.Marker({
        position: markerPosition2
    });

    marker.setMap(map2);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map2,
        position: marker.getPosition()       
    });

        //*************************************************** */



    var container3 = document.getElementById('map3');
    var options3 = {
        center: new daum.maps.LatLng(36.048926, 129.378745),
        level: 6
    };

    var map3 = new daum.maps.Map(container3, options3);
    
    var mapTypeControl3 = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl3 = new daum.maps.ZoomControl();
    map.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition3  = new daum.maps.LatLng(36.048926, 129.378745); 
    var marker3 = new daum.maps.Marker({
        position: markerPosition3
    });

    marker.setMap(map3);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map3,
        position: marker.getPosition()       
    });

    //*********************************************************** */

    var container4 = document.getElementById('cont5_1Map');
    var options4 = {
        center: new daum.maps.LatLng(37.082644, 127.205425),
        level: 3
    };

    var map4 = new daum.maps.Map(container4, options4);
    
    var mapTypeControl4 = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl4, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl4 = new daum.maps.ZoomControl();
    map.addControl(zoomControl4, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition4  = new daum.maps.LatLng(37.082644, 127.205425); 
    var marker4 = new daum.maps.Marker({
        position: markerPosition4
    });

    marker.setMap(map4);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map4,
        position: marker.getPosition()       
    });
    map.relayout();
    map.setCenter(new daum.maps.LatLng(37.082644, 127.205425));

    //************************************************************ */

    var container5 = document.getElementById('cont5_2Map');
    var options5 = {
        center: new daum.maps.LatLng(37.094105, 127.211336),
        level: 3
    };

    var map5 = new daum.maps.Map(container5, options5);
    
    var mapTypeControl5 = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl5, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl5 = new daum.maps.ZoomControl();
    map.addControl(zoomControl5, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition5  = new daum.maps.LatLng(37.094105, 127.211336); 
    var marker5 = new daum.maps.Marker({
        position: markerPosition5
    });

    marker.setMap(map5);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map5,
        position: marker.getPosition()       
    });
    map.relayout();
    map.setCenter(new daum.maps.LatLng(37.094105, 127.211336));
};