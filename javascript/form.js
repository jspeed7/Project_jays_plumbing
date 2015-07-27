$(document).ready(function(){
    // Parse.initialize("LrAKjucEmUKZM0uvoNXVdyQn9iJ62AotRMZkdXre", "FGllbpTc82mLqrfOGesycnjWQOXo4dkV8bCkm6qo");

    var parseAPPID = "LrAKjucEmUKZM0uvoNXVdyQn9iJ62AotRMZkdXre";
    var parseJSID = "FGllbpTc82mLqrfOGesycnjWQOXo4dkV8bCkm6qo";
    
    Parse.initialize(parseAPPID, parseJSID);
    var CustomerObject = Parse.Object.extend("CustomerInfo");
    var customerObject = new CustomerObject ();
    
    
    $("#form").on("submit", function(e){
        e.preventDefault();
    
        console.log("handling the submit");
    
    
        var data = {};
            data.Name = $("#customer_name").val();
            data.Phone = $("#customer_phone").val();
            data.Address = $("#customer_address").val();
            data.Zip_code = $("#customer_zipcode").val();
            data.Email = $("#customer_email").val();
            data.TimeAvailable = $("#time_to_call").val();
            data.Cust_Type = $("#customer_type").val();
            data.Discription = $("#customer_comment").val();
            data.I_Have = $("#I_Have").val();
            data.With_ = $("#With_").val();
        
    
        customerObject.save({
            Name: data.Name, 
            Phone: data.Phone, 
            Address: data.Address, 
            Zip_code: data.Zip_code, 
            Email: data.Email, 
            TimeAvailable: data.TimeAvailable, 
            Cust_Type: data.Cust_Type, 
            Discription: data.Discription, 
            I_Have: data.I_Have, 
            With_: data.With_}, 
            {
            success: function(object) {
                alert("Success");
             }
        });
    });
});



// Code snipet for index for Ajax XMLHttpRequest once live on server

// <!--/* Begin AJAX XMLHttpRequest */-->    
//         <script>
        
//             var xhr = new XMLHttpRequest();
            
//             xhr.onreadystatechange = function () {
//             	if (xhr.readyState === 4) {
//             		document.getElementById("ajax").innerHTML = xhr.responseText;
//             	}
//             	while (xhr.readyState === 2) {
//             	    document.getElementById("ajax").innerHTML = xhr.responseText;
            	    
//             	}
            	
//             };
//             <!--/* Open Request */-->
            
//             xhr.open('POST', 'https://api.cloud9charts.com/live/{api.parse.com/1/CustomerInfo}');
            
//             <!--/* Send Request */-->
            
//              function sendAJAX() {
//             	xhr.send();
//             }
//         </script>

// 

//============================== Customer Review ===============================//

//================================  User Ratings ===============================// 
//=========================== Jquery, Ajax & Parse.com =========================//

// 	$('.ratings_stars').hover(
	    
// 	    // Handles the mouseover
// 	    function() {
// 	        $(this).prevAll().andSelf().addClass('ratings_over');
// 	        $(this).nextAll().removeClass('ratings_vote'); 
// 	    },
	    
// 	    // Handles the mouseout
// 	    function() {
// 	        $(this).prevAll().andSelf().removeClass('ratings_over');
// 	        set_votes($(this).parent());
// 	    }
// 	);
	
// 	$('.rate_widget').each(function(i) {
// 	    var widget = this;
// 	    var out_data = {
// 	        widget_id : $(widget).attr('id'),
// 	        fetch: 1
// 	    };
// 	    $.post(
// 	        'ratings.js',
// 	        out_data,
// 	        function(INFO) {
// 	            $(widget).data( 'fsr', INFO );
// 	            set_votes(widget);
// 	        },
// 	        'json'
// 	    );
// 	});
	
	
	
	
// 	function set_votes(widget) {
	 
// 	    var avg = $(widget).data('fsr').whole_avg;
// 	    var votes = $(widget).data('fsr').number_votes;
// 	    var exact = $(widget).data('fsr').dec_avg;
	     
// 	    $(widget).find('.star_' + avg).prevAll().andSelf().addClass('ratings_vote');
// 	    $(widget).find('.star_' + avg).nextAll().removeClass('ratings_vote'); 
// 	    $(widget).find('.total_votes').text( votes + ' votes recorded (' + exact + ' rating)' );
// 	}
	
// 	// click handler
	
// 	$('.ratings_stars').bind('click', function() {
// 	    var star = this;
// 	    var widget = $(this).parent();
	     
// 	    var clicked_data = {
// 	        clicked_on : $(star).attr('class'),
// 	        widget_id : widget.attr('id')
// 	    };
// 	    $.post(
// 	        'ratings.php',
// 	        clicked_data,
// 	        function(INFO) {
// 	            widget.data( 'fsr', INFO );
// 	            set_votes(widget);
// 	        },
// 	        'json'
// 	    ); 
// 	});



// });

