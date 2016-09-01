/**
 * Created by Magnus on 24-08-2016.
 */
var fs = require('fs');

fs.readdir(process.argv[2], function callback (err, list){
    var str = list.toString();
    var arr = str.split(",")
    var arr2 = new Array();
    for(var i = 0;i<arr.length;i++){
        if(arr[i].substring(arr[i].length-3) == "."+process.argv[3]){
            console.log(arr[i])
        }

    }

});
