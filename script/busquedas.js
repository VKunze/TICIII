var hola= "chau";
var dos = 2;
const url = require('url');
filtro = {
    uruguay = false
}

function uruguay(req, res){
    const reqUrl = url.parse(req.url, true);
    filtro.uruguay = true;
    console.log(filtro);
    res.statusCode = 200;
    res.end();
}

module.exports = {
    uruguay
};