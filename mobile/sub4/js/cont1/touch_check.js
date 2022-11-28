$(window).load(function(){
    console.log("");
    console.log("window onload : start");
    console.log("");
    
    
    
    $("body").on("touchstart", function(e){
        // 터치 선택한 객체 ID 확인
        var StartTouchId = e.target.getAttribute("id");
        
        // 시작 좌표값 확인 
        var startX = e.originalEvent.changedTouches[0].clientX;
        var startY = e.originalEvent.changedTouches[0].clientY;
        
        // 결과 출력
        console.log("");
        console.log("[window onload] : [touchstart] : [ID] : " + StartTouchId);
        console.log("[window onload] : [touchstart] : [X] : " + startX);
        console.log("[window onload] : [touchstart] : [Y] : " + startY);
        console.log("");    			
    });    			    	    	    						 																
    
    
    
    $("body").on("touchmove", function(e){
        // 터치 이동중인 객체 ID 확인
        var MoveTouchId = e.target.getAttribute("id");
        
        // 이동 좌표값 확인
        var moveX = e.originalEvent.changedTouches[0].clientX;
        var moveY = e.originalEvent.changedTouches[0].clientY;
        
        // 결과 출력
        console.log("");
        console.log("[window onload] : [touchmove] : [ID] : " + MoveTouchId);
        console.log("[window onload] : [touchmove] : [X] : " + moveX);
        console.log("[window onload] : [touchmove] : [Y] : " + moveY);
        console.log("");    			
    });
    
    
    
    $("body").on("touchend", function(e){
        // 터치 종료 객체 ID 확인
        var EndTouchId = e.target.getAttribute("id");
        
        // 종료 좌표값 확인
        var endX = e.originalEvent.changedTouches[0].clientX;
        var endY = e.originalEvent.changedTouches[0].clientY;
        
        // 결과 출력
        console.log("");
        console.log("[window onload] : [touchend] : [ID] : " + EndTouchId);
        console.log("[window onload] : [touchend] : [X] : " + endX);
        console.log("[window onload] : [touchend] : [Y] : " + endY);
        console.log("");    			
    });    		
    
});