var db = require('./script/dbconn.js').db;
var fs = require('fs');
var Promise = require('promise');

var filtrosActivos = {
    id : false,
    fechaDeDeclaracion : false,
    empresa : false,
    cantidad : false,
    cifus : false,
    departamento : false,
    paisDeOrigen : false,
    pesoNeto : false,
    descripcion : false,
    viaDeTransporte : false,
    seguro : false,
    numeroDUA : false,
    iva : false
}

var filtrar = function(db) {
    return new Promise((resolve, reject)=>{
        var tableBody="";
        var queryString = 'SELECT * FROM import_uruguay';
        getQuery();
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
            resolve(tableBody);
        });
    });
}

function getQuery(){
    var query = 'SELECT * FROM import_uruguay';
    var firstFilter = true;
    for(elem in filtrosActivos){
        if(filtrosActivos[elem]){
            if(firstFilter){
                query += 'WHERE ';
                firstFilter = false;
            }
            query += "hola";
        }
    }    
    return query;
};

module.exports = {
    filtrar : filtrar
};