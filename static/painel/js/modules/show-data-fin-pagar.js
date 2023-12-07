$(document).ready(function () {
    maxItem();
    maxPartner();
});



const GoogleRegistros = 'AKfycbxV1810EEy4wxnikzwUnLlEJCUebwFo6b4_VfFCTYovVW2eTwjdyrH75mIo7h5AslgxBA';
// script file sig-cadastros
// https://script.google.com/macros/s/AKfycbxV1810EEy4wxnikzwUnLlEJCUebwFo6b4_VfFCTYovVW2eTwjdyrH75mIo7h5AslgxBA/exec



function MaxRegistros() {
    $.getJSON('https://script.google.com/macros/s/' + GoogleRegistros + '/exec?page=max',
        function (data) {
            $('input[name="inv_no"]').val(data);
        });
}

function SearchRegistros(pNo = '') {
    var no = $('#inv_no').val();
    if (pNo != '') no = pNo;

    $.getJSON('https://script.google.com/macros/s/' + CadasGoogleRegistrostros + '/exec?page=search&no=' + no,
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
                        var dt = value[16].substring(0, 10);
                        document.getElementsByName('id_item')[0].value = value[0];
                        document.getElementsByName('item_nm')[0].value = value[1];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        var dtval = value[28].substring(0, 10);
                        document.getElementsByName('code')[i].value = value[0];
                        document.getElementsByName('validate')[i].value = dtval;
                        document.getElementsByName('price')[i].value = value[29];
                        document.getElementsByName('amt')[i].value = value[30];
                    }
                    i = i + 1;
                });
                GetTotal();
            }
        });
    $('#modalListItem').modal('hide');
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

function ShowAllDataRegistrosFin() {
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////

