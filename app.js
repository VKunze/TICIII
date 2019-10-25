var http = require('http');
var url = require("url");
var path = require("path");
var fs = require('fs');
var port = 8080;
var db = require('./script/dbconn');

mimeTypes = {
      "html": "text/html",
      "jpeg": "image/jpeg",
      "jpg": "image/jpeg",
      "png": "image/png",
      "js": "text/javascript",
      "css": "text/css"
    };

//console.log(database);

const server = http.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname;
  var filename = path.join(process.cwd(), uri);
  var registration = require('./script/registration.js');
  var busquedas = require('./script/busquedas.js');
  
  if (request.method === 'POST' || request.url === '/hola'){
    console.log('mensaje');
    response.write('A message!');
  }

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
}).listen(port);

function readfile(response, filename){
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

function handleNonExist(response, exists){
  if(!exists) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not Found\n");
    response.end();
    return;
  }
}

function handleError(response, err){
  if(err) {        
    response.writeHead(500, {"Content-Type": "text/plain"});
    response.write(err + "\n");
    response.end();
    return;
  }
}

function ignoreFavicon(uri, response) {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
}