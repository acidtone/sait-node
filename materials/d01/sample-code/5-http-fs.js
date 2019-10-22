const http = require("http");
 
// Load FS module at the top of the page. Just add it under previously loaded modules.
const fs = require("fs");

http.createServer((request, response) => {
      fs.readFile("./assets/demo.html", (err, data) => {
        response.writeHead(200, { "Content-Type": "text/html" });
  
        // Write the data that we read from "demo.html".
        response.write(data);
        response.end();
      });
  }).listen(8080);