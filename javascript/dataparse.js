Parse.initialize("LrAKjucEmUKZM0uvoNXVdyQn9iJ62AotRMZkdXre", "FGllbpTc82mLqrfOGesycnjWQOXo4dkV8bCkm6qo");

// //TestApp
// Parse.initialize("s20oA3Ct1fJtPQ7NhVPUowywojSZzobQ2FuxmlCW", "yFLEj7Qg7wAGi7ghQeXCX2KN2AvJ7nnQ5wVacNVS");

// var NewCustomer = Parse.Object.extend("SRF_CustomerInfo");
// var customerSR = new NewCustomer();
// customerSR.save({Name: "Test1",
//     Phone: "502-555-5555",
//     TimeAvailable: "9-12",
//     Address: "Example st."}).then(function(object) {
//   alert("yay! it worked");
// });

// //============================= SRF_CustomerInfo ===============================//


//Extend the native Parse.Object class.
    var NewCustomer = Parse.Object.extend('SRF_CustomerInfo');

    //Instantiate an object of the ListItem class
    var customerSR = new NewCustomer();
    
    
    var custSub = document.getElementById('custData');
    
        
    var custForm = document.getElementById('SRForm');
       
    var customerName = custForm.elements["customer_name"];
    var custName = customerName.value;
    
    
   
// function submitSRForm(){
//      if(document.SRForm.onsubmit())
//      {//this check triggers the validations
//         document.SRForm.submit();
//      }
//     console.log("Submission was successfully logged")
// }
    
    // var custSub = custForm.submit();
    
    // custSub.onclick = function() {
   
    // };
    // $(document).ready(function() {
    // $('custSub').click(function() {
    //     foo('custName');
    
    
    
    $(document).ready(function() {
    $('custData').click(function() {
      foo($('#customer_name').val()).then(function() {
          alert("yay! it worked");
            });
        });
    });
    
    // var button = document.getElementById("custData"),
    // value =  button.form.custData.value;
    
    // button.onclick = function() {
         
    // }
    
    // customerSR.save({Name: custName,
    //         Phone: "502-555-5555",
    //         TimeAvailable: "9-12",
    //         Address: "Example st."}).then(function(object) {
    //       alert("yay! it worked");
    //     });
    
    
    
    
    
       
//         custType = document.getElementById('#customer_type'),
//         custName = document.getElementById('#customer_name'),
//         custPhone = document.getElementById('#customer_phone'),
//         custAvail = document.getElementById('#time_to_call'),
//         custAdd = document.getElementById('#customer_address'),
//         custZip = document.getElementById('#customer_zipcode'),
//         custEmail = document.getElementById('#customer_email'),
//         custHas = document.getElementById('#customer_I_Have'),
//         custWith = document.getElementById('#customer_With'),
//         custNote = document.getElementById('#customer_comment');


        // customer.set("Cust_Type", custType);
        // customer.set("Name", custName),
        // customer.set("PhoneNumb", custPhone),
        // customer.set("TimeAvailable", custAvail();),
        // customer.set("Address", custAdd();),
        // customer.set("Zip_code", custZip();),
        // customer.set("Email", custEmail();),
        // customer.set("I_Have", custHas();),
        // customer.set("With_", custWith();),
        // customer.set("Discription", custNote(););
        
        // //We call the save method, and pass in success and failure callback functions.
        // customer.save(null, {       
        //     success: function(item) {
        //     //Success Callback 
        // },
        // error: function(gameScore, error) {
        //     //Failure Callback
        // }
        // });
    
    
    
    // customer form
    
//     // Customer Name
// function custName() {document.getElementById('#customer_name');
// }
//     // Customer Phone
// function custPhone() {
//     document.getElementById('#customer_phone');
    
// }
    
//     // Customer Address
// function custAdd(){
//     document.getElementById('#customer_address');
// }
    
//     // Customer Zip Code
// function custZip(){ 
//     document.getElementById('#customer_zipcode');
// }
//     // Customer Email
// function custEmail(){ 
//     document.getElementById('#customer_email');
// }
    
//     // Customer Availablity
// function custAvail (){ 
//     document.getElementById('#time_to_call');
// }    

//     // Customer Type
// function custType(){ 
//     document.getElementById('#customer_type');
// }    
//     // Customer Has
// function custHas(){ 
//     document.getElementById('#customer_I_Have');
// }
    
//     // Customer With
// function custWith(){ 
//     document.getElementById('#customer_With'); 
// }
    
//     // Customer Notes
    
    
// function custNote(){
//     document.getElementById('#customer_comment');
// }
    
    
    
//     //Form Submission
    
// function submitBtn() {
//     document.getElementById('#custData');
    
// }