var http = require('http');
var url = require("url");
var path = require("path");
var fs = require('fs');

mimeTypes = {
      "html": "text/html",
      "jpeg": "image/jpeg",
      "jpg": "image/jpeg",
      "png": "image/png",
      "js": "text/javascript",
      "css": "text/css"
    };

const server = http.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname;
  var filename = path.join(process.cwd(), uri);
  
  fs.exists(filename, function(exists) {
    handleNonExist(response, exists);
 
    if (fs.statSync(filename).isDirectory()) 
      filename += '/index.html';


    if (uri == 'registration' && request.method === 'GET') {
        console.log('Request Type:' + request.method + ' Endpoint: ' + uri);
        service.sampleRequest(request, response);
    } 

    readfile(response, filename);    
  });
}).listen(8080);

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