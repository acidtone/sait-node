const http = require("http");
const fs = require("fs");
const url = require("url");

// Create HTTP server and listen on port 8080 for requests

http.createServer((request, response) => {

  let parsedAddress = url.parse(request.url, true);
  let file = "./assets" + parsedAddress.pathname;

  fs.readFile(file, (err, data) => {

    if (err) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write("<h1>404: Page Not Found</h1>");
      return response.end();
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    }
  });
}).listen(8080);