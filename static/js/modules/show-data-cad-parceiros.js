$(document).ready(function () {
    maxItem();
    maxPartner();
    ShowAllDataItemsList();
    ShowAllDataPartnersList();
});



const Cadastros = "AKfycbxV1810EEy4wxnikzwUnLlEJCUebwFo6b4_VfFCTYovVW2eTwjdyrH75mIo7h5AslgxBA";
// script file sig-cadastros
// https://script.google.com/macros/s/AKfycbxV1810EEy4wxnikzwUnLlEJCUebwFo6b4_VfFCTYovVW2eTwjdyrH75mIo7h5AslgxBA/exec



function maxItem() {
    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=maxItem",
        function (data) {
            $("input[name='cod_item']").val(data);
        });
}

function SearchEditItem(pNo = "") {
    var no = $('#id_item').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=searchItem&no=" + no,
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
                        var dt = value[16].substring(0, 10);
                        document.getElementsByName("id_item")[0].value = value[0];
                        document.getElementsByName("item_nm")[0].value = value[1];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        var dtval = value[28].substring(0, 10);
                        document.getElementsByName("code")[i].value = value[0];
                        document.getElementsByName("validate")[i].value = dtval;
                        document.getElementsByName("price")[i].value = value[29];
                        document.getElementsByName("amt")[i].value = value[30];
                    }
                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalListItem').modal('hide');
}

function SearchPrice(pNo = "") {
    var no = $('#id_item').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=searchItem&no=" + no,
        function (data) {
            if (data == "NOT FOUND") {
                alert('Número Não Encontrado!!!');
            }
            else {
                var record = data.record;

                var i = 0;
                $.each(record, function (key, value) {
                    if (i == 0) {
                        var dt = value[16].substring(0, 10);
                        document.getElementsByName("id_item")[0].value = value[0];
                        document.getElementsByName("item_nm")[0].value = value[1];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        document.getElementsByName("id_ins")[i].value = value[14];
                        document.getElementsByName("ins_nm")[i].value = value[15];
                        document.getElementsByName("qty")[i].value = value[17];
                        document.getElementsByName("price")[i].value = value[18];
                    }
                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalPriceList').modal('hide');
}

function SearchItem(pNo = "") {
    var no = $('#id_item').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=searchItem&no=" + no,
        function (data) {
            if (data == "NOT FOUND") {
                alert('Número Não Encontrado!!!');
            }
            else {
                var record = data.record;

                var i = 0;
                $.each(record, function (key, value) {
                    if (i == 0) {
                        var dt = value[16].substring(0, 10);
                        document.getElementsByName("id_item")[0].value = value[0];
                        document.getElementsByName("item_nm")[0].value = value[1];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        document.getElementsByName("id_ins")[i].value = value[14];
                        document.getElementsByName("ins_nm")[i].value = value[15];
                        document.getElementsByName("qty")[i].value = value[17];
                        document.getElementsByName("price")[i].value = value[18];
                    }
                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalListItem').modal('hide');
}


function ShowAllDataPriceList() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=datalistPriceList",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var ID = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (ID == "") ID = value1;

                    });
                    Rows = Rows + '<tr class="text-center" onclick="SearchPrice(' + ID + ')">' + Columns + '</tr>';
                });

                $("#TBodyPrice").html(Rows);
                $("#modalPriceList").modal('show');

            });
    });

}

function ShowAllDataItems() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=datalistItemList",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var ID = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (ID == "") ID = value1;

                    });
                    Rows = Rows + '<tr class="text-center" onclick="SearchItem(' + ID + ')">' + Columns + '</tr>';
                });

                $("#TBodyItem").html(Rows);
                $("#modalItemList").modal('show');

            });
    });

}

function ShowAllDataItemsList() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=datalistItemList",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var ID = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (ID == "") ID = value1;

                    });
                    Rows = Rows + '<tr class="text-center">' + Columns + '</tr>';
                });

                $("#TBodyList").html(Rows);

            });
    });

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////

function maxPartner() {
    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=maxPartner",
        function (data) {
            $("input[name='cod_partner']").val(data);
        });
}

function SearchEditPartner(pNo = "") {
    var no = $('#id_partner').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=searchPartner&no=" + no,
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
                        document.getElementsByName("id_partner")[0].value = value[0];
                        document.getElementsByName("partner")[0].value = value[1];
                        document.getElementsByName("address")[0].value = value[9];
                        document.getElementsByName("city")[0].value = value[3];
                        document.getElementsByName("phone")[0].value = value[2];
                        document.getElementsByName("email")[0].value = value[4];
                    }

                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalPartnerList').modal('hide');
}


function SearchPartner(pNo = "") {
    var no = $('#id_partner').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=searchPartner&no=" + no,
        function (data) {
            if (data == "NOT FOUND") {
                alert('Número Não Encontrado!!!');
            }
            else {
                var record = data.record;

                var i = 0;
                $.each(record, function (key, value) {
                    if (i == 0) {
                        document.getElementsByName("id_partner")[0].value = value[0];
                        document.getElementsByName("partner")[0].value = value[1];
                        document.getElementsByName("address")[0].value = value[9];
                        document.getElementsByName("city")[0].value = value[3];
                        document.getElementsByName("phone")[0].value = value[2];
                        document.getElementsByName("email")[0].value = value[4];
                    }

                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalListaParceiros').modal('hide');
}

function ShowAllDataParceiros() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=datalistPartnerList",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var InvNo = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (InvNo == "") InvNo = value1;

                    });
                    Rows = Rows + '<tr class="text-center" onclick="SearchPartner(' + InvNo + ')">' + Columns + '</tr>';
                });

                $("#TBodyParceiros").html(Rows);
                $("#modalListaParceiros").modal('show');

            });
    });

}

function ShowAllDataPartnersList() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + Cadastros + "/exec?page=datalistPartnerList",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var ID = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (ID == "") ID = value1;

                    });
                    Rows = Rows + '<tr class="text-center">' + Columns + '</tr>';
                });

                $("#TBodyList").html(Rows);

            });
    });

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

