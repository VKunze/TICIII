var options = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/html'
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#uruguay").addEventListener("click", async function() {
        console.log("in query selector");
        fetch("/pais:uruguay", options).then(function(response){
            console.log("response");
            return response.text();
        }).then(function(html){
            console.log(html);
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
        var filtros = {
            fechaDeDeclaracion : {
                active: false,
                desde: null,
                hasta: null
            }
        };
        if (innerDoc.getElementById("cbfecha").checked) {
            var fechaDesde = innerDoc.getElementById("fechaDesde").value;
            var fechaHasta = innerDoc.getElementById("fechaHasta").value;
        
            filtros["fechaDeDeclaracion"].active = true;
            filtros["fechaDeDeclaracion"].desde = fechaDesde;
            filtros["fechaDeDeclaracion"].hasta = fechaHasta;
            
        }
        //console.log("stringify : "+ JSON.stringify(filtros));
        options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            data: JSON.stringify(filtros)
        };
        fetch("/mult", options).then(function(response){
            return response.text();
        }).then(function(html){
            $('#data').html(html);
        });
    });
});


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
