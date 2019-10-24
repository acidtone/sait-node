const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {

  if (req.url === '/') {

    fs.createReadStream(__dirname + '/assets/index.html').pipe(res);

  } else if (req.url === '/blog') {

    res.writeHead(200, {"Content-Type": "text/html"});

    let html = fs.readFileSync(__dirname + '/assets/index.tpl','utf8');

    html = html.replace('{Message}','Hello world...');
    res.end(html);

  } else if (req.url === '/api') {

    res.writeHead(200, {"Content-Type": "application/json"});

    const obj = {
      firstname: 'John',
      lastname: 'Wick'
    }
    res.end(JSON.stringify(obj));
  } else {

    res.writeHead(404, {"Content-Type": "text/html"});
    res.end('<h1>404: File Not Found</h1>');

  }

}).listen(8080);