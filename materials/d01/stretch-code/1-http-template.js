const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {

  res.writeHead(200, {"Content-Type": "text/html"});

  let html = fs.readFileSync(__dirname + '/assets/index.tpl','utf8');

  html = html.replace('{Message}','Hello world...');
  res.end(html);

}).listen(8080);