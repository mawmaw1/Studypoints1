var mymodule = require('./ex6_module.js');



mymodule(process.argv[2],process.argv[3], function(err, filteredList){
    for (var i = 0; i < filteredList.length; i++) {
        console.log(filteredList[i]);
    }

});