var options = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/html'
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#uruguay").addEventListener("click", async function() {
        fetch("/pais:uruguay", options).then(function(response){
            return response.text();
        }).then(function(html){
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#brasil").addEventListener("click", async function() {
        fetch("/pais:brasil", options).then(function(response){
            return response.text();
        }).then(function(html){
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#argentina").addEventListener("click", async function() {
        fetch("/pais:argentina", options).then(function(response){
            return response.text();
        }).then(function(html){
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#paraguay").addEventListener("click", async function() {
        fetch("/pais:paraguay", options).then(function(response){
            return response.text();
        }).then(function(html){
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#bolivia").addEventListener("click", async function() {
        fetch("/pais:bolivia", options).then(function(response){
            return response.text();
        }).then(function(html){
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#estadosunidos").addEventListener("click", async function() {
        fetch("/pais:estadosunidos", options).then(function(response){
            return response.text();
        }).then(function(html){
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
      
    //Falta hacer que vaya a la base correcta
    document.querySelector("#ImpTyA").addEventListener("click", function() {
        fetch("/base:impTyA", options).then(function(response){
            return response.text();
        }).then(function(html){
            $('#data').html(html);
        });
        mostrarTablaImpTyA();
    })
});

var iframe = document.getElementById("filtrosIFrame");
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
innerDoc.addEventListener("DOMContentLoaded", function(event) {
    innerDoc.querySelector("#botonFiltro").addEventListener("click", function(){
        var filtros = actualizarFiltros();
        var url = getMultUrl(filtros);
        fetch(url, options).then(function(response){
            return response.text();
        }).then(function(html){
            $('#data').html(html);
        });
    });
});

function actualizarFiltros(){
    var filtros = {
        fechaDeDeclaracion : {
            active: false,
            desde: null,
            hasta: null
        },
        empresa : {
            active: false,
            value: null
        }
    };
    if (innerDoc.getElementById("cbfecha").checked) {
        var fechaDesde = innerDoc.getElementById("fechaDesde").value;
        var fechaHasta = innerDoc.getElementById("fechaHasta").value;
        filtros["fechaDeDeclaracion"].active = true;
        filtros["fechaDeDeclaracion"].desde = fechaDesde;
        filtros["fechaDeDeclaracion"].hasta = fechaHasta;
    }
    if (innerDoc.getElementById("cbempresa").checked) {
        var empresa = innerDoc.getElementById("empresa").value;
        filtros["empresa"].active = true;
        filtros["empresa"].value = empresa;
    }
    return filtros;
}

function getMultUrl(filtros){
    var url = "/mult";
    var first = true;
    for (elem in filtros){
        if (filtros[elem].active == true){
            if(first){
                url += "?" + elem + "=" + filtros[elem].value;
                first = false;
            } else{
                url += "&" + elem + "=" + filtros[elem].value;
            }
        }                
    }
    return url;
}

function mostrarBasesUy() {
    document.getElementById('obj1').style.display = 'block';
}

function mostrarTablaImpTyA() {
    document.getElementById('TablaImpTyA').style.display = 'block';
}

/* function myFetch(url){
    console.log("in fetch");
    fetch(url, options).then(function(response){
        console.log("before then");
        return response.text();

    }).then(function(html){
        console.log("after then");
        $('#data').html(html);
        console.log("post mostrar datos");
    });
} */
