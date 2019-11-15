var http = require('http');
var url = require("url");
var path = require("path");
var fs = require('fs');
var Promise = require('promise');
var consulta = require('./server/consultas');
var db = require("./server/dbconn").db;
var consultasIngresar = require("./server/consultasIngresar");

var port = 8080;
mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

const server = http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), uri);

    if (request.method === 'GET' && request.url === '/uruguay') {
        consulta.filtrar(db).then((tabla) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(tabla);
            response.end();
        });
    } else if (request.method === 'POST' && request.url === '/ingresar') {
        console.log("ingresar");
        consultasIngresar.recuperar(request, response);
    } else {
        if (uri === '/favicon.ico') {
            ignoreFavicon(uri, response);
            return;
        }
        fs.exists(filename, function(exists) {
            handleNonExist(response, exists);

            if (fs.statSync(filename).isDirectory())
                filename += '/index.html';

            readfile(response, filename);
        });
    }
}).listen(port);

function readfile(response, filename) {
    fs.readFile(filename, "binary", function(err, file) {
        handleError(response, err);
        var mimeType = mimeTypes[filename.split('.').pop()];

        if (!mimeType) {
            mimeType = 'text/plain';
        }
        response.writeHead(200, { "Content-Type": mimeType });
        response.write(file, "binary");
        response.end();
    });
}

function handleNonExist(response, exists) {
    if (!exists) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not Found\n");
        response.end();
        return;
    }
}

function handleError(response, err) {
    if (err) {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.write(err + "\n");
        response.end();
        return;
    }
}

function ignoreFavicon(uri, response) {
    response.writeHead(200, { 'Content-Type': 'image/x-icon' });
    response.end();
}