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


    /* var usuario=formulario['Usuario'];
    var password=formulario['Contraseña1'];
    var pais=formulario['Pais']; */
    /* var query1 = db.query1("INSERT INTO usuarios(usuario, password, pais) VALUES ('?')"); */
    /* var query1 = db.query1('INSERT INTO usuarios(usuario, password, pais) VALUES (\'' + formulario['Usuario'] + '\',\'' + formulario['Contraseña1'] +'\',\''+ formulario['Pais']+'\''); */



    /*  db.query1(query1, [formulario], function(err, result){
         if(err) throw err;
     }); */
}

module.exports = {
    recuperar: recuperar
};