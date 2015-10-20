var express = require('express');
var app = express();

//make express look in the public directory for resources
app.use(express.static(__dirname + '/public'));

//server listening on port 80
var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log('The server app is runing on port: ' + port);
});
