$(document).ready(function () {

    maxTabela();
    dropdownItens()
    dropdownTabela();
    showDataAllTabela();

});


const Cadastros = "AKfycbyLxMwJaC2vWAwu7RqXUhXYzEsL3GYzz3zQOFMw0O4ae9igx_EIt4EWYqGL-PtvmD2Y";
// script file sig-itens
// https://script.google.com/macros/s/AKfycbyLxMwJaC2vWAwu7RqXUhXYzEsL3GYzz3zQOFMw0O4ae9igx_EIt4EWYqGL-PtvmD2Y/exec

const Tabelas = "AKfycbz2eU2dsbYZ6VsiddV6fij75GaQmCH82JbZ6rWKS7iTh4UVMGe61XrOtMAS2FoFMIjX";
// script file sig-cad-tabpreco
var linkAction = 'https://script.google.com/macros/s/AKfycbz2eU2dsbYZ6VsiddV6fij75GaQmCH82JbZ6rWKS7iTh4UVMGe61XrOtMAS2FoFMIjX/exec';
var linkFormAction = document.querySelector("#form-action");
linkFormAction.setAttribute("action", linkAction);


function maxTabela() {
    $.getJSON("https://script.google.com/macros/s/" + Tabelas + "/exec?page=max",
        function (data) {
            $("input[name='id_tabpreco']").val(data);
        });
}

function dropdownItens() {
    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=dropdownItens",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownItens").append(Options);
        });
}

function dropdownTabela() {
    $.getJSON("https://script.google.com/macros/s/" + Tabelas + "/exec?page=dropdownTabela",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownTabela").append(Options);
        });
}

function SearchEdit(pNo = "") {
    var no = $('#id_tabpreco').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + Tabelas + "/exec?page=search&no=" + no,
        function (data) {
            if (data == "NOT FOUND") {
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
                        document.getElementsByName("id_tabpreco")[0].value = value[0];
                        document.getElementsByName("tabpreco_nm")[0].value = value[1];

                        document.getElementsByName("comissao")[0].value = value[2];
                        document.getElementsByName("frete")[0].value = value[3];
                        document.getElementsByName("mrg_atacado")[0].value = value[4];
                        document.getElementsByName("mrg_varejo")[0].value = value[5];

                        document.getElementsByName("pis")[0].value = value[6];
                        document.getElementsByName("cofins")[0].value = value[7];
                        document.getElementsByName("icm")[0].value = value[8];
                        document.getElementsByName("ipi")[0].value = value[9];

                        document.getElementsByName("simples")[0].value = value[10];
                        document.getElementsByName("icm_st")[0].value = value[11];
                        document.getElementsByName("mva")[0].value = value[12];
                        document.getElementsByName("iss")[0].value = value[13];

                        document.getElementsByName("outros")[0].value = value[14];
                        document.getElementsByName("ativo")[0].value = value[15];

                        var dt_tabpreco_dt_inic = value[16].substring(0, 10);
                        document.getElementsByName("tabpreco_dt_inic")[0].value = dt_tabpreco_dt_inic;
                        var dt_tabpreco_dt_term = value[17].substring(0, 10);
                        document.getElementsByName("tabpreco_dt_term")[0].value = dt_tabpreco_dt_term;

                        document.getElementsByName("comissao_ativo")[0].value = value[18];
                        document.getElementsByName("frete_ativo")[0].value = value[19];
                        document.getElementsByName("mrg_atacado_ativo")[0].value = value[20];
                        document.getElementsByName("mrg_varejo_ativo")[0].value = value[21];

                        document.getElementsByName("pis_ativo")[0].value = value[22];
                        document.getElementsByName("cofins_ativo")[0].value = value[23];
                        document.getElementsByName("icm_ativo")[0].value = value[24];
                        document.getElementsByName("ipi_ativo")[0].value = value[25];

                        document.getElementsByName("simples_ativo")[0].value = value[26];
                        document.getElementsByName("icm_st_ativo")[0].value = value[27];
                        document.getElementsByName("mva_ativo")[0].value = value[28];
                        document.getElementsByName("iss_ativo")[0].value = value[29];

                        document.getElementsByName("outros_ativo")[0].value = value[30];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        document.getElementsByName("id_item")[i].value = value[32];
                        document.getElementsByName("item_nm")[i].value = value[33];
                        document.getElementsByName("qtd_estoque")[i].value = value[35];
                        document.getElementsByName("cst_atual")[i].value = value[38];
                        document.getElementsByName("preco_atacado")[i].value = value[36];
                        document.getElementsByName("preco_varejo")[i].value = value[37];

                    }
                    i = i + 1;
                });

                // GetTotalInsumos();
            }
        });

    $('#modalShowTabela').modal('hide');
}

function showDataEdit() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Tabelas + "/exec?page=dropdownTabela",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    var ID = "";
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (ID == "") ID = value1;
                    });
                    Rows = Rows + '<tr class="text-center" onclick="SearchEdit(' + ID + ')">' + Columns + '</tr>';
                });
                $("#TBodyTabela").html(Rows);
                $("#modalShowTabela").modal('show');
            });
    });
}

function showDataAllTabela() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Tabelas + "/exec?page=showDataTabela",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    var ID = "";
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (ID == "") ID = value1;
                    });
                    Rows = Rows + '<tr class="text-right tr-width tr-card">' + Columns + '</tr>';
                });
                $("#TBodyAllTabela").html(Rows);
            });
    });
}