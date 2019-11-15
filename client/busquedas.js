var options = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/html'
    }
};

var filtros = "";

document.addEventListener("DOMContentLoaded", function(event) {
    inicializarFiltros();
    document.querySelector("#uruguay").addEventListener("click", async function() {
        fetch("/pais:uruguay", options).then(function(response) {
            return response.text();
        }).then(function(html) {
            ////document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#brasil").addEventListener("click", async function() {
        fetch("/pais:brasil", options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //document.getElementById("data").innerHTML = html;
            $('#data').html(html);

        });
        mostrarBasesUy();
    })
    document.querySelector("#argentina").addEventListener("click", async function() {
        fetch("/pais:argentina", options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#paraguay").addEventListener("click", async function() {
        fetch("/pais:paraguay", options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#bolivia").addEventListener("click", async function() {
        fetch("/pais:bolivia", options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#estadosunidos").addEventListener("click", async function() {
        fetch("/pais:estadosunidos", options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
        mostrarBasesUy();
    })

    document.querySelector("#ImpTyA").addEventListener("click", function() {
        filtros["viaDeTransporte"].active = true;
        filtros["viaDeTransporte"].value = "VIA AEREA";
        filtros["viaDeTransporte"].value2 = "VIA CARRETERA";

        var url = getMultUrl();
        fetch(url, options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //     //document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
        mostrarTablaImpTyA();
    })
    document.querySelector("#ExpTyA").addEventListener("click", function() {
        filtros["viaDeTransporte"].active = true;
        filtros["viaDeTransporte"].value = "VIA AEREA";
        filtros["viaDeTransporte"].value2 = "VIA CARRETERA";

        var url = getMultUrl();
        fetch(url, options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
        mostrarTablaImpTyA();
    })
    document.querySelector("#ImpM").addEventListener("click", function() {
        filtros["viaDeTransporte"].active = true;
        filtros["viaDeTransporte"].value = "VIA MARITIMA";

        var url = getMultUrl();
        fetch(url, options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
        mostrarTablaImpTyA();
    })
    document.querySelector("#ExpM").addEventListener("click", function() {
        filtros["viaDeTransporte"].active = true;
        filtros["viaDeTransporte"].value = "VIA MARITIMA";

        var url = getMultUrl();
        fetch(url, options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
        mostrarTablaImpTyA();
    })
    document.querySelector("#ExpTyA").addEventListener("click", function() {
        filtros["viaDeTransporte"].active = true;
        filtros["viaDeTransporte"].value = "VÍA AERÉA";
        filtros["viaDeTransporte"].value2 = "VÍA TERRESTRE";

        var url = getMultUrl();
        fetch(url, options).then(function(response) {
            return response.text();
        }).then(function(html) {
            $('#data').html(html);
        });
        mostrarTablaImpTyA();
    })
    document.querySelector("#ImpM").addEventListener("click", function() {
        filtros["viaDeTransporte"].active = true;
        filtros["viaDeTransporte"].value = "VÍA MARÍTIMA";

        var url = getMultUrl();
        fetch(url, options).then(function(response) {
            return response.text();
        }).then(function(html) {
            $('#data').html(html);
        });
        mostrarTablaImpTyA();
    })
    document.querySelector("#ExpM").addEventListener("click", function() {
        filtros["viaDeTransporte"].active = true;
        filtros["viaDeTransporte"].value = "VÍA MARÍTIMA";

        var url = getMultUrl();
        fetch(url, options).then(function(response) {
            return response.text();
        }).then(function(html) {
            $('#data').html(html);
        });
        mostrarTablaImpTyA();
    })
    document.querySelector("#botonFiltro").addEventListener("click", function() {
        console.log("RECONOCI BOTON");
        actualizarFiltros();
        var url = getMultUrl();
        fetch(url, options).then(function(response) {
            return response.text();
        }).then(function(html) {
            //document.getElementById("data").innerHTML = html;
            $('#data').html(html);
        });
    });
});

function actualizarFiltros() {
    if (document.getElementById("cbfecha").checked) {
        var fechaDesde = document.getElementById("fechaDesde").value;
        var fechaHasta = document.getElementById("fechaHasta").value;
        filtros["fechaDeDeclaracion"].active = true;
        filtros["fechaDeDeclaracion"].desde = fechaDesde;
        filtros["fechaDeDeclaracion"].hasta = fechaHasta;
    }
    if (document.getElementById("cbempresa").checked) {
        actualizar("empresa");
    }
    if (document.getElementById("cbcantidad").checked) {
        actualizar("cantidad");
        actualizarSigno("cantidad");
    }
    if (document.getElementById("cbcifus").checked) {
        actualizar("cifus");
        actualizarSigno("cifus");
    }
    if (document.getElementById("cbdepartamento").checked) {
        actualizarSeleccion("departamento");
    }
    if (document.getElementById("cbnumeroDUA").checked) {
        actualizar("numeroDUA");
    }

}

function getMultUrl() {
    var url = "/mult";
    var first = true;
    for (columna in filtros) {
        if (filtros[columna].active) {
            if (first) {
                url += "?";
                first = false;
            } else {
                url += "&";
            }
            if (columna === "fechaDeDeclaracion") {
                url += columna + "=" + filtros[columna].desde;
                url += "&" + "hasta=" + filtros[columna].hasta;
            } else {
                url += columna + "=" + filtros[columna].value;
            }
            if (columna == "cantidad" || columna == "cifus") {
                url += "&signo" + columna + "=" + filtros[columna].signo;
            }
            if (columna == "viaDeTransporte" && filtros[columna].value2) {
                url += "&viaDeTransporte2=" + filtros[columna].value2;
            }
        }
    }
    return url;
}

function actualizar(columna) {
    filtros[columna].active = true;
    filtros[columna].value = document.getElementById(columna).value;
}

function actualizarSigno(columna) {
    var e = document.getElementById("slct" + columna);
    var seleccionado = e.options[e.selectedIndex].text;
    filtros[columna].signo = seleccionado;
}

function actualizarSeleccion(columna) {
    filtros[columna].active = true;
    var e = document.getElementById("slct" + columna);
    var seleccionado = e.options[e.selectedIndex].text;
    filtros[columna].value = seleccionado;
}

function mostrarBasesUy() {
    document.getElementById('obj1').style.display = 'block';
}

function mostrarTablaImpTyA() {
    document.getElementById('TablaImpTyA').style.display = 'block';
}

function mostrarIngresar() {
    document.getElementById('IniciarSesion').style.display = 'block';
}

function inicializarFiltros() {
    filtros = {
        fechaDeDeclaracion: {
            active: false,
            desde: null,
            hasta: null
        },
        empresa: {
            active: false,
            value: null
        },
        cantidad: {
            active: false,
            signo: null,
            value: null
        },
        cifus: {
            active: false,
            signo: null,
            value: null
        },
        departamento: {
            active: false,
            value: null
        },
        paisDeOrigen: {
            active: false,
            value: null
        },
        pesoNeto: {
            active: false,
            value: null
        },
        descripcion: {
            active: false,
            value: null
        },
        viaDeTransporte: {
            active: false,
            value: null,
            value2: null
        },
        seguro: {
            active: false,
            value: null
        },
        numeroDUA: {
            active: false,
            value: null
        },
        iva: {
            active: false,
            value: null
        }
    };
}

module.exports = {
    mostrarIngresar: mostrarIngresar
}