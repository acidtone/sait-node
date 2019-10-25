const express = require('express');
const path = require('path');
const users = require('./users');

const app = express();

// Gets all users
app.get('/api/users',function(request,response){
  response.json(users);
});

// Gets one user
app.get('/api/users/:id', function (request, response){
  response.json(users.filter(function(user) {
    return user.id === parseInt(request.params.id);
  }));
});

// app.get('/', (req, res) => {
//   // res.send('Hello world');
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
