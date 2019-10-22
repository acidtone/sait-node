const http = require('http');

http.createServer((request,response) => {

  response.writeHead(200, {"Content-Type": "text/html"});
  
  // Write the URL to the page
  response.write(request.url);
  response.end();

}).listen(8080);