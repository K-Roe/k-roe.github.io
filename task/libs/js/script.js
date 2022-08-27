//code for the timeZone API
$('#btnRun').click(function(){
    
    $.ajax({
        url: "./libs/php/timeZone.php",
        type: "POST",
        dataType: "json",
        data:{
            lat: $("#lat").val(),
            lng: $("#lng").val()
        },
        success: function(result) {
            console.log(JSON.stringify(result));
            

            if (result.status.name == "ok") {

                
                $('#sunrise').html(result['data']["sunrise"]);
                $('#sunset').html(result['data']['sunset']);
                $('#countryName').html(result['data']['countryName']);
                $('#timezoneId').html(result['data']['timezoneId']);
                $('#time').html(result['data']['time']);
                
                
            }


        },

        error:function(jqXHR, textStatus, errorThrown) {
        
        }
    })
    
})
// end of code for the timeZone API

//code for the Wikipedia API
$('#btnRuntwo').click(function(){
    
    $.ajax({
        url: "./libs/php/Wikipedia.php",
        type: "POST",
        dataType: "json",
        data:{
            q: $("#q").val(),
            maxRows: $("#maxRows").val()
        },
        success: function(result) {
            console.log(JSON.stringify(result));
            

            if (result.status.name == "ok") {

               let test2= $('#title').html(result['data'][0]['title']);
                $('#summary').html(result['data'][0]['summary']);
                $('#wikipediaUrl').html(result['data'][0]['wikipediaUrl']);
                console.log(test2)
                

                
                
            }


        },

        error:function(jqXHR, textStatus, errorThrown) {
        
        }
    })
    
})
//end of the Wikipedia API

//code for the Weather API
$('#btnRunthree').click(function(){
    
    $.ajax({
        url: "./libs/php/Address.php",
        type: "POST",
        dataType: "json",
        data:{
            lat: $("#latthree").val(),
            lng: $("#lngthree").val()
   
            
            
        },
        success: function(result) {
            console.log(JSON.stringify(result));
            

            if (result.status.name == "ok") {

                
                $('#houseNumber').html(result['data']["address"]["houseNumber"]);
                $('#street').html(result['data']["address"]["street"]);
                $('#postalcode').html(result['data']["address"]["postalcode"]);
                $('#locality').html(result['data']["address"]["locality"]);
                $('#countryCode').html(result['data']["address"]["countryCode"]);
               



                
                
            }


        },

        error:function(jqXHR, textStatus, errorThrown) {
        
        }
    })
    
})