/**
 * Created by Magnus on 28-08-2016.
 */



var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    url.parse(req.url, true);


});

server.listen(process.argv[2]);