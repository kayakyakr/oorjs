
var http = require('http');
require('./node_modules/class');
require('./node_modules/util')

/**
 * Require utilities built into goorjs
 */

var Goorjs = require('./node_modules/goor.js');

server = http.createServer(function(req, res){
  var goorjs = new Goorjs({server: server, request: req, response: res});
  goorjs.handle_request();
});

server.listen(3000, "127.0.0.1");

process.on('uncaughtException', function(exception){
  console.log(exception.toString());
});

console.log('Opened server on 127.0.0.1:3000')