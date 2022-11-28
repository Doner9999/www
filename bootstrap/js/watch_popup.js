$(document).ready(function(){
    var sizeArray1 =[
        '43MM',
        '44MM',
        '45MM',
        '43MM',
        '46MM',
        '46MM'
    ]
    var sizeArray2 =[
        '45MM',
        '43MM',
        '44MM',
        '44MM',
        '46MM',
        '43MM'
    ]
    var sizeArray3 =[
        '45MM',
        '46MM',
        '46MM',
        '43MM',
        '44MM',
        '46MM'
    ]

    var movArray1 = [
        'AUTOMATIC',
        'CHRONOGRAGH',
        'AUTOMATIC',
        'AUTOMATIC',
        'QUARTZ',
        'QUARTZ'
    ]
    var movArray2 = [
        'AUTOMATIC',
        'QUARTZ',
        'AUTOMATIC',
        'QUARTZ',
        'CHRONOGRAGH',
        'AUTOMATIC'
    ]
    var movArray3 = [
        'QUARTZ',
        'CHRONOGRAGH',
        'AUTOMATIC',
        'AUTOMATIC',
        'QUARTZ',
        'CHRONOGRAGH'
    ]

    let ind1 = 0;
    let width_size = $(window).width();
    $('.content2 .tab_menu ul li a').click(function(){
        ind1 = $(this).parent('.content2 .tab_menu ul li').index('.content2 .tab_menu ul li');
        console.log(ind1);

        

        if(ind1==1){
            $('.watch_list2 .item a').click(function(e){
                e.preventDefault();
    
                var ind2;
                var titleArray = [
                    'Master Carbon SEAL, 46 mm, Military Dive Watch',
                    'Bear Grylls Survival, 45 mm, Pilot Watch',
                    'Luminox X Volition Navy SEAL Chronograph, 45 mm, Dive Watch',
                    'Atacama Field Automatic, 44 mm, Urban Adventure',
                    'Luminox X Volition Leatherback Sea Turtle Giant, 44mm, Dive Watch',
                    'Automatic, 44 mm, Urban Adventure'
                ]
                var subArray = [
                    '$845.00',
                    '$765.00',
                    '$875.00',
                    '$1,095.00',
                    '$1,195.00',
                    '$1,095.00'
                ]
                ind2 = $(this).parent('.watch_list2 .item').index('.watch_list2 .item');
                
                $('.content2 .popup').css('display','flex');
                $('.content2 .popup .popup_box .watch_info .watch_img').css('background','url("https://readonly1.cafe24.com/bootstrap/css/../images/watches/air/air_watch_0'+(ind2+1)+'.png") 50% 50% no-repeat').css('background-size','contain');
                $('.watch_info .watch_text dl dt').text(titleArray[ind2]);
                $('.watch_info .watch_text dl dd:eq(0) span').text(subArray[ind2]);
                $('.watch_info .watch_text dl dd:eq(1) span').text(sizeArray2[ind2]);
                $('.watch_info .watch_text dl dd:eq(2) span').text(movArray2[ind2]);
    
                

                $('.pre').click(function(e){
                    e.preventDefault();
                    ind2--;
                    if(ind2==-1){
                        ind2=0;
                    }
                    $('.content2 .popup .popup_box .watch_info .watch_img').css('background','url("https://readonly1.cafe24.com/bootstrap/css/../images/watches/air/air_watch_0'+(ind2+1)+'.png") 50% 50% no-repeat').css('background-size','contain');
                    $('.watch_info .watch_text dl dt').text(titleArray[ind2]);
                    $('.watch_info .watch_text dl dd:eq(0) span').text(subArray[ind2]);
                    $('.watch_info .watch_text dl dd:eq(1) span').text(sizeArray2[ind2]);
                    $('.watch_info .watch_text dl dd:eq(2) span').text(movArray2[ind2]);
                });
                $('.next').click(function(e){
                    e.preventDefault();
                    ind2++;
                    if(ind2==6){
                        ind2=5;
                    }
                    $('.content2 .popup .popup_box .watch_info .watch_img').css('background','url("https://readonly1.cafe24.com/bootstrap/css/../images/watches/air/air_watch_0'+(ind2+1)+'.png") 50% 50% no-repeat').css('background-size','contain');
                    $('.watch_info .watch_text dl dt').text(titleArray[ind2]);
                    $('.watch_info .watch_text dl dd:eq(0) span').text(subArray[ind2]);
                    $('.watch_info .watch_text dl dd:eq(1) span').text(sizeArray2[ind2]);
                    $('.watch_info .watch_text dl dd:eq(2) span').text(movArray2[ind2]);
                });

                
            });
        }else if(ind1==2){
            $('.watch_list3 .item a').click(function(e){
                e.preventDefault();
    
                
                var titleArray = [
                    'F-117 Nighthawk, 44 mm, Pilot Watch',
                    'Commando Raider, 46 mm, Outdoor Adventure',
                    'Commando Raider, 46 mm, Outdoor Adventure',
                    'Luminox X Volition Navy SEAL Chronograph, 45 mm, Dive Watch',
                    'Luminox X Volition Leatherback Sea Turtle Giant, 44mm, Dive Watch',
                    'VOLITION Special Edition Navy SEAL, 45mm, Military Dive Watch'
                ]
                var subArray = [
                    '$945.00',
                    '$595.00',
                    '$595.00',
                    '$545.00',
                    '$445.00',
                    '$445.00'
                ]
                var ind2;
                ind2 = $(this).parent('.watch_list3 .item').index('.watch_list3 .item');
                
                $('.content2 .popup').css('display','flex');
                $('.content2 .popup .popup_box .watch_info .watch_img').css('background','url("https://readonly1.cafe24.com/bootstrap/css/../images/watches/land/land_watch_0'+(ind2+1)+'.png") 50% 50% no-repeat').css('background-size','contain');
                $('.watch_info .watch_text dl dt').text(titleArray[ind2]);
                $('.watch_info .watch_text dl dd:eq(0) span').text(subArray[ind2]);
                $('.watch_info .watch_text dl dd:eq(1) span').text(sizeArray3[ind2]);
                $('.watch_info .watch_text dl dd:eq(2) span').text(movArray3[ind2]);
    
                


                $('.pre').click(function(e){
                    e.preventDefault();
                    ind2--;
                    if(ind2==-1){
                        ind2=0;
                    }
                    $('.content2 .popup .popup_box .watch_info .watch_img').css('background','url("https://readonly1.cafe24.com/bootstrap/css/../images/watches/land/land_watch_0'+(ind2+1)+'.png") 50% 50% no-repeat').css('background-size','contain');
                    $('.watch_info .watch_text dl dt').text(titleArray[ind2]);
                    $('.watch_info .watch_text dl dd:eq(0) span').text(subArray[ind2]);
                    $('.watch_info .watch_text dl dd:eq(1) span').text(sizeArray3[ind2]);
                    $('.watch_info .watch_text dl dd:eq(2) span').text(movArray3[ind2]);
                });
                $('.next').click(function(e){
                    e.preventDefault();
                    ind2++;
                    if(ind2==6){
                        ind2=5;
                    }
                    $('.content2 .popup .popup_box .watch_info .watch_img').css('background','url("https://readonly1.cafe24.com/bootstrap/css/../images/watches/land/land_watch_0'+(ind2+1)+'.png") 50% 50% no-repeat').css('background-size','contain');
                    $('.watch_info .watch_text dl dt').text(titleArray[ind2]);
                    $('.watch_info .watch_text dl dd:eq(0) span').text(subArray[ind2]);
                    $('.watch_info .watch_text dl dd:eq(1) span').text(sizeArray3[ind2]);
                    $('.watch_info .watch_text dl dd:eq(2) span').text(movArray3[ind2]);
                });

                
            });
        }
    });

    if(ind1==0){
        $('.watch_list1 .item a').click(function(e){
            e.preventDefault();

            var ind2;
            var titleArray = [
                'F-117 Nighthawk, 44 mm, Pilot Watch',
                'Navy SEAL, 45 mm, Military Dive Watch',
                'Luminox X Volition Navy SEAL Chronograph, 45 mm, Dive Watch',
                'Luminox X Volition Navy SEAL Set, 45 mm, Dive Watch',
                'Luminox X Volition Leatherback Sea Turtle Giant, 44mm, Dive Watch',
                'F-117 Nighthawk, 44 mm, Pilot Watch'
            ]
            var subArray = [
                '$945.00',
                '$595.00',
                '$595.00',
                '$545.00',
                '$445.00',
                '$945.00'
            ]
            ind2 = $(this).parent('.watch_list1 .item').index('.watch_list1 .item');
            
            $('.content2 .popup').css('display','flex');
            $('.content2 .popup .popup_box .watch_info .watch_img').css('background','url("https://readonly1.cafe24.com/bootstrap/css/../images/watches/sea/sea_watch_0'+(ind2+1)+'.png") 50% 50% no-repeat').css('background-size','contain');
            $('.watch_info .watch_text dl dt').text(titleArray[ind2]);
            $('.watch_info .watch_text dl dd:eq(0) span').text(subArray[ind2]);
            $('.watch_info .watch_text dl dd:eq(1) span').text(sizeArray1[ind2]);
            $('.watch_info .watch_text dl dd:eq(2) span').text(movArray1[ind2]);


            

            $('.pre').click(function(e){
                e.preventDefault();
                ind2--;
                if(ind2==-1){
                    ind2=0;
                }
                $('.content2 .popup .popup_box .watch_info .watch_img').css('background','url("https://readonly1.cafe24.com/bootstrap/css/../images/watches/sea/sea_watch_0'+(ind2+1)+'.png") 50% 50% no-repeat').css('background-size','contain');
                $('.watch_info .watch_text dl dt').text(titleArray[ind2]);
                $('.watch_info .watch_text dl dd:eq(0) span').text(subArray[ind2]);
                $('.watch_info .watch_text dl dd:eq(1) span').text(sizeArray1[ind2]);
                $('.watch_info .watch_text dl dd:eq(2) span').text(movArray1[ind2]);
            });
            $('.next').click(function(e){
                e.preventDefault();
                ind2++;
                if(ind2==6){
                    ind2=5;
                }
                $('.content2 .popup .popup_box .watch_info .watch_img').css('background','url("https://readonly1.cafe24.com/bootstrap/css/../images/watches/sea/sea_watch_0'+(ind2+1)+'.png") 50% 50% no-repeat').css('background-size','contain');
                $('.watch_info .watch_text dl dt').text(titleArray[ind2]);
                $('.watch_info .watch_text dl dd:eq(0) span').text(subArray[ind2]);
                $('.watch_info .watch_text dl dd:eq(1) span').text(sizeArray1[ind2]);
                $('.watch_info .watch_text dl dd:eq(2) span').text(movArray1[ind2]);
            });

            
        });
    }
    

    $('.popup_close').click(function(e){
        e.preventDefault();
        $('.content2 .popup').css('display','none');
    });


    

    
});