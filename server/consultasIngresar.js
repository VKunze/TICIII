var db = require('./dbconn.js').db;
var querystring = require('querystring');
/* var popup = require('popups'); */
/* var alertJS=("js-alert"); */

function guardar(request, response) {
    var info = '';
    request.on('data', datosparciales => {
        info += datosparciales;
    });
    request.on('end', () => {
        var formulario = JSON.parse(info);
        var queryString = 'INSERT INTO usuarios(usuario, password, pais) VALUES (\'' + formulario['usuario'] + '\',\'' + formulario['password'] + '\',\'' + formulario['pais'] + '\')';
        db.query(queryString, function(err, results){
            if (err) throw err;
        });
    });
}

function verificar(request, response) {
    var info = '';
    request.on('data', datosparciales => {
        info += datosparciales;
    });
    request.on('end', () => {
        var formulario = JSON.parse(info);
        var queryString = 'SELECT * FROM usuarios WHERE usuario = \'' + formulario['usuario'] + '\' AND password = \'' + formulario['password'] + '\'';
        console.log(queryString);
        db.query(queryString, function(err, results) {
            if (err) throw err;
            console.log("results: " + results);
            if (results[0]){
                console.log("in results[0]");
                if (results[0].password != formulario['password']){
                    console.log("in contraseña incorrecta");
                } else {
                    console.log("in ingresado correctamente");
                }
            } else {
                console.log("in no existe usuario");
            }
        });
    });
}

module.exports = {
    guardar: guardar,
    verificar: verificar
};