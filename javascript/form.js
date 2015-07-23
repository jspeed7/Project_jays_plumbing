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
    
    
    
    // var xmlhttp = {};
    //     if (window.XMLHttpRequest)
    //   {// code for IE7+, Firefox, Chrome, Opera, Safari
    //   xmlhttp= new XMLHttpRequest();
    //   }
    // else
    //   {// code for IE6, IE5
    //   xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
    // }
    
    
    // // var xhr = new XMLHttpRequest();


    // xmlhttp.onreadystatechange = function () {
    // 	if (xmlhttp.readyState === 4) {
    // 		document.getElementById("ajax").innerHTML = xmlhttp.responseText;
    // 	}
    // };

    // xmlhttp.open('POST', 'https://api.parse.com/1/CustomerInfo');

    // function sendAJAX() {
    // 	xmlhttp.send();
    // }


    

    
    
    
    
    
    
    
    // $("#form").on("submit", function(e){
    //     e.preventDefault();
        
    //     console.log("handling the submit");
    //     // add error handling here
    //     // gather the form data
        
    //     var data = {};
    //     data.Name = $("#customer_name").val();
    //     data.Phone = $("#customer_phone").val();
    //     data.Address = $("#customer_address").val();
    //     data.Zip_code = $("#customer_zipcode").val();
    //     data.Email = $("#customer_email").val();
    //     data.TimeAvailable = $("#time_to_call").val();
    //     data.Cust_Type = $("#customer_type").val();
    //     data.Discription = $("#customer_comment").val();
    //     data.I_Have = $("#I_Have").val();
    //     data.With_ = $("#With_").val();
        
        // var customerObject = new CustomerObject ();
        // customerObject.save(data, {
        //     success:function() {
        //         console.log("Success");
        //         alert("Thanks for choosing Jay's Plumbing!");
        //     },
        //     error:function(e) {
        //         console.dir(e);
        //     }
        // });
        
    // });

});