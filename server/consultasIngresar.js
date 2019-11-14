var db = require('./dbconn.js');
var querystring = require('querystring');



function recuperar(request, response) {
    var info = '';
    request.on('data', datosparciales => {
        info += datosparciales;
        //console.log("datos parciales:" + datosparciales);

    });
    request.on('end', () => {
        var formulario = JSON.parse(info);
        var queryString = 'INSERT INTO usuarios(usuario, password, pais) VALUES (\'' + formulario['usuario'] + '\',\'' + formulario['password'] + '\',\'' + formulario['pais'] + '\')'
        db.query1(queryString);
    });
}

module.exports = {
    recuperar: recuperar
};