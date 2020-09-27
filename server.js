
var express = require('express');
var fs = require('fs');
var path = require('path');
var PORT = process.env.PORT || 3000;
var app = express();

express()
    .use(hello)
    .listen(PORT, onListen);

app.use(express.static('MT_DICOM'));

function hello(req, res, next) {
  res.sendFile(path.join(__dirname, '/', 'index.html'));
}

function onListen() {
  console.log('Listening on', PORT);
}
