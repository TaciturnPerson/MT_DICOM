
var express = require('express');
var fs = require('fs');
var path = require('path');
var PORT = process.env.PORT || 3000;

express()
    .use(hello)
    .listen(PORT, onListen);

function hello(req, res, next) {
  res.sendFile(path.join(__dirname, './', 'index.html'));
}

function onListen() {
  console.log('Listening on', PORT);
}
