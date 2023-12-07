$(document).ready(function () {

    dropdownTipoRegistro();
    dropdownFinalidade();
    dropdownCanalVenda();
    dropdownStatusRegistro();
    dropdownTipoPgto();
    dropdownStatusPgto();
    dropdownTipoItem();
    dropdownTipoParceiro();

    dropdownUnMed();
    dropdownCor();
    dropdownTamanho();
    dropdownMaterial();
    dropdownGriffe();

    dropdownMarca();
    dropdownGrupo();
    dropdownSubGrupo();
    dropdownCategoria();

    dropdownDeposito();
    dropdownSecao();
    dropdownCargo();
    dropdownCentroCusto();
    dropdownCondPgto();

    dropdownRegiao();
    dropdownSubRegiao();
    dropdownRota();
    dropdownContaContabil();

});



const GoogleListas = "AKfycbzcw9SZk3k0pEQZ04jm9bFhG12fct2qi_Szvdk5B5yYAbv5coMzCe9bgylO1__ljK3i";
// script file sig-listas
// https://script.google.com/macros/s/AKfycbzcw9SZk3k0pEQZ04jm9bFhG12fct2qi_Szvdk5B5yYAbv5coMzCe9bgylO1__ljK3i/exec



// ****************************************************************************************************

function dropdownTipoRegistro() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownTipoRegistro",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownTipoRegistro").append(Options);
        });
}


function dropdownFinalidade() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownFinalidade",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownFinalidade").append(Options);
        });
}


function dropdownCanalVenda() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownCanalVenda",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownCanalVenda").append(Options);
        });
}


function dropdownStatusRegistro() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownStatusRegistro",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownStatusRegistro").append(Options);
        });
}


function dropdownTipoPgto() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownTipoPgto",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownTipoPgto").append(Options);
        });
}


function dropdownStatusPgto() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownStatusPgto",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownStatusPgto").append(Options);
        });
}


function dropdownTipoItem() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownTipoItem",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownTipoItem").append(Options);
        });
}


function dropdownTipoParceiro() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownTipoParceiro",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownTipoParceiro").append(Options);
        });
}



// ****************************************************************************************************

function dropdownUnMed() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownUnMed",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownUnMed").append(Options);
        });
}


function dropdownCor() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownCor",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownCor").append(Options);
        });
}


function dropdownTamanho() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownTamanho",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownTamanho").append(Options);
        });
}


function dropdownMaterial() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownMaterial",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownMaterial").append(Options);
        });
}


function dropdownGriffe() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownGriffe",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownGriffe").append(Options);
        });
}



// ****************************************************************************************************

function dropdownMarca() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownMarca	",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownMarca").append(Options);
        });
}


function dropdownGrupo() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownGrupo",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownGrupo").append(Options);
        });
}


function dropdownSubGrupo() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownSubGrupo",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownSubGrupo").append(Options);
        });
}


function dropdownCategoria() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownCategoria",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownCategoria").append(Options);
        });
}



// ****************************************************************************************************

function dropdownDeposito() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownDeposito",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownDeposito").append(Options);
        });
}


function dropdownSecao() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownSecao",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownSecao").append(Options);
        });
}


function dropdownCargo() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownCargo",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownCargo").append(Options);
        });
}


function dropdownCentroCusto() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownCentroCusto",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownCentroCusto").append(Options);
        });
}


function dropdownCondPgto() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownCondPgto",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownCondPgto").append(Options);
        });
}



// ****************************************************************************************************

function dropdownRegiao() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownRegiao",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownRegiao").append(Options);
        });
}


function dropdownSubRegiao() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownSubRegiao",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownSubRegiao").append(Options);
        });
}


function dropdownRota() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownRota",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownRota").append(Options);
        });
}


function dropdownContaContabil() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleListas + "/exec?page=dropdownContaContabil",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownContaContabil").append(Options);
        });
}



// ------------------------------------------------------------------------------------------------------- //
