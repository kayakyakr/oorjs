
var http = require('http');
var url = require('url');

/**
 * Require utilities built into goorjs
 */
require('class');
var mime = require('mime');
var path_interpreter = require('path_interpreter');

server = http.createServer(function(req, res){
  path_interpreter.interpret_path(url.parse(req.url), function(path_data){
    res.writeHead(200, {});
    res.end(JSON.stringify(path_data) );
  });
});

path_interpreter.set_server(server);

server.listen(3000, "127.0.0.1");

console.log('Opened server on 127.0.0.1:3000')