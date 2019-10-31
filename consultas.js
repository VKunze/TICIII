var db = require('./script/dbconn.js').db;
var fs = require('fs');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

var query1 = function(sql){
    if(!sql) sql = "SELECT * FROM Barrio;";
    return dbcon.query(sql, function(err, result){
        if (err) throw err;
        console.log("Result: " + result);
    });
}

function filtrar() {
    var tableBody="";

    const dom = new JSDOM('busquedas.html');
    var document = dom.window.document;

    tableBody = "";
    //document.getElementById('obj1');

    var queryString = 'SELECT * FROM import_uruguay';

    db.connect(function(err){
        if (err) throw err;
    });

    db.query(queryString, function(err, results) {
        if (err) throw err;
        console.log(results);    
        mostrarDatos(tableBody, results);
        document.getElementById("obj1").innerHTML = tableBody;
    });

    db.end();
}


function mostrarDatos(tableBody, results) {
    for (i = 0; i < results.length; i++) {
        tableBody += '<tr>';
        tableBody += '  <td>' + results[i].idCliente + '</td>';
        tableBody += '  <td>' + results[i].nombreCliente + '</td>';
        tableBody += '  <td>' + results[i].apellidoCliente + '</td>';
        tableBody += '  <td>' + results[i].cedulaCliente + '</td>';
        tableBody += '  <td>' + results[i].telefonoCliente + '</td>';
        tableBody += '  <td>' + results[i].celularCliente + '</td>';
        tableBody += '  <td>' + results[i].direccionCliente + '</td>';
        tableBody += '  <td>' + results[i].emailCliente + '</td>';
        tableBody += '</tr>';
    }
    return tableBody;
}

module.exports = {
    query1 : query1,
    filtrar : filtrar
};