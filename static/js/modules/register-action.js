$(document).ready(function () {
    //FormValidation();
    BtnAdd();
    SetCurrentDate();
});


function GetPrint() {
    window.print();
}


function refresh() {
    location.reload();
}


// bootstrap validation
function FormValidation() {
    (function () {
        'use strict'
        const forms = document.querySelectorAll('.needs-validation')
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    })()
}


function SetCurrentDate() {
    const date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m;

    let CurrDate = y + '-' + m + '-' + d;

    $('input[name="dt_reg"]').val(CurrDate);
    $('input[name="griffe_dt_inic"]').val(CurrDate);
    $('input[name="griffe_dt_term"]').val(CurrDate);
    $('input[name="tabpreco_dt_inic"]').val(CurrDate);
    $('input[name="tabpreco_dt_term"]').val(CurrDate);
}


function BtnAdd() {
    var v = $("#TRow").clone().appendTo("#TBody");
    $(v).find("input").val("");
    $(v).removeClass("d-none");
    $(v).find("th").first().html($('#TBody tr').length - 1);
}


function BtnDel(v) {
    $(v).parent().parent().remove();
    GetTotal();
}


function Calc(v) {
    var index = $(v).parent().parent().index();

    var qty = document.getElementsByName("qty")[index].value;
    var price = document.getElementsByName("price")[index].value;

    var amt = qty * price;
    document.getElementsByName("amt")[index].value = parseFloat(amt).toFixed(2);

    GetTotal();
}


function GetTotal() {
    var sum = 0;
    var amts = document.getElementsByName("amt");

    for (let index = 0; index < amts.length; index++) {
        var amt = amts[index].value;
        sum = +(sum) + +(amt);
    }
    var valorItensFormatado = parseFloat(sum).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("RegTItem").value = valorItensFormatado;

    var add = document.getElementById("RegAdd").value;
    var discount = document.getElementById("RegDiscount").value;
    var net = +(sum) + +(add) - +(discount);
    var totalFormatado = parseFloat(net).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("RegTotal").value = totalFormatado;
}


function CalcInsumos(v) {
    var index = $(v).parent().parent().index();

    var qty = document.getElementsByName("qty")[index].value;
    document.getElementsByName("qty")[index].value = parseFloat(qty).toFixed(4);

    var price = document.getElementsByName("price_atual")[index].value;
    document.getElementsByName("price_atual")[index].value = parseFloat(price).toFixed(4);

    var amt = qty * price;
    document.getElementsByName("amt")[index].value = parseFloat(amt).toFixed(4);

    GetTotalInsumos();
}


function GetTotalInsumos() {
    var sum = 0;
    var amts = document.getElementsByName("amt");

    for (let index = 0; index < amts.length; index++) {
        var amt = amts[index].value;
        sum = +(sum) + +(amt);
    }
    var valorItensFormatado = parseFloat(sum).toFixed(4).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("TotalInsumos").value = valorItensFormatado;
}


function CalcPadraoInsumos(v) {
    var index = $(v).parent().parent().index();

    var qty = document.getElementsByName("qty")[index].value;
    document.getElementsByName("qty")[index].value = parseFloat(qty).toFixed(4);

    var price = document.getElementsByName("price_padrao")[index].value;
    document.getElementsByName("price_padrao")[index].value = parseFloat(price).toFixed(4);

    var amt = qty * price;
    document.getElementsByName("amt_padrao")[index].value = parseFloat(amt).toFixed(4);

    GetPadraoTotalInsumos();
}


function GetPadraoTotalInsumos() {
    var sum = 0;
    var amts = document.getElementsByName("amt_padrao");

    for (let index = 0; index < amts.length; index++) {
        var amt = amts[index].value;
        sum = +(sum) + +(amt);
    }
    var valorItensFormatado = parseFloat(sum).toFixed(4).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("TotalPadrão").value = valorItensFormatado;
}


function CalcInsumosQtd(v) {
	CalcInsumos(v);
	CalcPadraoInsumos(v);
}


function CalcProd(v) {
    var index = $(v).parent().parent().index();

    var qtd_prod = document.getElementsByName("qtd_prod")[0].value;

    var qty = document.getElementsByName("qty")[index].value;
    var qtyTotal = qty * qtd_prod;
    document.getElementsByName("qtyTotal")[index].value = parseFloat(qtyTotal).toFixed(4);

    var price = document.getElementsByName("price")[index].value;
    document.getElementsByName("price")[index].value = parseFloat(price).toFixed(4);

    var amt = qtyTotal * price;
    document.getElementsByName("amt")[index].value = parseFloat(amt).toFixed(4);

    GetTotalProd();
}


function GetTotalProd() {
    var sum = 0;
    var amts = document.getElementsByName("amt");

    for (let index = 0; index < amts.length; index++) {
        var amt = amts[index].value;
        sum = +(sum) + +(amt);
    }

    var valorItensFormatado = parseFloat(sum).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("RegTItem").value = valorItensFormatado;

    var add1 = document.getElementById("RegAdd1").value;
    var add2 = document.getElementById("RegAdd2").value;
    var net = +(sum) + +(add1) + +(add2);
    var totalFormatado = parseFloat(net).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("RegTotal").value = totalFormatado;
}