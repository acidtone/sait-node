const http = require('http');
const url = require("url");

http.createServer((request,response) => {

  if (request.url === '/') {

    // Set the response HTTP header with HTTP status and Content
    response.writeHead(200, {"Content-Type": "text/html"});

    // Send the response body "Hello World"
    response.end("<h1>Hello World!</h1>");
  } else if (request.url === '/about') {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h1>About Page</h1>");
  
  } else if (request.url === '/api') {

    response.writeHead(200, {"Content-Type": "application/json"});

    const obj = {
      firstname: 'John',
      lastname: 'Wick'
    }

    response.end(JSON.stringify(obj));

  }



  // Pass in a function as the 2nd argument to listen() so that we log a message to the console when the server is running.
  }).listen(8080, () => {
      console.log(`Server running on port 8080`);
  });






  