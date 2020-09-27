import * as grunt from "grunt";

var express = require('express');
var fs = require('fs');
var path = require('path');
var PORT = process.env.PORT || 3000;

express()
  .use(hello)
  .listen(PORT, onListen);

function hello() {
  grunt.registerTask('start', ['connect']);
}

function onListen() {
  console.log('Listening on', PORT);
}
