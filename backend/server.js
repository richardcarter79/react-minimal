'use strict';
let express = require('express');
let app = express();
let path = require('path');

const port = 3000;
//middleware to define folder for static files
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, function() {
  console.log(`listening on port: ${port}`)
});