const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {

  res.writeHead(200, {"Content-Type": "application/json"});

  const obj = {
    firstname: 'John',
    lastname: 'Doe',
  }
  
  res.end(JSON.stringify(obj));

}).listen(8080,'127.0.0.1');