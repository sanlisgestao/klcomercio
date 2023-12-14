$(document).ready(function () {

    maxVendedores();
    dropdownVendedores();
    showDataAllVendedores();

    // dropdownRegiao();
    // dropdownSubRegiao();
    // dropdownRota();

});


const Cadastros = "AKfycbxmTZqdO_unPoTX07tknPsg_nRVmqddzpOeqTVyWNddzBUdGs8HMMSecRFfDHFG6eti";
// script file sig-listas
// https://script.google.com/macros/s/AKfycbxmTZqdO_unPoTX07tknPsg_nRVmqddzpOeqTVyWNddzBUdGs8HMMSecRFfDHFG6eti/exec

const Vendedores = "AKfycbwAUiLIMuhR5AADrRBAxlms1wYbBeYSOeBmInSjVWqQ1bD48_EMbIuvq9Wir1YBYZCo";
// script file sig-cad-vendedores
// https://script.google.com/macros/s/AKfycbwAUiLIMuhR5AADrRBAxlms1wYbBeYSOeBmInSjVWqQ1bD48_EMbIuvq9Wir1YBYZCo/exec
var linkAction = '';
var linkFormAction = document.querySelector("#form-action");
linkFormAction.setAttribute("action", linkAction);

/*
function dropdownRegiao() {
    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=dropdownRegiao",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownRegiao").append(Options);
        });
}

function dropdownSubRegiao() {
    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=dropdownSubRegiao",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownSubRegiao").append(Options);
        });
}

function dropdownRota() {
    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=dropdownRota",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownRota").append(Options);
        });
}

function showDataRegiao() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=showDataRegiao",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyRegiao").html(Rows);
                $("#modalShowRegiao").modal('show');
            });
    });
}

function showDataSubRegiao() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=showDataSubRegiao",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodySubRegiao").html(Rows);
                $("#modalShowSubRegiao").modal('show');
            });
    });
}

function showDataRota() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=showDataRota",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyRota").html(Rows);
                $("#modalShowRota").modal('show');
            });
    });
}
*/

// ****************************************************************************************************

function maxVendedores() {
    $.getJSON("https://script.google.com/macros/s/" + Vendedores + "/exec?page=max",
        function (data) {
            $("input[name='cod_vendedor']").val(data);
        });
}

function dropdownVendedores() {
    $.getJSON("https://script.google.com/macros/s/" + Vendedores + "/exec?page=dropdownVendedores",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownVendedores").append(Options);
        });
}

function SearchEdit(pNo = "") {
    var no = $('#id_item').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + Vendedores + "/exec?page=search&no=" + no,
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
                        document.getElementsByName("cod_vendedor")[0].value = value[0];
                        document.getElementsByName("vendedor_nm")[0].value = value[1];
                        document.getElementsByName("comissao")[0].value = value[2];
                        document.getElementsByName("telefone")[0].value = value[15];
                        document.getElementsByName("email")[0].value = value[16];

                        document.getElementsByName("rota")[0].value = value[12];
                        document.getElementsByName("subregiao")[0].value = value[13];
                        document.getElementsByName("regiao")[0].value = value[14];
                        document.getElementsByName("partic")[0].value = value[7];

                        document.getElementsByName("reg_sai_mes0")[0].value = value[5];
                        document.getElementsByName("reg_sai_mes1")[0].value = value[4];
                        document.getElementsByName("reg_sai_mes2")[0].value = value[3];
                        document.getElementsByName("reg_sai_total")[0].value = value[6];

                        document.getElementsByName("reg_com_mes0")[0].value = value[10];
                        document.getElementsByName("reg_com_mes1")[0].value = value[9];
                        document.getElementsByName("reg_com_mes2")[0].value = value[8];
                        document.getElementsByName("reg_com_total")[0].value = value[11];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        document.getElementsByName('id_vendedor')[i].value = value[22];
                    }
                    i = i + 1;
                });

            }
        });

    $('#modalShowVendedor').modal('hide');
}

function showDataEdit() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Vendedores + "/exec?page=showDataVendedores",
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
                $("#TBodyVendedor").html(Rows);
                $("#modalShowVendedor").modal('show');
            });
    });
}

function showDataAllVendedores() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Vendedores + "/exec?page=showDataComissao",
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
                $("#TBodyAllVendedor").html(Rows);
            });
    });
}

function showDataAllVendedoresRota() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Vendedores + "/exec?page=showDataRota",
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
                $("#TBodyAllVendedorRota").html(Rows);
            });
    });
}