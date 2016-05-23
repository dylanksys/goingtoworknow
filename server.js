var express = require ('express');
var theroute = require('../routers/theroute');

var app = express();

app.use('/', theroute);

app.listen(1337, function () {
  console.log('wheretowork listening on port 1337');
};
