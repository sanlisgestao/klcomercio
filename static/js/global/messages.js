function getUserErrorMessage(error) {
    if (error.code == 'auth/user-not-found') {
        return 'Usuário Não Encontrado !!!';
    }
    if (error.code == 'auth/invalid-login-credentials') {
        return 'Usuário ou Senha inválidos !!!';
    }
    if (error.code == 'auth/invalid-email') {
        return 'E-mail inválido !!!';
    }
    if (error.code == 'auth/missing-email') {
        return 'O campo E-mail está vazio !!!';
    }
    if (error.code == 'auth/email-already-in-use') {
        return 'Email já está em uso !!!';
    }
    if (error.code == 'auth/internal-error') {
        return 'O campo Senha está vazio !!!';
    }
    if (error.code == 'auth/weak-password') {
        return 'O campo Senha deve ter no mínimo 6 caracteres !!!';
    }
    return error.message;
}
