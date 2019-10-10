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
    var uri = url.parse(request.url).pathname, 
      filename = path.join(process.cwd(), uri);
  
  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("404 Not Found\n");
      response.end();
      return;
    }
 
    if (fs.statSync(filename).isDirectory()) 
      filename += '/index.html';
 
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }
      
      var mimeType = mimeTypes[filename.split('.').pop()];
      
      if (!mimeType) {
        mimeType = 'text/plain';
      }
      
      response.writeHead(200, { "Content-Type": mimeType });
      response.write(file, "binary");
      response.end();
    });
  });
    /* res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error,data){
        if (error) {
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.write(data);
        }
        res.end();
    }); */
}).listen(8080);

/* server.on('request', (req, res) => {
    //***Parse the incoming request and handle those without extensions***
    const parsedUrl = new URL(req.url, 'https://node-http.glitch.me/')
    let pathName = parsedUrl.pathname
    let ext = path.extname(pathName)

    // To handle URLs with trailing '/' by removing aforementioned '/'
    // then redirecting the user to that URL using the 'Location' header
    if (pathName !== '/' && pathName[pathName.length - 1] === '/') {
    res.writeHead(302, {'Location': pathName.slice(0, -1)})
    res.end()
    return
    }

    // If the request is for the root directory, return index.html
    // Otherwise, append '.html' to any other request without an extension
    if (pathName === '/') { 
    ext = '.html' 
    pathName = '/index.html'
    } else if (!ext) { 
    ext = '.html' 
    pathName += ext
    }
}); */