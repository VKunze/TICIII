var db = require('./dbconn.js').db;
var fs = require('fs');
var Promise = require('promise');

var filtros = {
    id : {
        active: false,
        value: null
    },
    fechaDeDeclaracion : {
        active: false,
        desde: null,
        hasta: null
    },
    empresa : {
        active: false,
        value: null
    },
    cantidad : {
        active: false,
        signo: null,
        value: null
    },
    cifus : {
        active: false,
        signo: null,
        value: null
    },
    departamento : {
        active: false,
        value: null
    },
    paisDeOrigen : {
        active: false,
        value: null
    },
    pesoNeto : {
        active: false,
        value: null
    },
    descripcion : {
        active: false,
        value: null
    },
    viaDeTransporte : {
        active: false,
        value: null,
        value2: null
    },
    seguro : {
        active: false,
        value: null
    },
    numeroDUA : {
        active: false,
        value: null
    },
    iva : {
        active: false,
        value: null
    }
}

var filtrar = function(db, filtrosAActualizar) {
    return new Promise((resolve, reject) => {
        var tableBody = "";
        actualizarFiltros(filtrosAActualizar);
        var queryString = getQuery();
        console.log(queryString);
        db.query(queryString, function(err, results) {
            if (err) throw err;
            for (i = 0; i < results.length; i++) {
                if (i > 0) {
                    tableBody += '<div class="row">';
                }
                tableBody += '  <div class="cell" data-title="ID">' + results[i].id + '</div>';
                tableBody += '  <div class="cell" data-title="FechaDeclaracion">' + results[i].fechaDeDeclaracion + '</div>';
                tableBody += '  <div class="cell" data-title="Empresa">' + results[i].empresa + '</div>';
                tableBody += '  <div class="cell" data-title="Cantidad">' + results[i].cantidad + '</div>';
                tableBody += '  <div class="cell" data-title="CIF">' + results[i].cifus + '</div>';
                tableBody += '  <div class="cell" data-title="Departamento">' + results[i].departamento + '</div>';
                tableBody += '  <div class="cell" data-title="PaisOrigen">' + results[i].paisDeOrigen + '</div>';
                tableBody += '  <div class="cell" data-title="PesoNeto">' + results[i].pesoNeto + '</div>';
                tableBody += '  <div class="cell" data-title="Descripcion">' + results[i].descripcion + '</div>';
                tableBody += '  <div class="cell" data-title="ViaDeTransporte">' + results[i].viaDeTransporte + '</div>';
                tableBody += '  <div class="cell" data-title="Seguro">' + results[i].seguro + '</div>';
                tableBody += '  <div class="cell" data-title="DUA">' + results[i].numeroDUA + '</div>';
                tableBody += '  <div class="cell" data-title="IVA">' + results[i].iva + '</div>';

                //tableBody += '</tr>';

                if (i < results.length - 1) {
                    tableBody += '</div>';
                    console.log('entro if');
                }

            }
            console.log(tableBody);
            resolve(tableBody);
        });
    });
}

function getQuery(){
    var query = 'SELECT * FROM import_uruguay';
    var firstFilter = true;
    for (columna in filtros) {
        if (filtros[columna].active) {
            if (firstFilter) {
                query += ' WHERE ';
                firstFilter = false;
            } else {
                query += ' and ';
            }
            if (columna === "fechaDeDeclaracion") {
                query += columna + ' >= \'' + filtros[columna].desde + '\'';
                query += ' and ';
                query += columna + ' <= \'' + filtros[columna].hasta + '\'';
            } else if (columna == "viaDeTransporte" && filtros[columna].value2) {
                query += '(' + columna + ' = \'' + filtros[columna].value + '\' or ' + columna + ' = \'' + filtros[columna].value2 + ' \')';
            } else {
                if (columna == "cantidad" || columna == "cifus") {
                    query += columna + ' ' + filtros[columna].signo + ' \'';
                } else {
                    query += columna + ' = \'';
                }
                query += filtros[columna].value + '\'';
            }
        }
    }
    return query;
};

function actualizarFiltros(filtrosAActualizar) {
    for (columna in filtros) {
        if (columna in filtrosAActualizar) {
            if (filtros[columna].active === false) {
                filtros[columna].active = true;
            }
            if (columna === "fechaDeDeclaracion") {
                filtros[columna].desde = filtrosAActualizar[columna];
                filtros[columna].hasta = filtrosAActualizar["hasta"];
            } else {
                filtros[columna].value = filtrosAActualizar[columna];
            }
            //Casos que tienen un segundo valor relevante
            if (columna == "cantidad" || columna == "cifus") {
                filtros[columna].signo = filtrosAActualizar["signo" + columna];
            }
            if (columna == "viaDeTransporte" && filtrosAActualizar["viaDeTransporte2"]) {
                filtros[columna].value2 = filtrosAActualizar["viaDeTransporte2"];
            }
        } else if (columna != "paisDeOrigen" && filtros[columna].active) {
            filtros[columna].active = false;
        }
    }
}

module.exports = {
    filtrar : filtrar
};