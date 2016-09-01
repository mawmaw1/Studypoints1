/**
 * Created by Magnus on 29-08-2016.
 */

na1 = [1, 2, 3];
na2 = [1, 2, 4];


function handleNumArrays(na1, na2, callback) {
    var sum = [];
    for (var i = 0; i < na1.length; i++) {
    sum.push(na1[i]+na2[i]);
    }
    callback(sum);

}

function handleNumArraysSum(na1, na2, callback) {
    var sum = 0;
    for (var i = 0; i < na1.length; i++) {
        sum += (na1[i]+na2[i]);
    }
    callback(sum);

}

function handleNumArraysMulti(na1, na2, callback) {
    var sum = [];
    for (var i = 0; i < na1.length; i++) {
        sum.push((na1[i]*10+na2[i]*10));
    }
    callback(sum);

}

handleNumArrays(na1, na2, function (res) {
    console.log(res.join(","));
})

handleNumArraysSum(na1, na2, function (res) {
    console.log(res);
})


handleNumArraysMulti(na1, na2, function (res) {
    console.log(res.join(","));
})


