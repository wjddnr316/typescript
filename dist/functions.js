"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResultResum(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combineValue;
printResultResum(add(5, 12));
combineValue = add;
// combineValue = printResultResum;
// combineValue = 5;
console.log(combineValue(8, 8));
// let someValue = undefined;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
function sendRequest(data, cb) {
    return cb('Hi there');
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
