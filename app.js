var http = require('http');
var server = http.createServer();
var fs = require('fs');


server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            
        fs.readFile('./obraz.jpg', function(err, html) {
        response.writeHead(404, {"Content-Type": "jpg; charset=utf-8"});
        response.write(html);
        response.end();
    });
        
    }
});
console.log('server uruchomiony...');

server.listen(8080);