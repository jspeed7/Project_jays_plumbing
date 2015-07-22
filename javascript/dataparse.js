// Parse.initialize("LrAKjucEmUKZM0uvoNXVdyQn9iJ62AotRMZkdXre", "FGllbpTc82mLqrfOGesycnjWQOXo4dkV8bCkm6qo");

//TestApp
Parse.initialize("s20oA3Ct1fJtPQ7NhVPUowywojSZzobQ2FuxmlCW", "yFLEj7Qg7wAGi7ghQeXCX2KN2AvJ7nnQ5wVacNVS");

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });

//============================= SRF_CustomerInfo ===============================//


//Extend the native Parse.Object class.
    var NewCustomer = Parse.Object.extend('SRF_CustomerInfo');

    //Instantiate an object of the ListItem class
    var customer = new NewCustomer(),
        submitBtn = document.getElementById('#custData'),
        custType = document.getElementById('#customer_type'),
        custName = document.getElementById('#customer_name'),
        custPhone = document.getElementById('#customer_phone'),
        custAvail = document.getElementById('#time_to_call'),
        custAdd = document.getElementById('#customer_address'),
        custZip = document.getElementById('#customer_zipcode'),
        custEmail = document.getElementById('#customer_email'),
        custHas = document.getElementById('#customer_I_Have'),
        custWith = document.getElementById('#customer_With'),
        custNote = document.getElementById('#customer_comment');


    submitBtn.on('click', function(e) {
        
        customer.set("Cust_Type", custType);
        customer.set("Name", custName);
        customer.set("PhoneNumb", custPhone);
        customer.set("TimeAvailable", custAvail);
        customer.set("Address", custAdd);
        customer.set("Zip_code", custZip);
        customer.set("Email", custEmail);
        customer.set("I_Have", custHas);
        customer.set("With_", custWith);
        customer.set("Discription", custNote);
        
        //We call the save method, and pass in success and failure callback functions.
        customer.save(null, {       
            success: function(item) {
            //Success Callback 
        },
        error: function(gameScore, error) {
            //Failure Callback
        }
        });
    });