/**
 * Created by Magnus on 29-08-2016.
 */

var names = ["Jan", "Peter", "Kurt", "Lars", "Morten"];

var newArr = names.filter(function(name){
    return name.length <= 3;
});


var newMap = names.map(function(name){
    return name.toUpperCase();
});


function myFilter(callback){
    for(var i=0; i<this.length;i++){
        if(this[i].length <= 3) callback(this[i]);
    }
}

function myMap(callback){
    for(var i=0; i<this.length;i++){
        callback(this[i].toUpperCase());
    }
}

Array.prototype.myFilter = myFilter;
Array.prototype.myMap = myMap;

names.myFilter(function(name){
    console.log(name)
})

names.myMap(function(name){
    console.log(name)
})

