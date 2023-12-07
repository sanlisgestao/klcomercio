firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = './templates/painel/painel.html';
    }
})


function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}


function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}


function login() {
    showLoading(5000);

    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(() => {
        hideLoading();
        window.location.href = './templates/painel/painel.html';
    }).catch(error => {
        hideLoading();
        alert(getUserErrorMessage(error));
    });
}


function register() {
    showLoading(2000);
    window.location.href = './index.html'
}


function recoverPassword() {
    showLoading(5000);

    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert('Email enviado com sucesso !!!');
    }).catch(error => {
        hideLoading();
        alert(getUserErrorMessage(error));
    });
}


function togglePasswordErrors() {
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? 'none' : 'block';
}


function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;
    
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}




