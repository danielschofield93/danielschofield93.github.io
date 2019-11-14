function validate()
{
    var emailField = document.getElementById("email-input");
    if(!emailField.checkValidity())
    {
        var emailValidationMessage = document.getElementById("email-validation-message");
        emailValidationMessage.innerHTML = emailField.validationMessage;
    }
}