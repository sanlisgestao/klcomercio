function voltarHome() {
    window.location.href = '../home/home.html';
}


if (!isNewTransaction()) {
    const uid = getTransactionUid();
    findTransactionByUid(uid);
}


function getTransactionUid() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('uid');
}


function isNewTransaction() {
    return getTransactionUid() ? false : true;
}


function findTransactionByUid(uid) {
    showLoading(5000);
    transactionService.findByUid(uid)
        .then(transaction => {
            hideLoading();
            if (transaction) {
                fillTransactionScreen(transaction);
                toggleSaveButtonDisable();
            } else {
                alert('Transação não encontrada !!!');
                window.location.href = '../home/home.html';
            }
        })
        .catch(() => {
            hideLoading();
            alert('Erro ao recuperar a transação !!!');
            window.location.href = '../home/home.html';
        });
}


function fillTransactionScreen(transaction) {
    if (transaction.type == 'expense') {
        form.typeExpense().checked = true;
    } else {
        form.typeIncome().checked = true;
    }

    form.date().value = transaction.date;
    form.currency().value = transaction.money.currency;
    form.value().value = transaction.money.value;
    form.transactionType().value = transaction.transactionType;

    if (transaction.description) {
        form.description().value = transaction.description;
    }
}


function saveTransaction() {
    const transaction = createTransaction();

    if (isNewTransaction()) {
        save(transaction);
    } else {
        update(transaction);
    }
}


function save(transaction) {
    showLoading(5000);
    transactionService.save(transaction)
        .then(() => {
            hideLoading();
            window.location.href = '../home/home.html';
        })
        .catch(() => {
            hideLoading();
            alert('Erro ao salvar a transação !!!');
        })
}


function update(transaction) {
    showLoading(5000);
    transactionService.update(transaction)
        .then(() => {
            hideLoading();
            window.location.href = '../home/home.html';
        })
        .catch(() => {
            hideLoading();
            alert('Erro ao atualizar a transação !!!');
        });
}


function createTransaction() {
    return {
        type: form.typeExpense().checked ? 'expense' : 'income',
        date: form.date().value,
        money: {
            currency: form.currency().value,
            value: parseFloat(form.value().value)
        },
        transactionType: form.transactionType().value,
        description: form.description().value,
        user: {
            uid: firebase.auth().currentUser.uid
        }
    };
}


function onChangeDate() {
    const date = form.date().value;
    form.dateRequiredError().style.display = !date ? 'block' : 'none';

    toggleSaveButtonDisable();
}


function onChangeValue() {
    const value = form.value().value;
    form.valueRequiredError().style.display = !value ? 'block' : 'none';
    form.valueLessOrEqualToZeroError().style.display = value <= 0 ? 'block' : 'none';

    toggleSaveButtonDisable();
}


function onChangeTransactionType() {
    const transactionType = form.transactionType().value;
    form.transactionTypeRequiredError().style.display = !transactionType ? 'block' : 'none';

    toggleSaveButtonDisable();
}


function toggleSaveButtonDisable() {
    form.saveButton().disabled = !isDateValid() || !isValueValid() || !isTransactionTypeValid();
}


function isDateValid() {
    const date = form.date().value;
    if (!date) {
        return false;
    } else if (date == '') {
        return false;
    } else {
        return true;
    } 
}


function isValueValid() {
    const value = form.value().value;
    if (!value) {
        return false;
    } else if (value <= 0) {
        return false;
    } else {
        return true;
    } 
}


function isTransactionTypeValid() {
    const transactionType = form.transactionType().value;
    if (!transactionType) {
        return false;
    } else {
        return true;
    } 
}


const form = {
    typeExpense: () => document.getElementById('expense'),
    typeIncome: () => document.getElementById('income'),

    date: () => document.getElementById('date'),
    currency: () => document.getElementById('currency'),
    value: () => document.getElementById('value'),
    transactionType: () => document.getElementById('transaction-type'),
    description: () => document.getElementById('description'),
    
    saveButton: () => document.getElementById('save-button'),
    
    dateRequiredError: () => document.getElementById('date-required-error'),
    transactionTypeRequiredError: () => document.getElementById('transaction-type-required-error'),
    valueRequiredError: () => document.getElementById('value-required-error'),
    valueLessOrEqualToZeroError: () => document.getElementById('value-less-or-equal-to-zero-error')
}

