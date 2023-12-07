$(document).ready(function () {
    MaxRegistros();
    ShowAllDataRegistrosMargem();
});



const GoogleRegistros = 'AKfycbz1NJwzLspo1pf1GSi7Xyr4RY8ruJ-VrxeD7CcVakj-eyYdKUjvN2JcgSsldurl8q4f';
// script file sig-reg-producao
var linkAction = 'https://script.google.com/macros/s/AKfycbz1NJwzLspo1pf1GSi7Xyr4RY8ruJ-VrxeD7CcVakj-eyYdKUjvN2JcgSsldurl8q4f/exec';
var linkFormAction = document.querySelector('#form-action');
linkFormAction.setAttribute('action', linkAction);



function MaxRegistros() {
    $.getJSON('https://script.google.com/macros/s/' + GoogleRegistros + '/exec?page=max',
        function (data) {
            $('input[name="inv_no"]').val(data);
        });
}

function SearchRegistros(pNo = '') {
    var no = $('#inv_no').val();
    if (pNo != '') no = pNo;

    $.getJSON('https://script.google.com/macros/s/' + GoogleRegistros + '/exec?page=search&no=' + no,
        function (data) {
            if (data == 'NOT FOUND') {
                alert('Número Não Encontrado!!!');
            }
            else {
                var record = data.record;

                var StartRow = data.SR;
                var RowCount = data.CNT;

                $('#IsNew').val('N');
                $('#StartRow').val(StartRow);
                $('#RowCount').val(RowCount);

                var i = 0;
                $.each(record, function (key, value) {
                    if (i == 0) {
                        var dt = value[46].substring(0, 10);
                        document.getElementsByName('finalidade')[0].value = value[1];
                        document.getElementsByName('inv_no')[0].value = value[0];
                        document.getElementsByName('dt_reg')[0].value = dt;
                        document.getElementsByName('status_registro')[0].value = value[3];
                        document.getElementsByName('vendedor')[0].value = value[5];
                        document.getElementsByName('comissao')[0].value = value[19]*100;
                        document.getElementsByName('conta')[0].value = value[41];
                        document.getElementsByName('ccusto')[0].value = value[42];

                        document.getElementsByName('id_parceiro')[0].value = value[22];
                        document.getElementsByName('parceiro')[0].value = value[4];
                        document.getElementsByName('telefone')[0].value = value[24];
                        document.getElementsByName('cidade')[0].value = value[25];
                        document.getElementsByName('endereco')[0].value = value[26];
                        document.getElementsByName('email')[0].value = value[27];
                        document.getElementsByName('cnpj_cpf')[0].value = value[28];
                        document.getElementsByName('ie_rg')[0].value = value[29];
                        document.getElementsByName('bairro')[0].value = value[30];
                        document.getElementsByName('cep')[0].value = value[31];
                        document.getElementsByName('transportadora')[0].value = value[6];
                        document.getElementsByName('vr_frete')[0].value = value[21];

                        document.getElementsByName('vr_acrescimo')[0].value = value[16];
                        document.getElementsByName('vr_desconto')[0].value = value[17];
                        document.getElementsByName('tipo_pgto')[0].value = value[10];
                        document.getElementsByName('cond_pgto')[0].value = value[9];
                        document.getElementsByName('qtd_parc')[0].value = value[11];
                        document.getElementsByName('prazo_parc')[0].value = value[18];
                        document.getElementsByName('status_pgto')[0].value = value[13];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        var dtval = value[30].substring(0, 10);
                        document.getElementsByName('id_ins')[i].value = value[26];
                        document.getElementsByName('ins_nm')[i].value = value[27];
                        document.getElementsByName('qty')[i].value = value[28];
                        document.getElementsByName('lote')[i].value = value[29];
                        document.getElementsByName('validade')[i].value = dtval;
                        document.getElementsByName('price')[i].value = value[31];
                        document.getElementsByName('amt')[i].value = value[32];
                    }
                    i = i + 1;
                });
                GetTotalProd();
            }
        });
    $('#modalListaRegistros').modal('hide');
}

function ShowAllDataRegistros() {
    $(document).ready(function () {
        $.getJSON('https://script.google.com/macros/s/' + GoogleRegistros + '/exec?page=all',
            function (data) {
                var Table = '', Rows = '', Columns = '';
                $.each(data, function (key, value) {
                    var InvNo = '';
                    Columns = '';
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (InvNo == '') InvNo = value1;
                    });
                    Rows = Rows + '<tr class="text-center" onclick="SearchRegistros(' + InvNo + ')">' + Columns + '</tr>';
                });
                $('#TBodyRegistros').html(Rows);
                $('#modalListaRegistros').modal('show');
            });
    });
}

function ShowAllDataRegistrosGeral() {
    $(document).ready(function () {
        $.getJSON('https://script.google.com/macros/s/' + GoogleRegistros + '/exec?page=allGeral',
            function (data) {
                var Table = '', Rows = '', Columns = '';
                $.each(data, function (key, value) {
                    var InvNo = '';
                    Columns = '';
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (InvNo == '') InvNo = value1;
                    });
                    Rows = Rows + '<tr class="text-center">' + Columns + '</tr>';
                });
                $('#TBodyGeral').html(Rows);
            });
    });
}

function ShowAllDataRegistrosMargem() {
    $(document).ready(function () {
        $.getJSON('https://script.google.com/macros/s/' + GoogleRegistros + '/exec?page=allMargem',
            function (data) {
                var Table = '', Rows = '', Columns = '';
                $.each(data, function (key, value) {
                    var InvNo = '';
                    Columns = '';
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (InvNo == '') InvNo = value1;
                    });
                    Rows = Rows + '<tr class="text-center">' + Columns + '</tr>';
                });
                $('#TBodyMargem').html(Rows);
            });
    });
}