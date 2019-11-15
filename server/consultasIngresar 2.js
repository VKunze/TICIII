var db = require('./dbconn.js');
var querystring = require('querystring');



function recuperar(request, response) {
    var info = '';
    request.on('data', datosparciales => {
        info += datosparciales;
        console.log("datos parciales:" + datosparciales);

    });
    var formulario = "";
    request.on('end', () => {

        formulario = JSON.parse(info);
        console.log(formulario);

    });

    var query1 = db.query1('INSERT INTO usuarios(usuario, password, pais) VALUES (\'' + formulario['Usuario'] + '\',\'' + formulario['Contraseña1'] + '\',\'' + formulario['Pais'] + '\'');
}

module.exports = {
    recuperar: recuperar
};