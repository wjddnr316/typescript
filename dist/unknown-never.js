"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'user';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('An error', 500);
