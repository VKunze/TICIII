var db = require('./dbconn.js');
var querystring = require('querystring');



function recuperar(request, response){
    var info= '';
    request.on('data', datosparciales =>{
        info += datosparciales;
        console.log("datos parciales:" + datosparciales);

    });
    request.on('end', () =>{
        
        const formulario= JSON.parse(info);
        console.log(formulario);
        
    });
    
    //var query1 = db.query1('INSERT INTO usuarios(usuario, password, pais) VALUES (?usuario,?password,?pais)', []);
}

module.exports = {
    recuperar : recuperar 
};