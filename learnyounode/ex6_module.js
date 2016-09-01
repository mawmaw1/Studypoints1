/**
 * Created by Magnus on 24-08-2016.
 */

module.exports = function(dir, ext, callback){


    var fs = require('fs');


   fs.readdir(dir, function(err, list){
        if (err) return callback(err);



            var filteredList = list.filter(sort);

            function sort(value) {
                if(value.indexOf('.' + ext) >= 0) {
                    return value
                }
            }

    callback(null, filteredList);
    });

}