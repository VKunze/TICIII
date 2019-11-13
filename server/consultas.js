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
        value: null
    },
    cifus : {
        active: false,
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
        value: null
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

var filtrar = function(db, columna, filtro) {
    return new Promise((resolve, reject)=>{
        var tableBody="";
        actualizarFiltros(columna, filtro);
        var queryString = getQuery();
        db.query(queryString, function(err, results) {
            if (err) throw err;
            for (i = 0; i < results.length; i++) {
                '<div class="row">';
                tableBody += '  <div class="cell">' + results[i].id + '</div>';
                tableBody += '  <div class="cell">' + results[i].fechaDeDeclaracion + '</div>';
                tableBody += '  <div class="cell">' + results[i].empresa + '</div>';
                tableBody += '  <div class="cell">' + results[i].cantidad + '</div>';
                tableBody += '  <div class="cell">' + results[i].cifus + '</div>';
                tableBody += '  <div class="cell">' + results[i].departamento + '</div>';
                tableBody += '  <div class="cell">' + results[i].paisDeOrigen + '</div>';
                tableBody += '  <div class="cell">' + results[i].pesoNeto + '</div>';
                tableBody += '  <div class="cell">' + results[i].descripcion + '</div>';
                tableBody += '  <div class="cell">' + results[i].viaDeTransporte + '</div>';
                tableBody += '  <div class="cell">' + results[i].seguro + '</div>';
                tableBody += '  <div class="cell">' + results[i].numeroDUA + '</div>';
                tableBody += '  <div class="cell">' + results[i].iva + '</div>';
                '</div>';
            }
            //console.log("NUEVA CONSULTA");
            //console.log(tableBody);
            resolve(tableBody);
        });
    });
}

function getQuery(){
    var query = 'SELECT * FROM import_uruguay';
    var firstFilter = true;
    for(elem in filtros){
        if(filtros[elem].active){
            if(firstFilter){
                query += ' WHERE ';
                firstFilter = false;
            }
            query += elem + ' = \'' + filtros[elem].value + '\'';
        }
    }   
    return query;
};

function actualizarFiltros(columna, valor, valor2){
    if(columna){
        if(filtros[columna].active === false){
            filtros[columna].active = true;
        }
        if(columna === "fechaDeDeclaracion"){
            filtros[columna].desde = valor;
            filtros[columna].hasta = valor2;
        }else{
            filtros[columna].value = valor;
        }
    }
}

module.exports = {
    filtrar : filtrar
};