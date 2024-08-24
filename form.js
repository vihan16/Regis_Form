
function validatePhoneNumber() {
   
    const phoneNumber = document.getElementById('phonenumber').value.trim();
    console.log(phoneNumber)

    const pattern = /^\d{10}$/;

    const isValid = pattern.test(phoneNumber);
    console.log(isValid)
    document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 10-digit phone number.';

    return isValid;
}
function validateName(){
    const fullName = document.getElementById('name').value;

    let pattern =/\d/;
    const isValid = !pattern.test(fullName)
    document.getElementById('nameValidationMsg').textContent = isValid?''  : ' Plesase enter a valid name'
   return isValid
}
function validateEmail(){
    const emailId = document.getElementById("email").value;
    
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('validationCheck').addEventListener('submit', function(event) {
       
        if (!validatePhoneNumber()) {
            event.preventDefault(); 
        }
        if (!validateName()){
            event.preventDefault();
        }
        
    });

});

