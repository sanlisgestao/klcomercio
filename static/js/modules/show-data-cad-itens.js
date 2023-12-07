$(document).ready(function () {

    maxItem();
    dropdownItens();
    showDataAll();

});


const Cadastros = "AKfycbyLxMwJaC2vWAwu7RqXUhXYzEsL3GYzz3zQOFMw0O4ae9igx_EIt4EWYqGL-PtvmD2Y";
// script file sig-cad-itens
var linkAction = 'https://script.google.com/macros/s/AKfycbyLxMwJaC2vWAwu7RqXUhXYzEsL3GYzz3zQOFMw0O4ae9igx_EIt4EWYqGL-PtvmD2Y/exec';
var linkFormAction = document.querySelector("#form-action");
linkFormAction.setAttribute("action", linkAction);


function maxItem() {
    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=max",
        function (data) {
            $("input[name='cod_item']").val(data);
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

function Search(pNo = "") {
    var no = $('#cod_item').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=search&no=" + no,
        function (data) {
            if (data == "NOT FOUND") {
                alert('Número Não Encontrado!!!');
            }
            else {
                var record = data.record;
                var i = 0;
                $.each(record, function (key, value) {
                    if (i == 0) {
                        document.getElementsByName("id_item")[0].value = value[0];
                        document.getElementsByName("item_nm")[0].value = value[1];
                        document.getElementsByName("un_med")[0].value = value[2];
                        document.getElementsByName("estoque")[0].value = value[3];
                        document.getElementsByName("custo_atual")[0].value = value[16];
                        document.getElementsByName("cod_fabr")[0].value = value[29];
                        document.getElementsByName("cod_barra")[0].value = value[30];
                    }
                    i = i + 1;
                });
            }
        });
    $('#modalShowItem').modal('hide');
    document.getElementById('search-item').style.display = 'block';
}

function showDataItem() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=dropdownItens",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    var ID = "";
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (ID == "") ID = value1;
                    });
                    Rows = Rows + '<tr class="text-center" onclick="Search(' + ID + ')">' + Columns + '</tr>';
                });
                $("#TBodyItem").html(Rows);
                $("#modalShowItem").modal('show');
                document.getElementById('search-item').style.display = 'none';
            });
    });
}

function SearchEdit(pNo = "") {
    var no = $('#cod_item').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=search&no=" + no,
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
                        document.getElementsByName("cod_item")[0].value = value[0];
                        document.getElementsByName("item_nm")[0].value = value[1];
                        document.getElementsByName("un_med")[0].value = value[2];

                        document.getElementsByName("estoque")[0].value = value[3];
                        document.getElementsByName("custo_estoque")[0].value = value[15];
                        document.getElementsByName("custo_atual")[0].value = value[16];
                        document.getElementsByName("custo_padrao")[0].value = value[17];

                        document.getElementsByName("cod_fabr")[0].value = value[29];
                        document.getElementsByName("cod_barra")[0].value = value[30];
                        document.getElementsByName("dun")[0].value = value[31];
                        document.getElementsByName("ncm")[0].value = value[32];

                        document.getElementsByName("peso_bruto")[0].value = value[33];
                        document.getElementsByName("peso_liquido")[0].value = value[34];
                        document.getElementsByName("emb_compra")[0].value = value[35];
                        document.getElementsByName("emb_venda")[0].value = value[36];

                        document.getElementsByName("est_segur")[0].value = value[37];
                        document.getElementsByName("largura")[0].value = value[38];
                        document.getElementsByName("altura")[0].value = value[39];
                        document.getElementsByName("comprimento")[0].value = value[40];

                        document.getElementsByName("tipo_item")[0].value = value[20];
                        document.getElementsByName("categoria")[0].value = value[19];
                        document.getElementsByName("grupo")[0].value = value[21];
                        document.getElementsByName("subgrupo")[0].value = value[22];

                        document.getElementsByName("marca")[0].value = value[18];
                        document.getElementsByName("cor")[0].value = value[23];
                        document.getElementsByName("tamanho")[0].value = value[24];
                        document.getElementsByName("material")[0].value = value[25];

                        document.getElementsByName("ctrl_est")[0].value = value[41];
                        document.getElementsByName("griffe")[0].value = value[26];
                        var dt_griffe_dt_inic = value[27].substring(0, 10);
                        document.getElementsByName("griffe_dt_inic")[0].value = dt_griffe_dt_inic;
                        var dt_griffe_dt_term = value[28].substring(0, 10);
                        document.getElementsByName("griffe_dt_term")[0].value = dt_griffe_dt_term;

                        document.getElementsByName("reg_ent_total")[0].value = value[7];
                        document.getElementsByName("reg_ent_mes0")[0].value = value[4];
                        document.getElementsByName("reg_ent_mes1")[0].value = value[5];
                        document.getElementsByName("reg_ent_mes2")[0].value = value[6];

                        document.getElementsByName("reg_sai_total")[0].value = value[12];
                        document.getElementsByName("reg_sai_mes0")[0].value = value[9];
                        document.getElementsByName("reg_sai_mes1")[0].value = value[10];
                        document.getElementsByName("reg_sai_mes2")[0].value = value[11];

                    }
                    else {
                        if (i > 1) BtnAdd();
                        document.getElementsByName("id_ins")[i].value = value[43];
                        document.getElementsByName("ins_nm")[i].value = value[44];
                        document.getElementsByName("qty")[i].value = value[46];
                        document.getElementsByName("price_padrao")[i].value = value[48];
                        document.getElementsByName("price_atual")[i].value = value[47];
                    }
                    i = i + 1;
                });

                GetTotalInsumos();
            }
        });

    $('#modalShowItem').modal('hide');
}

function showDataEdit() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=dropdownItens",
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
                $("#TBodyItem").html(Rows);
                $("#modalShowItem").modal('show');
            });
    });
}

function showDataAll() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=showDataResumo",
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
                $("#TBodyAllItem").html(Rows);
            });
    });
}
