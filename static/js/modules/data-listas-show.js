$(document).ready(function () {
});



const Google = "AKfycbzcw9SZk3k0pEQZ04jm9bFhG12fct2qi_Szvdk5B5yYAbv5coMzCe9bgylO1__ljK3i";
// script file sig-listas
// https://script.google.com/macros/s/AKfycbzcw9SZk3k0pEQZ04jm9bFhG12fct2qi_Szvdk5B5yYAbv5coMzCe9bgylO1__ljK3i/exec



// ****************************************************************************************************

function showDataFinalidade() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataFinalidade",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyFinalidade").html(Rows);
                $("#modalShowFinalidade").modal('show');
            });
    });
}

function showDataStatusRegistro() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataStatusRegistro",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyStatusRegistro").html(Rows);
                $("#modalShowStatusRegistro").modal('show');
            });
    });
}

function showDataTipoPgto() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataTipoPgto",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyTipoPgto").html(Rows);
                $("#modalShowTipoPgto").modal('show');
            });
    });
}

function showDataStatusPgto() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataStatusPgto",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyStatusPgto").html(Rows);
                $("#modalShowStatusPgto").modal('show');
            });
    });
}



// ****************************************************************************************************

function showDataCor() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataCor",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyCor").html(Rows);
                $("#modalShowCor").modal('show');
            });
    });
}

function showDataTamanho() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataTamanho",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyTamanho").html(Rows);
                $("#modalShowTamanho").modal('show');
            });
    });
}

function showDataMaterial() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataMaterial",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyMaterial").html(Rows);
                $("#modalShowMaterial").modal('show');
            });
    });
}

function showDataGriffe() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataGriffe",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyGriffe").html(Rows);
                $("#modalShowGriffe").modal('show');
            });
    });
}



// ****************************************************************************************************

function showDataMarca() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataMarca",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyMarca").html(Rows);
                $("#modalShowMarca").modal('show');
            });
    });
}

function showDataGrupo() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataGrupo",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyGrupo").html(Rows);
                $("#modalShowGrupo").modal('show');
            });
    });
}

function showDataSubGrupo() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataSubGrupo",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodySubGrupo").html(Rows);
                $("#modalShowSubGrupo").modal('show');
            });
    });
}

function showDataCategoria() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataCategoria",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyCategoria").html(Rows);
                $("#modalShowCategoria").modal('show');
            });
    });
}



// ****************************************************************************************************

function showDataCentroCusto() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataCentroCusto",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyCentroCusto").html(Rows);
                $("#modalShowCentroCusto").modal('show');
            });
    });
}

function showDataCondPgto() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataCondPgto",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyCondPgto").html(Rows);
                $("#modalShowCondPgto").modal('show');
            });
    });
}



// ****************************************************************************************************

function showDataRegiao() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataRegiao",
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
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataSubRegiao",
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
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataRota",
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

function showDataContaContabil() {
    $(document).ready(function () {
        $.getJSON("https://script.google.com/macros/s/" + Google + "/exec?page=showDataContaContabil",
            function (data) {
                var Table = "", Rows = "", Columns = "";
                $.each(data, function (key, value) {
                    Columns = "";
                    $.each(value, function (key1, value1) {
                        Columns = Columns + '<td>' + value1 + '</td>';
                    });
                    Rows = Rows + '<tr class="text-right">' + Columns + '</tr>';
                });
                $("#TBodyContaContabil").html(Rows);
                $("#modalShowContaContabil").modal('show');
            });
    });
}


