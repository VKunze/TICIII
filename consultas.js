var db = require('./script/dbconn.js').db;
var fs = require('fs');
var Promise = require('promise');

var query1 = function(sql){
    if(!sql) sql = "SELECT * FROM Barrio;";
    return dbcon.query(sql, function(err, result){
        if (err) throw err;
        console.log("Result: " + result);
    });
}

var filtrar = function(db) {
    console.log("inicio");
    return new Promise((resolve, reject)=>{
        var tableBody="";
        var queryString = 'SELECT * FROM import_uruguay';

        db.query(queryString, function(err, results) {
            if (err) throw err;
            console.log(results);    
            
            for (i = 0; i < results.length; i++) {
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
            }       
            resolve(tableBody);
        });
    });
}


function mostrarDatos(tableBody, results) {
    //console.log(results);
    /* for (i = 0; i < results.length; i++) {
        tableBody += '<tr>';
        tableBody += '  <td>' + results[i].id + '</td>';
        tableBody += '  <td>' + results[i].fechaDeDeclaracion + '</td>';
        tableBody += '  <td>' + results[i].empresa + '</td>';
        tableBody += '  <td>' + results[i].cantidad + '</td>';
        tableBody += '  <td>' + results[i].cifus + '</td>';
        tableBody += '  <td>' + results[i].departamento + '</td>';
        tableBody += '  <td>' + results[i].paisDeOrigen + '</td>';
        tableBody += '  <td>' + results[i].pesoNeto + '</td>';
        tableBody += '  <td>' + results[i].descripcion + '</td>';
        tableBody += '  <td>' + results[i].viaDeTransporte + '</td>';
        tableBody += '  <td>' + results[i].seguro + '</td>';
        tableBody += '  <td>' + results[i].numeroDUA + '</td>';
        tableBody += '  <td>' + results[i].iva + '</td>';
        tableBody += '</tr>';
    } */
    //console.log(tableBody);
    return tableBody;
}

module.exports = {
    query1 : query1,
    filtrar : filtrar
};