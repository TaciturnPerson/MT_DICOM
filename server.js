
var express = require('express');
var fs = require('fs');
var path = require('path');
var PORT = process.env.PORT || 3000;

express()
  .listen(PORT, onListen);

function onListen() {
  console.log('Listening on', PORT);
}
