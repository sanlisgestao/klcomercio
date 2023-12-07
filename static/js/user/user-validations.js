const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    
    loginButton: () => document.getElementById('login-button'),
    registerButton: () => document.getElementById('register-button'),
    
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error'),
    recoverPasswordButton: () => document.getElementById('recover-password-button'),

    confirmPassword: () => document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnot-match-error'),
}


function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}


function isEmailValid() {
    const email = form.email().value;

    if (!email) {
        return false;
    }
    return validateEmail(email);
}


function isPasswordValid() {
    return form.password().value ? true : false;
}


function isConfirmPasswordValid() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    if (password == confirmPassword){
        return form.confirmPassword().value ? true : false;
    } else {
        return false
    }
}


function toggleEmailErrors() {
    const email = form.email().value;

    form.emailRequiredError().style.display = email ? 'none' : 'block';
    form.emailInvalidError().style.display = validateEmail(email) ? 'none' : 'block';
}