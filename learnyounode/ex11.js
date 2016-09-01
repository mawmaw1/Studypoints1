/**
 * Created by Magnus on 28-08-2016.
 */
var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req, res) {

    var src = fs.createReadStream(process.argv[3]);


    src.pipe(res);



});

server.listen(process.argv[2]);