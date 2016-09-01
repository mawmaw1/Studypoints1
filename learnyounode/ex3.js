/**
 * Created by Magnus on 24-08-2016.
 */
var fs = require('fs');

var str = fs.readFileSync(process.argv[2]).toString();

var arr = str.split("\n");

console.log(arr.length-1);