function onChangeEmail() {
    toggleRegisterButtonDisable();
    toggleEmailErrors();
}


function onChangePassword() {
    validatePasswordsMatch();
    togglePasswordErrors();
    toggleRegisterButtonDisable();
}


function onChangeConfirmPassword() {
    validatePasswordsMatch();
    toggleRegisterButtonDisable()
}


function login() {
    showLoading(2000);
    window.location.href = '../../templates/painel/painel.html'
}


function register() {
    showLoading(5000);

    const email = form.email().value;
    const password = form.password().value;

    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        hideLoading();
        window.location.href = '../../templates/painel/painel.html';
    }).catch(error => {
        hideLoading();
        alert(getUserErrorMessage(error));
    })
}


function validatePasswordsMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.confirmPasswordDoesntMatchError().style.display = password == confirmPassword ? 'none' : 'block';
}


function togglePasswordErrors() {
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? 'none' : 'block';
    form.passwordMinLengthError().style.display = password.length >= 6 ? 'none' : 'block';
}


function toggleRegisterButtonDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    const confirmPasswordValid = isConfirmPasswordValid();

    form.registerButton().disabled = !emailValid || !passwordValid || !confirmPasswordValid;
}