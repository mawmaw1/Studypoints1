/**
 * Created by Magnus on 28-08-2016.
 */

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function callback (response) {


    response.pipe(bl(function(err, data){

        if(err) return bl(err);
        console.log(data.length);
        console.log(data.toString());



    }));

})