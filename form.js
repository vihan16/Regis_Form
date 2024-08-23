function validateForm(){
    const name = document.getElementById("name").value;
    console.log(name)
    const nameError = document.getElementById("name-error");
    nameError.textContent = "";

    let isValid = true;
    if (name === "" ||/\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }
    return isValid;
}
function validatePhoneNumber() {
    // Get and trim phone number input
    const phoneNumber = document.getElementById('phonenumber').value.trim();
    console.log(phoneNumber)

    // Regex pattern for 10-digit phone number
    const pattern = /^\d{10}$/;

    // Validate phone number and update message
    const isValid = pattern.test(phoneNumber);
    console.log(isValid)
    document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 10-digit phone number.';

    // Return validation status
    return isValid;
}

document.addEventListener('DOMContentLoaded', function() {

    // Event listener for form submission
    document.getElementById('validationCheck').addEventListener('submit', function(event) {

        // Validate phone number; prevent submission if invalid
        if (!validatePhoneNumber()) {
            event.preventDefault(); // Stops form submission for invalid number
        }
    });
});

